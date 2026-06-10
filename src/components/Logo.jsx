import { cn } from '@/lib/utils'

export default function Logo({ className = '', variant = 'compact' }) {
  const isBanner = variant === 'banner' || className.includes('brand-banner')

  return (
    <div
      className={cn(
        'inline-flex items-center',
        isBanner ? 'w-full justify-center' : 'gap-3',
        className,
      )}
      role="img"
      aria-label="Mr.FOX"
    >
      {!isBanner && (
        <img
          src="/images/fox-mark.png"
          alt=""
          className="h-10 w-auto shrink-0 rounded"
          draggable="false"
        />
      )}
      <svg
        className={cn(
          isBanner
            ? 'block h-auto w-full max-w-none'
            : 'h-11 w-auto shrink-0 -ml-0.5',
        )}
        viewBox={isBanner ? '0 10 388 96' : '0 0 430 147'}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio={isBanner ? 'xMidYMid meet' : undefined}
      >
        <text
          x={isBanner ? '194' : '0'}
          y={isBanner ? '96' : '112'}
          textAnchor={isBanner ? 'middle' : 'start'}
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontWeight="900"
          fontSize="98"
          fill="#F2CA50"
          letterSpacing="-0.04em"
        >
          Mr.FOX
        </text>
      </svg>
    </div>
  )
}
