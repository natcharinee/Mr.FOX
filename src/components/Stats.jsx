import { stats } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { CtaLink } from './CtaButton'
import { container, section } from '@/lib/layout'

export default function Stats() {
  const { t } = useI18n()

  return (
    <section className={section}>
      <div className={container}>
        <h2 className="mb-12 max-w-[700px] text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight">
          {t('stats.headline')}
        </h2>
        <div className="mb-12 grid grid-cols-1 gap-6 min-[481px]:grid-cols-2 min-[769px]:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.labelKey}
              className="rounded-xl border border-border bg-card px-6 py-8 transition-colors hover:border-white/20 hover:bg-[#1a1a1a]"
            >
              <span className="block text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight text-primary">
                {t(`stats.${s.valueKey}`)}
              </span>
              <span className="mt-2 block text-sm font-medium text-muted-foreground">
                {t(`stats.${s.labelKey}`)}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <CtaLink href="/support#contact">{t('common.becomeCreator')}</CtaLink>
          <CtaLink href="/platforms" variant="outline">{t('common.exploreEcosystem')}</CtaLink>
        </div>
      </div>
    </section>
  )
}
