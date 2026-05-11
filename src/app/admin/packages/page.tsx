import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Pencil, Eye } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import { AdminDeletePackageBtn } from '@/components/admin/AdminDeletePackageBtn'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Packages' }

async function getPackages() {
  try {
    return await prisma.package.findMany({ orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }] })
  } catch { return [] }
}

export default async function AdminPackagesPage() {
  const packages = await getPackages()

  return (
    <div className="p-6 lg:p-8 pt-20 lg:pt-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display font-bold text-2xl text-secondary">Packages</h1>
          <p className="text-gray-500 text-sm font-mono mt-1">{packages.length} packages total</p>
        </div>
        <Link href="/admin/packages/new" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors">
          <Plus className="w-4 h-4" /> Add Package
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-border/50 overflow-hidden">
        {packages.length === 0 ? (
          <div className="p-16 text-center">
            <div className="text-gray-300 text-5xl mb-4">📦</div>
            <p className="text-gray-400 font-mono text-sm mb-4">No packages yet</p>
            <Link href="/admin/packages/new" className="text-primary text-sm hover:underline">Create your first package</Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-ivory/50">
                  <th className="text-left px-5 py-3.5 text-xs font-mono text-gray-400 uppercase tracking-wider">Package</th>
                  <th className="text-left px-5 py-3.5 text-xs font-mono text-gray-400 uppercase tracking-wider hidden md:table-cell">Category</th>
                  <th className="text-left px-5 py-3.5 text-xs font-mono text-gray-400 uppercase tracking-wider hidden lg:table-cell">Price From</th>
                  <th className="text-left px-5 py-3.5 text-xs font-mono text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="text-right px-5 py-3.5 text-xs font-mono text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {packages.map(pkg => (
                  <tr key={pkg.id} className="hover:bg-ivory/30 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-gray-100 relative">
                          {pkg.thumbnail && (
                            <Image src={pkg.thumbnail} alt={pkg.title} fill sizes="48px" className="object-cover" />
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-secondary line-clamp-1">{pkg.title}</div>
                          <div className="text-xs text-gray-400 font-mono">{pkg.destination} · {pkg.duration}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell">
                      <span className="text-xs font-mono text-gray-500">{pkg.category}</span>
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <span className="text-sm font-medium text-secondary">{formatPrice(pkg.priceFrom)}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <Badge variant={pkg.published ? 'success' : 'warning'}>
                          {pkg.published ? 'Published' : 'Draft'}
                        </Badge>
                        {pkg.featured && <Badge variant="primary">Featured</Badge>}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/tours/${pkg.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-secondary rounded-lg hover:bg-gray-100 transition-colors" title="View live">
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link href={`/admin/packages/${pkg.id}`} className="p-2 text-gray-400 hover:text-secondary rounded-lg hover:bg-gray-100 transition-colors" title="Edit">
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <AdminDeletePackageBtn id={pkg.id} title={pkg.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
