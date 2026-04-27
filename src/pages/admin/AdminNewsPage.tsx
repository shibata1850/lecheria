import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { NewsArticle, NewsStatus } from '../../lib/supabase';
import ReactMarkdown from 'react-markdown';
import { ChevronLeft, Plus, Trash2, Archive, Globe, CreditCard as Edit2, AlertCircle } from 'lucide-react';

const STATUS_BADGE: Record<NewsStatus, string> = {
  draft: 'bg-gray-100 text-gray-600',
  published: 'bg-emerald-100 text-emerald-700',
  archived: 'bg-amber-100 text-amber-700',
};

const STATUS_LABEL: Record<NewsStatus, string> = {
  draft: '下書き',
  published: '公開中',
  archived: 'アーカイブ',
};

type Mode = 'list' | 'edit' | 'new';

function generateSlug(title: string): string {
  const base = title.toLowerCase().replace(/[\s\u3000]+/g, '-').replace(/[^\w\u3040-\u9fff-]/g, '').slice(0, 60);
  return `${base}-${Date.now()}`;
}

export default function AdminNewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<Mode>('list');
  const [editing, setEditing] = useState<NewsArticle | null>(null);
  const [form, setForm] = useState({ title: '', body: '', status: 'draft' as NewsStatus });
  const [previewMode, setPreviewMode] = useState(false);
  const [actionError, setActionError] = useState('');
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => { fetchArticles(); }, []);

  const fetchArticles = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('news').select('*').order('created_at', { ascending: false });
    if (!error) setArticles(data ?? []);
    setLoading(false);
  };

  const openNew = () => {
    setForm({ title: '', body: '', status: 'draft' });
    setEditing(null);
    setPreviewMode(false);
    setActionError('');
    setMode('new');
  };

  const openEdit = (article: NewsArticle) => {
    setForm({ title: article.title, body: article.body, status: article.status });
    setEditing(article);
    setPreviewMode(false);
    setActionError('');
    setMode('edit');
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.body.trim()) { setActionError('タイトルと本文を入力してください'); return; }
    setSaving(true);
    setActionError('');
    if (mode === 'new') {
      const { error } = await supabase.from('news').insert({
        slug: generateSlug(form.title), title: form.title, body: form.body, status: form.status,
        published_at: form.status === 'published' ? new Date().toISOString() : null,
      });
      if (error) { setActionError('保存に失敗しました'); setSaving(false); return; }
    } else if (editing) {
      const updates: Partial<NewsArticle> = { title: form.title, body: form.body, status: form.status };
      if (form.status === 'published' && editing.status !== 'published') updates.published_at = new Date().toISOString();
      const { error } = await supabase.from('news').update(updates).eq('id', editing.id);
      if (error) { setActionError('保存に失敗しました'); setSaving(false); return; }
    }
    setMode('list');
    fetchArticles();
    setSaving(false);
  };

  const handleArchive = async (id: string) => { await supabase.from('news').update({ status: 'archived' }).eq('id', id); fetchArticles(); };
  const handlePublish = async (id: string) => { await supabase.from('news').update({ status: 'published', published_at: new Date().toISOString() }).eq('id', id); fetchArticles(); };
  const handleDelete = async (id: string) => { await supabase.from('news').delete().eq('id', id); setDeleteConfirm(null); fetchArticles(); };

  if (mode === 'new' || mode === 'edit') {
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <button onClick={() => setMode('list')} className="flex items-center gap-2 text-sm font-sans text-mid-gray hover:text-charcoal transition-colors mb-8">
          <ChevronLeft className="w-4 h-4" />一覧に戻る
        </button>
        <h1 className="font-serif text-2xl font-light text-charcoal mb-8">{mode === 'new' ? '新規記事作成' : '記事を編集'}</h1>
        <div className="bg-white border border-border p-8 space-y-6">
          <div>
            <label className="block text-xs font-sans tracking-widest uppercase text-mid-gray mb-2">タイトル</label>
            <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className="w-full border border-border px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:border-gold" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-sans tracking-widest uppercase text-mid-gray">本文（Markdown）</label>
              <div className="flex gap-1">
                <button type="button" onClick={() => setPreviewMode(false)}
                  className={`flex items-center gap-1 px-3 py-1 text-xs font-sans border transition-colors ${!previewMode ? 'bg-charcoal text-white border-charcoal' : 'bg-white text-mid-gray border-border hover:border-charcoal'}`}>
                  <Edit2 className="w-3 h-3" />編集
                </button>
                <button type="button" onClick={() => setPreviewMode(true)}
                  className={`flex items-center gap-1 px-3 py-1 text-xs font-sans border transition-colors ${previewMode ? 'bg-charcoal text-white border-charcoal' : 'bg-white text-mid-gray border-border hover:border-charcoal'}`}>
                  プレビュー
                </button>
              </div>
            </div>
            {previewMode ? (
              <div className="border border-border px-4 py-3 min-h-[200px] prose prose-sm max-w-none font-sans text-text-main leading-loose">
                <ReactMarkdown>{form.body}</ReactMarkdown>
              </div>
            ) : (
              <textarea value={form.body} onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))} rows={10}
                className="w-full border border-border px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:border-gold resize-y" />
            )}
          </div>
          <div>
            <label className="block text-xs font-sans tracking-widest uppercase text-mid-gray mb-2">ステータス</label>
            <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as NewsStatus }))}
              className="border border-border px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:border-gold bg-white">
              <option value="draft">下書き</option>
              <option value="published">公開</option>
              <option value="archived">アーカイブ</option>
            </select>
          </div>
          {actionError && (
            <div className="flex items-center gap-2 text-red-600 text-xs font-sans bg-red-50 border border-red-200 px-3 py-2">
              <AlertCircle className="w-4 h-4 shrink-0" />{actionError}
            </div>
          )}
          <div className="flex gap-3 pt-2">
            <button onClick={() => setMode('list')} className="btn-outline py-2 px-6 text-sm">キャンセル</button>
            <button onClick={handleSave} disabled={saving} className="btn-primary py-2 px-6 text-sm">
              {saving ? '保存中...' : '保存する'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-2xl font-light text-charcoal">公開記事管理</h1>
        <button onClick={openNew} className="flex items-center gap-2 btn-primary text-sm py-2.5 px-5">
          <Plus className="w-4 h-4" />新規作成
        </button>
      </div>
      {loading ? (
        <p className="text-mid-gray text-sm font-sans">読み込み中...</p>
      ) : articles.length === 0 ? (
        <div className="bg-white border border-border p-12 text-center">
          <p className="text-mid-gray text-sm font-sans">記事がありません</p>
        </div>
      ) : (
        <div className="bg-white border border-border divide-y divide-border">
          {articles.map((a) => (
            <div key={a.id} className="px-6 py-5 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="font-sans font-medium text-charcoal text-sm truncate mb-1">{a.title}</p>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-sans px-2.5 py-0.5 rounded-full ${STATUS_BADGE[a.status]}`}>{STATUS_LABEL[a.status]}</span>
                  <p className="text-xs font-sans text-silver">{new Date(a.created_at).toLocaleDateString('ja-JP')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => openEdit(a)} className="p-2 text-mid-gray hover:text-charcoal transition-colors" title="編集"><Edit2 className="w-4 h-4" /></button>
                {a.status === 'published' ? (
                  <button onClick={() => handleArchive(a.id)} className="p-2 text-mid-gray hover:text-amber-600 transition-colors" title="アーカイブ"><Archive className="w-4 h-4" /></button>
                ) : (
                  <button onClick={() => handlePublish(a.id)} className="p-2 text-mid-gray hover:text-emerald-600 transition-colors" title="公開"><Globe className="w-4 h-4" /></button>
                )}
                {deleteConfirm === a.id ? (
                  <div className="flex items-center gap-1">
                    <button onClick={() => handleDelete(a.id)} className="text-xs font-sans text-red-600 border border-red-300 px-2 py-1 hover:bg-red-50">削除確定</button>
                    <button onClick={() => setDeleteConfirm(null)} className="text-xs font-sans text-mid-gray border border-border px-2 py-1 hover:bg-soft-gray">取消</button>
                  </div>
                ) : (
                  <button onClick={() => setDeleteConfirm(a.id)} className="p-2 text-mid-gray hover:text-red-600 transition-colors" title="削除"><Trash2 className="w-4 h-4" /></button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
