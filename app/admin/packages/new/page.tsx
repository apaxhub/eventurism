import { PackageForm } from '@/components/admin/PackageForm'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'New Package' }

export default function NewPackagePage() {
  return (
    <div className="p-6 lg:p-8 pt-20 lg:pt-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/admin/packages" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-secondary transition-colors font-mono mb-4">
          <ChevronLeft className="w-4 h-4" /> Back to Packages
        </Link>
        <h1 className="font-display font-bold text-2xl text-secondary">New Package</h1>
        <p className="text-gray-500 text-sm font-mono mt-1">Create a new tour package listing</p>
      </div>
      <PackageForm mode="create" />
    </div>
  )
}
