import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'
import { EnquiryStatusBadge, EnquiryActions } from '@/components/admin/EnquiryActions'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Enquiries' }

async function getEnquiries() {
  try {
    return await prisma.enquiry.findMany({ orderBy: { createdAt: 'desc' } })
  } catch { return [] }
}

export default async function AdminEnquiriesPage() {
  const enquiries = await getEnquiries()
  const newCount = enquiries.filter(e => e.status === 'new').length

  return (
    <div className="p-6 lg:p-8 pt-20 lg:pt-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display font-bold text-2xl text-secondary">Enquiries</h1>
          <p className="text-gray-500 text-sm font-mono mt-1">
            {enquiries.length} total · <span className="text-primary font-semibold">{newCount} new</span>
          </p>
        </div>
      </div>

      {/* Status filter chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['All', 'new', 'contacted', 'converted', 'closed'].map(s => {
          const count = s === 'All' ? enquiries.length : enquiries.filter(e => e.status === s).length
          return (
            <div key={s} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-white border border-border text-secondary">
              <span className="capitalize">{s}</span>
              <span className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full">{count}</span>
            </div>
          )
        })}
      </div>

      {enquiries.length === 0 ? (
        <div className="bg-white rounded-2xl border border-border/50 p-16 text-center">
          <div className="text-5xl mb-4">📭</div>
          <p className="text-gray-400 font-mono text-sm">No enquiries yet</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {enquiries.map(e => (
            <div key={e.id} className="bg-white rounded-2xl border border-border/50 p-5 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-display text-base shrink-0">
                    {e.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-display font-semibold text-secondary">{e.name}</span>
                      <EnquiryStatusBadge status={e.status} />
                      <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{e.service}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                      <a href={`tel:${e.phone}`} className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors font-mono">
                        <Phone className="w-3 h-3" />{e.phone}
                      </a>
                      <a href={`mailto:${e.email}`} className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors font-mono">
                        <Mail className="w-3 h-3" />{e.email}
                      </a>
                      <a href={`https://wa.me/${e.phone.replace(/\D/g,'')}`} className="flex items-center gap-1 text-xs text-gray-500 hover:text-green-600 transition-colors font-mono">
                        <MessageCircle className="w-3 h-3" />WhatsApp
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl px-3 py-2.5">{e.message}</p>
                    <div className="mt-2 text-xs text-gray-400 font-mono">
                      Received {format(new Date(e.createdAt), 'dd MMM yyyy, h:mm a')}
                    </div>
                  </div>
                </div>
                <EnquiryActions id={e.id} currentStatus={e.status} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
