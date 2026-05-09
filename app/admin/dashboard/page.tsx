import { prisma } from '@/lib/prisma'
import { Package, MessageSquare, TrendingUp, Clock } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Dashboard' }

async function getStats() {
  try {
    const [totalPackages, publishedPackages, totalEnquiries, newEnquiries, recentEnquiries] = await Promise.all([
      prisma.package.count(),
      prisma.package.count({ where: { published: true } }),
      prisma.enquiry.count(),
      prisma.enquiry.count({ where: { status: 'new' } }),
      prisma.enquiry.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
    ])
    return { totalPackages, publishedPackages, totalEnquiries, newEnquiries, recentEnquiries }
  } catch {
    return { totalPackages: 0, publishedPackages: 0, totalEnquiries: 0, newEnquiries: 0, recentEnquiries: [] }
  }
}

export default async function AdminDashboard() {
  const { totalPackages, publishedPackages, totalEnquiries, newEnquiries, recentEnquiries } = await getStats()

  const stats = [
    { label: 'Total Packages', value: totalPackages, sub: `${publishedPackages} published`, icon: Package, color: 'bg-blue-50 text-blue-600', href: '/admin/packages' },
    { label: 'Total Enquiries', value: totalEnquiries, sub: 'All time', icon: MessageSquare, color: 'bg-green-50 text-green-600', href: '/admin/enquiries' },
    { label: 'New Enquiries', value: newEnquiries, sub: 'Awaiting response', icon: TrendingUp, color: 'bg-primary/10 text-primary', href: '/admin/enquiries' },
    { label: 'Response Rate', value: '< 4h', sub: 'Average response time', icon: Clock, color: 'bg-purple-50 text-purple-600', href: '/admin/enquiries' },
  ]

  return (
    <div className="p-6 lg:p-8 pt-20 lg:pt-8">
      <div className="mb-8">
        <h1 className="font-display font-bold text-2xl text-secondary">Dashboard</h1>
        <p className="text-gray-500 text-sm font-mono mt-1">Welcome back — here&apos;s an overview of Eventurism.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, sub, icon: Icon, color, href }) => (
          <Link key={label} href={href} className="bg-white rounded-2xl p-5 border border-border/50 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="font-display font-bold text-3xl text-secondary">{value}</div>
            <div className="text-sm font-medium text-secondary mt-0.5">{label}</div>
            <div className="text-xs text-gray-400 font-mono mt-0.5">{sub}</div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent enquiries */}
        <div className="bg-white rounded-2xl border border-border/50 overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-border/50">
            <h2 className="font-display font-semibold text-secondary">Recent Enquiries</h2>
            <Link href="/admin/enquiries" className="text-xs text-primary hover:underline font-mono">View all</Link>
          </div>
          <div className="divide-y divide-border/50">
            {recentEnquiries.length === 0 ? (
              <div className="p-8 text-center text-gray-400 text-sm font-mono">No enquiries yet</div>
            ) : recentEnquiries.map(e => (
              <div key={e.id} className="flex items-center gap-3 px-5 py-3.5">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm font-display shrink-0">
                  {e.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-secondary truncate">{e.name}</div>
                  <div className="text-xs text-gray-400 font-mono truncate">{e.service} · {e.phone}</div>
                </div>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                  e.status === 'new' ? 'bg-primary/10 text-primary' :
                  e.status === 'contacted' ? 'bg-blue-50 text-blue-600' :
                  e.status === 'converted' ? 'bg-green-50 text-green-600' :
                  'bg-gray-100 text-gray-500'
                }`}>
                  {e.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-2xl border border-border/50 overflow-hidden">
          <div className="p-5 border-b border-border/50">
            <h2 className="font-display font-semibold text-secondary">Quick Actions</h2>
          </div>
          <div className="p-5 flex flex-col gap-3">
            <Link href="/admin/packages/new" className="flex items-center gap-3 p-4 rounded-xl bg-primary text-white hover:bg-primary-dark transition-colors">
              <Package className="w-5 h-5" />
              <div>
                <div className="font-medium text-sm">Add New Package</div>
                <div className="text-xs text-white/70">Create a tour package</div>
              </div>
            </Link>
            <Link href="/admin/enquiries" className="flex items-center gap-3 p-4 rounded-xl bg-ivory hover:bg-ivory-dark border border-border/50 transition-colors">
              <MessageSquare className="w-5 h-5 text-primary" />
              <div>
                <div className="font-medium text-sm text-secondary">Review Enquiries</div>
                <div className="text-xs text-gray-400">{newEnquiries} new awaiting response</div>
              </div>
            </Link>
            <Link href="/" target="_blank" className="flex items-center gap-3 p-4 rounded-xl bg-ivory hover:bg-ivory-dark border border-border/50 transition-colors">
              <TrendingUp className="w-5 h-5 text-primary" />
              <div>
                <div className="font-medium text-sm text-secondary">View Live Website</div>
                <div className="text-xs text-gray-400">Opens in a new tab</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
