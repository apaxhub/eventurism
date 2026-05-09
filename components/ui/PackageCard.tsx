import Image from 'next/image'
import Link from 'next/link'
import { Card } from './Card'
import { Badge } from './Badge'
import { formatPrice } from '@/lib/utils'
import { Clock, Users, MapPin, ArrowRight } from 'lucide-react'

interface PackageCardProps {
  id: string
  title: string
  slug: string
  destination: string
  duration: string
  groupSize: string
  priceFrom: number
  tag?: string | null
  thumbnail: string
  category: string
}

export function PackageCard({ title, slug, destination, duration, groupSize, priceFrom, tag, thumbnail }: PackageCardProps) {
  return (
    <Card hover className="group flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
        {tag && (
          <div className="absolute top-3 left-3">
            <Badge variant="primary" className="bg-primary text-white border-none text-xs font-mono">{tag}</Badge>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start gap-1 text-xs text-gray-500 font-mono">
          <MapPin className="w-3 h-3 mt-0.5 text-primary shrink-0" />
          <span>{destination}</span>
        </div>
        <h3 className="font-display font-bold text-lg text-secondary leading-tight line-clamp-2">{title}</h3>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-primary" />{duration}</span>
          <span className="flex items-center gap-1"><Users className="w-3 h-3 text-primary" />{groupSize}</span>
        </div>
        <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-mono">Starting from</span>
            <p className="text-xl font-bold text-primary font-display">{formatPrice(priceFrom)}</p>
          </div>
          <Link
            href={`/tours/${slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
          >
            View <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  )
}
