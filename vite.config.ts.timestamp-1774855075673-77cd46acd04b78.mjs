// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import fs from "fs";
import path from "path";
var __vite_injected_original_dirname = "/home/project";
function copyPublicExcluding(excludeGlobs) {
  return {
    name: "copy-public-excluding",
    apply: "build",
    closeBundle() {
      const publicDir = path.resolve(__vite_injected_original_dirname, "public");
      const outDir = path.resolve(__vite_injected_original_dirname, "dist");
      const copyRecursive = (src, dest) => {
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
            }
          }
        }
      };
      copyRecursive(publicDir, outDir);
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [react(), copyPublicExcluding(["\u8131\u6BDB copy"])],
  build: {
    copyPublicDir: false
  },
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIGNvcHlQdWJsaWNFeGNsdWRpbmcoZXhjbHVkZUdsb2JzOiBzdHJpbmdbXSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdjb3B5LXB1YmxpYy1leGNsdWRpbmcnLFxuICAgIGFwcGx5OiAnYnVpbGQnIGFzIGNvbnN0LFxuICAgIGNsb3NlQnVuZGxlKCkge1xuICAgICAgY29uc3QgcHVibGljRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpO1xuICAgICAgY29uc3Qgb3V0RGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2Rpc3QnKTtcbiAgICAgIGNvbnN0IGNvcHlSZWN1cnNpdmUgPSAoc3JjOiBzdHJpbmcsIGRlc3Q6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZGVzdCkpIGZzLm1rZGlyU3luYyhkZXN0LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBmcy5yZWFkZGlyU3luYyhzcmMpKSB7XG4gICAgICAgICAgY29uc3Qgc3JjUGF0aCA9IHBhdGguam9pbihzcmMsIGVudHJ5KTtcbiAgICAgICAgICBjb25zdCBkZXN0UGF0aCA9IHBhdGguam9pbihkZXN0LCBlbnRyeSk7XG4gICAgICAgICAgY29uc3QgcmVsUGF0aCA9IHBhdGgucmVsYXRpdmUocHVibGljRGlyLCBzcmNQYXRoKTtcbiAgICAgICAgICBpZiAoZXhjbHVkZUdsb2JzLnNvbWUoKGcpID0+IHJlbFBhdGguaW5jbHVkZXMoZykpKSBjb250aW51ZTtcbiAgICAgICAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoc3JjUGF0aCk7XG4gICAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgY29weVJlY3Vyc2l2ZShzcmNQYXRoLCBkZXN0UGF0aCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmNQYXRoLCBkZXN0UGF0aCk7XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgLy8gc2tpcCBsb2NrZWQgZmlsZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb3B5UmVjdXJzaXZlKHB1YmxpY0Rpciwgb3V0RGlyKTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgY29weVB1YmxpY0V4Y2x1ZGluZyhbJ1x1ODEzMVx1NkJEQiBjb3B5J10pXSxcbiAgYnVpbGQ6IHtcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogWydsdWNpZGUtcmVhY3QnXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxRQUFRO0FBQ2YsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBS3pDLFNBQVMsb0JBQW9CLGNBQXdCO0FBQ25ELFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGNBQWM7QUFDWixZQUFNLFlBQVksS0FBSyxRQUFRLGtDQUFXLFFBQVE7QUFDbEQsWUFBTSxTQUFTLEtBQUssUUFBUSxrQ0FBVyxNQUFNO0FBQzdDLFlBQU0sZ0JBQWdCLENBQUMsS0FBYSxTQUFpQjtBQUNuRCxZQUFJLENBQUMsR0FBRyxXQUFXLElBQUksRUFBRyxJQUFHLFVBQVUsTUFBTSxFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQ2hFLG1CQUFXLFNBQVMsR0FBRyxZQUFZLEdBQUcsR0FBRztBQUN2QyxnQkFBTSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUs7QUFDcEMsZ0JBQU0sV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLO0FBQ3RDLGdCQUFNLFVBQVUsS0FBSyxTQUFTLFdBQVcsT0FBTztBQUNoRCxjQUFJLGFBQWEsS0FBSyxDQUFDLE1BQU0sUUFBUSxTQUFTLENBQUMsQ0FBQyxFQUFHO0FBQ25ELGdCQUFNLE9BQU8sR0FBRyxTQUFTLE9BQU87QUFDaEMsY0FBSSxLQUFLLFlBQVksR0FBRztBQUN0QiwwQkFBYyxTQUFTLFFBQVE7QUFBQSxVQUNqQyxPQUFPO0FBQ0wsZ0JBQUk7QUFDRixpQkFBRyxhQUFhLFNBQVMsUUFBUTtBQUFBLFlBQ25DLFFBQVE7QUFBQSxZQUVSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQ0Esb0JBQWMsV0FBVyxNQUFNO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDLG1CQUFTLENBQUMsQ0FBQztBQUFBLEVBQ25ELE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
