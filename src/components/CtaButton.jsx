import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const pillClass = 'rounded-full font-semibold hover:-translate-y-px'

export function CtaLink({
  href,
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}) {
  return (
    <Button
      asChild
      variant={variant === 'primary' ? 'default' : 'outline'}
      size={size === 'sm' ? 'sm' : 'default'}
      className={cn(
        pillClass,
        size === 'sm' ? 'h-10 px-6 text-sm' : 'h-auto px-7 py-3.5 text-[15px]',
        className,
      )}
    >
      <a href={href} {...props}>{children}</a>
    </Button>
  )
}

export function CtaButton({
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}) {
  return (
    <Button
      variant={variant === 'primary' ? 'default' : 'outline'}
      size={size === 'sm' ? 'sm' : 'default'}
      className={cn(
        pillClass,
        size === 'sm' ? 'h-10 px-6 text-sm' : 'h-auto px-7 py-3.5 text-[15px]',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
