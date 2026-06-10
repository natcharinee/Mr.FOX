import { platformLogo } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function PlatformMark({ platform, className, letterClassName, fill = false, preferLetter = false }) {
  if (platform.logo && !preferLetter) {
    if (fill) {
      return (
        <div className={cn('absolute inset-0 flex items-center justify-center p-6', className)}>
          <img
            src={platform.logo}
            alt=""
            className="max-h-full max-w-full object-contain"
            draggable="false"
          />
        </div>
      )
    }

    return (
      <img
        src={platform.logo}
        alt=""
        className={cn('shrink-0 rounded-[10px] object-cover', className)}
        draggable="false"
      />
    )
  }

  return (
    <div className={cn(platformLogo, className, letterClassName)}>
      {platform.name.charAt(0)}
    </div>
  )
}
