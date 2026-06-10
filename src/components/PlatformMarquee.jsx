import { platforms } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { card, platformLogo } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function PlatformMarquee() {
  const { t } = useI18n()
  const doubled = [...platforms, ...platforms]

  return (
    <section className="overflow-hidden border-b border-border bg-background py-6" aria-label="Platforms">
      <div className="[mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {doubled.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className={cn(card, 'flex min-w-[320px] shrink-0 items-center gap-4 px-7 py-5')}
            >
              <div className={cn(platformLogo, 'size-12 text-xl')}>{p.name.charAt(0)}</div>
              <div>
                <h3 className="text-base font-bold">{p.name}</h3>
                <p className="mt-0.5 text-[13px] text-muted-foreground">{t(`platformsMarquee.${p.id}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
