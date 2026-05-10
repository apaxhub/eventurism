'use client'
import { cn } from '@/lib/utils'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, id, ...props }, ref) => (
  <div className="flex flex-col gap-1.5">
    {label && <label htmlFor={id} className="text-sm font-medium text-secondary">{label}</label>}
    <input
      id={id}
      ref={ref}
      className={cn(
        'w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary placeholder:text-gray-400',
        'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all',
        error && 'border-red-400 focus:ring-red-200',
        className
      )}
      {...props}
    />
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
))
Input.displayName = 'Input'
export { Input }
