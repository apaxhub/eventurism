import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover }: CardProps) {
  return (
    <div className={cn(
      'bg-white rounded-2xl border border-border/50 overflow-hidden',
      hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/10',
      className
    )}>
      {children}
    </div>
  )
}
