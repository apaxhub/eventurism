import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'neutral' | 'success' | 'warning'
  className?: string
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const variants = {
    primary: 'bg-primary/10 text-primary border border-primary/20',
    outline: 'border border-secondary/30 text-secondary',
    neutral: 'bg-neutral/20 text-orange-800 border border-neutral/30',
    success: 'bg-green-50 text-green-700 border border-green-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
  }
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide', variants[variant], className)}>
      {children}
    </span>
  )
}
