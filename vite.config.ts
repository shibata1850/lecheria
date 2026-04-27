import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyPublicExcluding(excludeGlobs: string[]) {
  return {
    name: 'copy-public-excluding',
    apply: 'build' as const,
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const outDir = path.resolve(__dirname, 'dist');
      const copyRecursive = (src: string, dest: string) => {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        for (const entry of fs.readdirSync(src)) {
          const srcPath = path.join(src, entry);
          const destPath = path.join(dest, entry);
          const relPath = path.relative(publicDir, srcPath);
          if (excludeGlobs.some((g) => relPath.includes(g))) continue;
          const stat = fs.statSync(srcPath);
          if (stat.isDirectory()) {
            copyRecursive(srcPath, destPath);
          } else {
            try {
              fs.copyFileSync(srcPath, destPath);
            } catch {
              // skip locked files
            }
          }
        }
      };
      copyRecursive(publicDir, outDir);
    },
  };
}

export default defineConfig({
  plugins: [react(), copyPublicExcluding(['脱毛 copy'])],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'markdown': ['react-markdown'],
          'supabase': ['@supabase/supabase-js'],
          'forms': ['react-hook-form', 'zod', '@hookform/resolvers'],
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
