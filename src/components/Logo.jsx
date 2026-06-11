import { cn } from '@/lib/utils'

export default function Logo({ className = '', variant = 'compact', showMark = true }) {
  const isBanner = variant === 'banner' || className.includes('brand-banner')

  return (
    <div
      className={cn(
        'inline-flex items-center',
        isBanner ? 'w-full justify-center' : 'gap-2',
        className,
      )}
      role="img"
      aria-label="Mr.FOX"
    >
      {!isBanner && showMark && (
        <img
          src="/images/fox-mark.png"
          alt=""
          className="h-10 w-10 shrink-0 rounded object-contain"
          draggable="false"
        />
      )}
      <svg
        className={cn(
          isBanner
            ? 'block h-auto w-full max-w-none'
            : 'h-10 w-auto shrink-0',
        )}
        viewBox={isBanner ? '0 10 388 96' : '0 0 138 40'}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio={isBanner ? 'xMidYMid meet' : 'xMinYMid meet'}
      >
        <text
          x={isBanner ? '194' : '0'}
          y={isBanner ? '96' : '30'}
          textAnchor={isBanner ? 'middle' : 'start'}
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontWeight="900"
          fontSize={isBanner ? '98' : '30'}
          fill="#F2CA50"
          letterSpacing="-0.04em"
        >
          Mr.FOX
        </text>
      </svg>
    </div>
  )
}
