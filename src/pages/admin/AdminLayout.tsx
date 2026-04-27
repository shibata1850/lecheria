import { useEffect, useState } from 'react';
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { LogOut, FileText, Inbox } from 'lucide-react';
import type { User } from '@supabase/supabase-js';

export default function AdminLayout() {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (user === undefined) {
    return (
      <div className="min-h-screen bg-soft-gray flex items-center justify-center">
        <p className="text-mid-gray text-sm font-sans">読み込み中...</p>
      </div>
    );
  }

  if (user === null) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const navItems = [
    { to: '/admin/submissions', label: '投稿管理', icon: Inbox },
    { to: '/admin/news', label: '公開記事管理', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-soft-gray flex">
      {/* Sidebar */}
      <aside className="w-56 bg-charcoal flex flex-col shrink-0">
        <div className="px-6 py-6 border-b border-white/10">
          <p className="font-serif text-white font-light text-lg tracking-widest">Admin</p>
          <p className="text-xs text-white/40 font-sans mt-0.5 truncate">{user.email}</p>
        </div>

        <nav className="flex-1 py-4">
          {navItems.map(({ to, label, icon: Icon }) => {
            const active = location.pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-6 py-3 text-sm font-sans transition-colors ${active ? 'bg-gold/20 text-gold' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-6 py-4 text-sm font-sans text-white/50 hover:text-white transition-colors border-t border-white/10"
        >
          <LogOut className="w-4 h-4" />
          ログアウト
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
