import { useI18n } from '../i18n/I18nContext'
import { CtaLink } from './CtaButton'
import { cn } from '@/lib/utils'
import { container } from '@/lib/layout'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="flex flex-col bg-background" id="home">
      <div className="relative w-full overflow-hidden bg-background">
        <img
          src="/images/hero.png"
          alt={t('hero.imageAlt')}
          className="block h-auto w-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />
      </div>

      <div className="bg-background py-[clamp(40px,5vw,64px)]">
        <div className={cn(
          container,
          'flex items-center justify-between gap-[clamp(24px,4vw,64px)] max-[900px]:flex-col max-[900px]:items-start',
        )}>
          <h1 className="max-w-[720px] flex-1 text-[clamp(28px,3.8vw,48px)] font-extrabold leading-[1.12] tracking-tight">
            {t('hero.title')}
          </h1>
          <div className="flex shrink-0 flex-wrap justify-end gap-3 max-[900px]:w-full max-[900px]:justify-start max-[480px]:w-full max-[480px]:flex-col">
            <CtaLink href="/support#contact" className="max-[480px]:w-full max-[480px]:justify-center">
              {t('common.becomeCreator')}
            </CtaLink>
            <CtaLink href="/#ecosystem" variant="outline" className="max-[480px]:w-full max-[480px]:justify-center">
              {t('common.exploreEcosystem')}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
