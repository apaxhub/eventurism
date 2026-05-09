'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const STATUS_STYLES: Record<string, string> = {
  new: 'bg-primary/10 text-primary',
  contacted: 'bg-blue-50 text-blue-600',
  converted: 'bg-green-50 text-green-600',
  closed: 'bg-gray-100 text-gray-500',
}

export function EnquiryStatusBadge({ status }: { status: string }) {
  return (
    <span className={cn('text-xs font-mono px-2 py-0.5 rounded-full capitalize', STATUS_STYLES[status] || 'bg-gray-100 text-gray-500')}>
      {status}
    </span>
  )
}

const STATUSES = ['new', 'contacted', 'converted', 'closed']

export function EnquiryActions({ id, currentStatus }: { id: string; currentStatus: string }) {
  const router = useRouter()
  const [status, setStatus] = useState(currentStatus)
  const [loading, setLoading] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const updateStatus = async (newStatus: string) => {
    setLoading(true)
    try {
      await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      setStatus(newStatus)
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    setDeleting(true)
    try {
      await fetch(`/api/enquiries/${id}`, { method: 'DELETE' })
      router.refresh()
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="flex flex-col gap-2 shrink-0">
      <select
        value={status}
        onChange={e => updateStatus(e.target.value)}
        disabled={loading}
        className="text-xs font-mono px-2.5 py-1.5 rounded-xl border border-border bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-60 cursor-pointer"
      >
        {STATUSES.map(s => <option key={s} value={s} className="capitalize">{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
      </select>
      {confirmDelete ? (
        <div className="flex gap-1">
          <button onClick={handleDelete} disabled={deleting} className="text-xs font-mono bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-60">
            {deleting ? '...' : 'Delete'}
          </button>
          <button onClick={() => setConfirmDelete(false)} className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">Cancel</button>
        </div>
      ) : (
        <button onClick={() => setConfirmDelete(true)} className="text-xs font-mono text-gray-400 hover:text-red-500 transition-colors text-left px-1">
          Delete
        </button>
      )}
    </div>
  )
}
