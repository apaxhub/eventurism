'use client'
import { cn } from '@/lib/utils'
import { SelectHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, label, error, id, children, ...props }, ref) => (
  <div className="flex flex-col gap-1.5">
    {label && <label htmlFor={id} className="text-sm font-medium text-secondary">{label}</label>}
    <select
      id={id}
      ref={ref}
      className={cn(
        'w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary',
        'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all',
        error && 'border-red-400',
        className
      )}
      {...props}
    >
      {children}
    </select>
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
))
Select.displayName = 'Select'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, label, error, id, ...props }, ref) => (
  <div className="flex flex-col gap-1.5">
    {label && <label htmlFor={id} className="text-sm font-medium text-secondary">{label}</label>}
    <textarea
      id={id}
      ref={ref}
      className={cn(
        'w-full px-4 py-3 rounded-xl border border-border bg-white text-secondary placeholder:text-gray-400',
        'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none',
        error && 'border-red-400',
        className
      )}
      {...props}
    />
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
))
Textarea.displayName = 'Textarea'
