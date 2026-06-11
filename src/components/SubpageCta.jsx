import { CtaLink } from './CtaButton'
import { container } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function SubpageCta({ title, subtitle, primaryLabel, secondaryLabel, secondaryHref = '/' }) {
  return (
    <section className="relative overflow-hidden border-t border-border py-[clamp(72px,10vw,120px)]">
      <div className="pointer-events-none absolute inset-0 bg-black" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#0f0c06_18%,rgba(139,105,20,0.24)_48%,rgba(242,202,80,0.14)_50%,rgba(139,105,20,0.24)_52%,#0f0c06_82%,#000_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_42%_at_50%_50%,rgba(242,202,80,0.18),transparent_68%)]"
        aria-hidden="true"
      />

      <div className={cn(container, 'relative')}>
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.12] tracking-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-[520px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaLink href="https://www.mrfox.com/Login/Index" target="_blank" rel="noopener noreferrer">
              {primaryLabel}
            </CtaLink>
            <CtaLink href={secondaryHref} variant="outline">
              {secondaryLabel}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
