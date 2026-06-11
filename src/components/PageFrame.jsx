import { cn } from '@/lib/utils'

export default function PageFrame({ children, className }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[28px] border border-primary/15 bg-gradient-to-b from-primary/[0.05] via-white/[0.02] to-transparent p-4 sm:p-6 lg:p-8',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      {children}
    </div>
  )
}
