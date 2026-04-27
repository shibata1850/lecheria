import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Upload, X, Eye, CreditCard as Edit2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const SUBMIT_TOKEN = import.meta.env.VITE_SUBMIT_TOKEN as string | undefined;

const schema = z.object({
  submitter_name: z.string().min(1, 'お名前を入力してください'),
  submitter_email: z.string().min(1, 'メールアドレスを入力してください').email('正しいメールアドレスを入力してください'),
  title: z.string().min(1, 'タイトルを入力してください').max(100, '100文字以内で入力してください'),
  body: z.string().min(1, '本文を入力してください'),
});

type FormData = z.infer<typeof schema>;

type Step = 'form' | 'confirm' | 'done';

export default function SubmitPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('key');

  const [step, setStep] = useState<Step>('form');
  const [previewMode, setPreviewMode] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [imageError, setImageError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formSnapshot, setFormSnapshot] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const bodyValue = watch('body', '');
  const titleValue = watch('title', '');

  if (SUBMIT_TOKEN && token !== SUBMIT_TOKEN) {
    return (
      <div className="min-h-screen bg-soft-gray flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-serif text-2xl font-light text-charcoal mb-4">ページが見つかりません</p>
          <p className="text-mid-gray text-sm font-sans">このURLは無効です。</p>
        </div>
      </div>
    );
  }

  const validateImages = (files: File[]): string => {
    if (files.length > 3) return '画像は最大3枚までです';
    for (const f of files) {
      if (f.size > 5 * 1024 * 1024) return `${f.name} のサイズが5MBを超えています`;
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(f.type)) {
        return `${f.name} は jpg/png/webp のみ対応しています`;
      }
    }
    return '';
  };

  const addImages = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files);
    const combined = [...images, ...newFiles].slice(0, 3);
    const err = validateImages(combined);
    setImageError(err);
    if (!err) setImages(combined);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImageError('');
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    addImages(e.dataTransfer.files);
  }, [images]);

  const onConfirm = (data: FormData) => {
    setFormSnapshot(data);
    setStep('confirm');
  };

  const onSubmit = async () => {
    if (!formSnapshot) return;
    setUploading(true);
    setSubmitError('');

    try {
      const imageUrls: string[] = [];
      for (const file of images) {
        const ext = file.name.split('.').pop();
        const path = `${crypto.randomUUID()}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from('news-images')
          .upload(path, file);
        if (uploadError) throw uploadError;
        const { data: urlData } = supabase.storage.from('news-images').getPublicUrl(path);
        imageUrls.push(urlData.publicUrl);
      }

      const { error } = await supabase.from('submissions').insert({
        submitter_name: formSnapshot.submitter_name,
        submitter_email: formSnapshot.submitter_email,
        title: formSnapshot.title,
        body: formSnapshot.body,
        image_urls: imageUrls,
      });

      if (error) throw error;
      setStep('done');
    } catch (err) {
      setSubmitError('送信に失敗しました。しばらくしてからもう一度お試しください。');
    } finally {
      setUploading(false);
    }
  };

  if (step === 'done') {
    return (
      <div className="min-h-screen bg-soft-gray flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-gold" strokeWidth={1} />
          </div>
          <p className="section-label mb-4">THANK YOU</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <p className="font-serif text-2xl font-light text-charcoal mb-6">
            ご投稿ありがとうございました
          </p>
          <p className="text-mid-gray text-sm font-sans leading-loose">
            SOFTDOINGにて内容確認の上、公開いたします。<br />
            しばらくお待ちください。
          </p>
        </div>
      </div>
    );
  }

  if (step === 'confirm' && formSnapshot) {
    return (
      <div className="min-h-screen bg-soft-gray py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-4">CONFIRM</p>
            <div className="h-px w-8 bg-silver mx-auto mb-6" />
            <h1 className="font-serif text-2xl md:text-3xl font-light text-charcoal">内容確認</h1>
          </div>

          <div className="bg-white border border-border p-8 md:p-10 space-y-6 mb-8">
            <div className="border-b border-border pb-5">
              <p className="text-xs font-sans tracking-widest text-mid-gray uppercase mb-2">投稿者名</p>
              <p className="text-charcoal font-sans">{formSnapshot.submitter_name}</p>
            </div>
            <div className="border-b border-border pb-5">
              <p className="text-xs font-sans tracking-widest text-mid-gray uppercase mb-2">メールアドレス</p>
              <p className="text-charcoal font-sans">{formSnapshot.submitter_email}</p>
            </div>
            <div className="border-b border-border pb-5">
              <p className="text-xs font-sans tracking-widest text-mid-gray uppercase mb-2">タイトル</p>
              <p className="text-charcoal font-sans font-medium">{formSnapshot.title}</p>
            </div>
            <div className={images.length > 0 ? 'border-b border-border pb-5' : ''}>
              <p className="text-xs font-sans tracking-widest text-mid-gray uppercase mb-3">本文</p>
              <div className="prose prose-sm max-w-none font-sans text-text-main leading-loose">
                <ReactMarkdown>{formSnapshot.body}</ReactMarkdown>
              </div>
            </div>
            {images.length > 0 && (
              <div>
                <p className="text-xs font-sans tracking-widest text-mid-gray uppercase mb-3">添付画像</p>
                <div className="flex flex-wrap gap-3">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={URL.createObjectURL(img)}
                      alt={`画像${i + 1}`}
                      className="w-24 h-24 object-cover border border-border"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {submitError && (
            <div className="flex items-center gap-2 text-red-600 text-sm font-sans mb-6 bg-red-50 border border-red-200 px-4 py-3">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {submitError}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setStep('form')}
              className="btn-outline flex-1 text-center"
              disabled={uploading}
            >
              修正する
            </button>
            <button
              onClick={onSubmit}
              disabled={uploading}
              className="btn-primary flex-1 text-center flex items-center justify-center gap-2"
            >
              {uploading ? '送信中...' : '送信する'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-gray py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-4">SUBMIT</p>
          <div className="h-px w-8 bg-silver mx-auto mb-6" />
          <h1 className="font-serif text-2xl md:text-3xl font-light text-charcoal">お知らせを投稿する</h1>
        </div>

        <form onSubmit={handleSubmit(onConfirm)} className="space-y-7">
          {/* 投稿者名 */}
          <div>
            <label className="block text-xs font-sans tracking-widest uppercase text-mid-gray mb-2">
              投稿者名 <span className="text-gold">*</span>
            </label>
            <input
              {...register('submitter_name')}
              type="text"
              placeholder="山田 太郎"
              className="w-full border border-border bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder-silver focus:outline-none focus:border-gold transition-colors"
            />
            {errors.submitter_name && (
              <p className="text-red-500 text-xs font-sans mt-1">{errors.submitter_name.message}</p>
            )}
          </div>

          {/* メール */}
          <div>
            <label className="block text-xs font-sans tracking-widest uppercase text-mid-gray mb-2">
              メールアドレス <span className="text-gold">*</span>
            </label>
            <input
              {...register('submitter_email')}
              type="email"
              placeholder="example@email.com"
              className="w-full border border-border bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder-silver focus:outline-none focus:border-gold transition-colors"
            />
            {errors.submitter_email && (
              <p className="text-red-500 text-xs font-sans mt-1">{errors.submitter_email.message}</p>
            )}
          </div>

          {/* タイトル */}
          <div>
            <label className="block text-xs font-sans tracking-widest uppercase text-mid-gray mb-2">
              タイトル <span className="text-gold">*</span>
            </label>
            <div className="relative">
              <input
                {...register('title')}
                type="text"
                placeholder="タイトルを入力してください"
                maxLength={100}
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder-silver focus:outline-none focus:border-gold transition-colors pr-16"
              />
              <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-sans ${titleValue.length > 90 ? 'text-gold' : 'text-silver'}`}>
                {titleValue.length}/100
              </span>
            </div>
            {errors.title && (
              <p className="text-red-500 text-xs font-sans mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* 本文 */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-sans tracking-widest uppercase text-mid-gray">
                本文 <span className="text-gold">*</span>
                <span className="ml-2 normal-case tracking-normal text-silver">（Markdown対応）</span>
              </label>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setPreviewMode(false)}
                  className={`flex items-center gap-1 px-3 py-1 text-xs font-sans border transition-colors ${!previewMode ? 'bg-charcoal text-white border-charcoal' : 'bg-white text-mid-gray border-border hover:border-charcoal'}`}
                >
                  <Edit2 className="w-3 h-3" />編集
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewMode(true)}
                  className={`flex items-center gap-1 px-3 py-1 text-xs font-sans border transition-colors ${previewMode ? 'bg-charcoal text-white border-charcoal' : 'bg-white text-mid-gray border-border hover:border-charcoal'}`}
                >
                  <Eye className="w-3 h-3" />プレビュー
                </button>
              </div>
            </div>
            {previewMode ? (
              <div className="w-full border border-border bg-white px-4 py-3 min-h-[200px] prose prose-sm max-w-none font-sans text-text-main leading-loose">
                {bodyValue ? <ReactMarkdown>{bodyValue}</ReactMarkdown> : <p className="text-silver">プレビューはここに表示されます</p>}
              </div>
            ) : (
              <textarea
                {...register('body')}
                rows={8}
                placeholder="本文を入力してください&#10;&#10;**太字** や *斜体* などのMarkdown記法が使えます"
                className="w-full border border-border bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder-silver focus:outline-none focus:border-gold transition-colors resize-y"
              />
            )}
            {errors.body && (
              <p className="text-red-500 text-xs font-sans mt-1">{errors.body.message}</p>
            )}
          </div>

          {/* 画像 */}
          <div>
            <label className="block text-xs font-sans tracking-widest uppercase text-mid-gray mb-2">
              画像（任意・最大3枚・各5MB以内・jpg/png/webp）
            </label>
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed transition-colors px-6 py-8 text-center cursor-pointer ${isDragging ? 'border-gold bg-gold/5' : 'border-border bg-white hover:border-gold/50'}`}
              onClick={() => document.getElementById('image-input')?.click()}
            >
              <Upload className="w-8 h-8 text-silver mx-auto mb-3" strokeWidth={1} />
              <p className="text-sm font-sans text-mid-gray">
                ドラッグ＆ドロップ、またはクリックして選択
              </p>
              <p className="text-xs font-sans text-silver mt-1">最大3枚まで</p>
              <input
                id="image-input"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                className="hidden"
                onChange={(e) => addImages(e.target.files)}
              />
            </div>
            {imageError && (
              <p className="text-red-500 text-xs font-sans mt-1">{imageError}</p>
            )}
            {images.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-3">
                {images.map((img, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`プレビュー${i + 1}`}
                      className="w-24 h-24 object-cover border border-border"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute -top-2 -right-2 w-5 h-5 bg-charcoal text-white rounded-full flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button type="submit" className="btn-primary w-full text-center">
            内容を確認する
          </button>
        </form>
      </div>
    </div>
  );
}
