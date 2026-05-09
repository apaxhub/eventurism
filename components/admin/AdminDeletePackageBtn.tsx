'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'

interface Props { id: string; title: string }

export function AdminDeletePackageBtn({ id, title }: Props) {
  const [confirming, setConfirming] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    setLoading(true)
    try {
      await fetch(`/api/packages/${id}`, { method: 'DELETE' })
      router.refresh()
    } finally {
      setLoading(false)
      setConfirming(false)
    }
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-1">
        <button onClick={handleDelete} disabled={loading} className="text-xs font-mono bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-60">
          {loading ? '...' : 'Delete'}
        </button>
        <button onClick={() => setConfirming(false)} className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded-lg hover:bg-gray-200 transition-colors">
          Cancel
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      title={`Delete ${title}`}
      className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  )
}
