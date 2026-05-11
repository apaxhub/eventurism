'use client'
import { useState, useRef } from 'react'
import { Upload, X, ImageIcon, AlertCircle, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ImageUploaderProps {
  thumbnail: string
  images: string[]
  onThumbnailChange: (url: string) => void
  onImagesChange: (urls: string[]) => void
  maxImages?: number
}

const MAX_TOTAL = 5
const MAX_BYTES = 2 * 1024 * 1024

export function ImageUploader({ thumbnail, images, onThumbnailChange, onImagesChange }: ImageUploaderProps) {
  const [uploading, setUploading] = useState<string | null>(null)
  const [errors, setErrors] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const totalCount = (thumbnail ? 1 : 0) + images.length
  const canUpload = totalCount < MAX_TOTAL

  const uploadFile = async (file: File, isThumb: boolean) => {
    if (file.size > MAX_BYTES) {
      setErrors(prev => [...prev, `${file.name}: exceeds 2MB limit`])
      return
    }
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowed.includes(file.type)) {
      setErrors(prev => [...prev, `${file.name}: unsupported format`])
      return
    }

    setUploading(file.name)
    try {
      const form = new FormData()
      form.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: form })
      if (!res.ok) throw new Error((await res.json()).error)
      const { url } = await res.json()

      if (isThumb) {
        onThumbnailChange(url)
      } else {
        onImagesChange([...images, url])
      }
    } catch (err: unknown) {
      setErrors(prev => [...prev, err instanceof Error ? err.message : 'Upload failed'])
    } finally {
      setUploading(null)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, isThumb: boolean) => {
    const files = Array.from(e.target.files || [])
    const remaining = MAX_TOTAL - totalCount
    const toProcess = isThumb ? files.slice(0, 1) : files.slice(0, remaining)
    setErrors([])
    toProcess.forEach(f => uploadFile(f, isThumb))
    e.target.value = ''
  }

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index)
    onImagesChange(updated)
  }

  const allImages = [
    ...(thumbnail ? [{ url: thumbnail, isThumb: true }] : []),
    ...images.map(url => ({ url, isThumb: false })),
  ]

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-secondary">Images</label>
        <span className="text-xs font-mono text-gray-400">{totalCount}/{MAX_TOTAL} · max 2MB each</span>
      </div>

      {/* Image grid */}
      {allImages.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {allImages.map(({ url, isThumb }, idx) => (
            <div key={url} className="relative group aspect-video rounded-xl overflow-hidden bg-gray-100 border-2 border-border/50">
              <Image src={url} alt={`Image ${idx + 1}`} fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
              {isThumb && (
                <div className="absolute top-1 left-1 bg-primary text-white rounded-md px-1 py-0.5 flex items-center gap-0.5">
                  <Star className="w-2.5 h-2.5" />
                  <span className="text-xs font-mono">Cover</span>
                </div>
              )}
              <button
                type="button"
                onClick={() => isThumb ? onThumbnailChange('') : removeImage(images.indexOf(url))}
                className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Upload area */}
      {canUpload && (
        <div
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            'relative border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer',
            'hover:border-primary hover:bg-primary/5 transition-colors',
            uploading && 'pointer-events-none opacity-60'
          )}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            multiple={!thumbnail}
            className="sr-only"
            onChange={e => handleFileSelect(e, !thumbnail)}
          />
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              <p className="text-sm text-gray-500 font-mono">Uploading {uploading}...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Upload className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-secondary">
                  {!thumbnail ? 'Upload cover image first' : `Add more images (${MAX_TOTAL - totalCount} left)`}
                </p>
                <p className="text-xs text-gray-400 font-mono mt-0.5">JPEG, PNG, WebP · Max 2MB each</p>
              </div>
            </div>
          )}
        </div>
      )}

      {!canUpload && (
        <div className="flex items-center gap-2 text-xs text-gray-400 font-mono bg-gray-50 rounded-xl px-3 py-2">
          <ImageIcon className="w-3.5 h-3.5" />
          Maximum {MAX_TOTAL} images reached
        </div>
      )}

      {errors.length > 0 && (
        <div className="flex flex-col gap-1">
          {errors.map((e, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {e}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
