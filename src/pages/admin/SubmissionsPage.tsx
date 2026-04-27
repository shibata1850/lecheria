import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { Submission, SubmissionStatus } from '../../lib/supabase';
import ReactMarkdown from 'react-markdown';
import { X, Check, ChevronLeft, AlertCircle } from 'lucide-react';

const STATUS_TABS: { key: SubmissionStatus; label: string }[] = [
  { key: 'pending', label: '保留中' },
  { key: 'approved', label: '承認済み' },
  { key: 'rejected', label: '却下' },
];

const STATUS_BADGE: Record<SubmissionStatus, string> = {
  pending: 'bg-amber-100 text-amber-700',
  approved: 'bg-emerald-100 text-emerald-700',
  rejected: 'bg-red-100 text-red-600',
};

const STATUS_LABEL: Record<SubmissionStatus, string> = {
  pending: '保留中',
  approved: '承認済み',
  rejected: '却下',
};

function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .replace(/[\s\u3000]+/g, '-')
    .replace(/[^\w\u3040-\u9fff-]/g, '')
    .slice(0, 60);
  return `${base}-${Date.now()}`;
}

export default function SubmissionsPage() {
  const [activeTab, setActiveTab] = useState<SubmissionStatus>('pending');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Submission | null>(null);
  const [rejectNote, setRejectNote] = useState('');
  const [showRejectInput, setShowRejectInput] = useState(false);
  const [actionError, setActionError] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetchSubmissions();
  }, [activeTab]);

  const fetchSubmissions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .eq('status', activeTab)
      .order('created_at', { ascending: false });
    if (!error) setSubmissions(data ?? []);
    setLoading(false);
  };

  const handleApprove = async (submission: Submission) => {
    setActionLoading(true);
    setActionError('');

    const slug = generateSlug(submission.title);

    const { error: newsError } = await supabase.from('news').insert({
      slug,
      title: submission.title,
      body: submission.body,
      image_urls: submission.image_urls,
      status: 'published',
      published_at: new Date().toISOString(),
      source_submission_id: submission.id,
    });

    if (newsError) {
      setActionError('公開に失敗しました: ' + newsError.message);
      setActionLoading(false);
      return;
    }

    const { error: updateError } = await supabase
      .from('submissions')
      .update({ status: 'approved' })
      .eq('id', submission.id);

    if (updateError) {
      setActionError('ステータス更新に失敗しました');
      setActionLoading(false);
      return;
    }

    setSelected(null);
    fetchSubmissions();
    setActionLoading(false);
  };

  const handleReject = async (submission: Submission) => {
    if (!rejectNote.trim()) {
      setActionError('却下理由を入力してください');
      return;
    }
    setActionLoading(true);
    setActionError('');

    const { error } = await supabase
      .from('submissions')
      .update({ status: 'rejected', admin_note: rejectNote })
      .eq('id', submission.id);

    if (error) {
      setActionError('却下処理に失敗しました');
      setActionLoading(false);
      return;
    }

    setSelected(null);
    setRejectNote('');
    setShowRejectInput(false);
    fetchSubmissions();
    setActionLoading(false);
  };

  const openDetail = (s: Submission) => {
    setSelected(s);
    setRejectNote('');
    setShowRejectInput(false);
    setActionError('');
  };

  if (selected) {
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <button
          onClick={() => setSelected(null)}
          className="flex items-center gap-2 text-sm font-sans text-mid-gray hover:text-charcoal transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          一覧に戻る
        </button>

        <div className="bg-white border border-border p-8 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-xl font-light text-charcoal mb-1">{selected.title}</h2>
              <p className="text-xs font-sans text-mid-gray">{selected.submitter_name} / {selected.submitter_email}</p>
              <p className="text-xs font-sans text-silver mt-1">{new Date(selected.created_at).toLocaleString('ja-JP')}</p>
            </div>
            <span className={`text-xs font-sans px-3 py-1 rounded-full ${STATUS_BADGE[selected.status]}`}>
              {STATUS_LABEL[selected.status]}
            </span>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-xs font-sans tracking-widest uppercase text-mid-gray mb-3">本文</p>
            <div className="prose prose-sm max-w-none font-sans text-text-main leading-loose">
              <ReactMarkdown>{selected.body}</ReactMarkdown>
            </div>
          </div>

          {selected.image_urls.length > 0 && (
            <div className="border-t border-border pt-6">
              <p className="text-xs font-sans tracking-widest uppercase text-mid-gray mb-3">添付画像</p>
              <div className="flex flex-wrap gap-3">
                {selected.image_urls.map((url, i) => (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer">
                    <img src={url} alt={`画像${i + 1}`} className="w-32 h-32 object-cover border border-border hover:opacity-80 transition-opacity" loading="lazy" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {selected.admin_note && (
            <div className="border-t border-border pt-6">
              <p className="text-xs font-sans tracking-widest uppercase text-mid-gray mb-2">管理者メモ</p>
              <p className="text-sm font-sans text-text-main">{selected.admin_note}</p>
            </div>
          )}

          {actionError && (
            <div className="flex items-center gap-2 text-red-600 text-xs font-sans bg-red-50 border border-red-200 px-3 py-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {actionError}
            </div>
          )}

          {selected.status === 'pending' && (
            <div className="border-t border-border pt-6 space-y-3">
              {showRejectInput ? (
                <div className="space-y-3">
                  <textarea
                    value={rejectNote}
                    onChange={(e) => setRejectNote(e.target.value)}
                    rows={3}
                    placeholder="却下理由を入力してください"
                    className="w-full border border-border px-3 py-2 text-sm font-sans text-charcoal focus:outline-none focus:border-gold"
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={() => { setShowRejectInput(false); setRejectNote(''); setActionError(''); }}
                      className="btn-outline text-sm py-2 px-6"
                    >
                      キャンセル
                    </button>
                    <button
                      onClick={() => handleReject(selected)}
                      disabled={actionLoading}
                      className="flex items-center gap-2 bg-red-600 text-white text-xs font-sans tracking-wider px-6 py-2 hover:bg-red-700 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      却下を確定
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleApprove(selected)}
                    disabled={actionLoading}
                    className="flex items-center gap-2 bg-emerald-600 text-white text-xs font-sans tracking-wider px-6 py-3 hover:bg-emerald-700 transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    承認して公開
                  </button>
                  <button
                    onClick={() => setShowRejectInput(true)}
                    disabled={actionLoading}
                    className="flex items-center gap-2 bg-red-600 text-white text-xs font-sans tracking-wider px-6 py-3 hover:bg-red-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    却下
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="font-serif text-2xl font-light text-charcoal mb-8">投稿管理</h1>

      <div className="flex gap-1 mb-8">
        {STATUS_TABS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2 text-xs font-sans tracking-wider border transition-colors ${activeTab === key ? 'bg-charcoal text-white border-charcoal' : 'bg-white text-text-main border-border hover:border-charcoal'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-mid-gray text-sm font-sans">読み込み中...</p>
      ) : submissions.length === 0 ? (
        <div className="bg-white border border-border p-12 text-center">
          <p className="text-mid-gray text-sm font-sans">{STATUS_LABEL[activeTab]}の投稿はありません</p>
        </div>
      ) : (
        <div className="bg-white border border-border divide-y divide-border">
          {submissions.map((s) => (
            <button
              key={s.id}
              onClick={() => openDetail(s)}
              className="w-full text-left px-6 py-5 hover:bg-soft-gray transition-colors flex items-start justify-between gap-4"
            >
              <div className="min-w-0">
                <p className="font-sans font-medium text-charcoal text-sm truncate mb-1">{s.title}</p>
                <p className="text-xs font-sans text-mid-gray">{s.submitter_name} / {new Date(s.created_at).toLocaleString('ja-JP')}</p>
              </div>
              <span className={`text-xs font-sans px-2.5 py-1 rounded-full shrink-0 ${STATUS_BADGE[s.status]}`}>
                {STATUS_LABEL[s.status]}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
