import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError('メールアドレスまたはパスワードが正しくありません');
      setLoading(false);
      return;
    }

    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-soft-gray flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <p className="section-label mb-4">ADMIN</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <h1 className="font-serif text-2xl font-light text-charcoal">管理画面ログイン</h1>
        </div>

        <form onSubmit={handleLogin} className="bg-white border border-border p-8 space-y-5">
          <div>
            <label className="block text-xs font-sans tracking-widest uppercase text-mid-gray mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-border px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-sans tracking-widest uppercase text-mid-gray mb-2">
              パスワード
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-border px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 text-xs font-sans bg-red-50 border border-red-200 px-3 py-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full text-center"
          >
            {loading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>
      </div>
    </div>
  );
}
