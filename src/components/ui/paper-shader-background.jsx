import { useEffect, useState } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'
import { cn } from '@/lib/utils'

const BRAND_MESH_COLORS = ['#000000', '#141210', '#2a2418', '#f2ca50']

export function PaperShaderBackground({ className, speed = 0.55 }) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  if (reducedMotion) {
    return (
      <div
        className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.07] via-white/[0.02] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_100%,rgba(242,202,80,0.14),transparent_65%)]" />
      </div>
    )
  }

  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <MeshGradient
        className="absolute inset-0 size-full"
        colors={BRAND_MESH_COLORS}
        speed={speed}
        backgroundColor="#000000"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_100%,rgba(242,202,80,0.12),transparent_65%)]" />
    </div>
  )
}
