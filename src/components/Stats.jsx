import { stats } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { container, section } from '@/lib/layout'

export default function Stats() {
  const { t } = useI18n()

  return (
    <section className={section}>
      <div className={container}>
        <p className="mb-10 text-center text-[clamp(22px,3.5vw,32px)] font-bold tracking-tight">
          {t('ecosystem.tagline')}
        </p>

        <div className="grid grid-cols-1 gap-6 min-[481px]:grid-cols-2 min-[769px]:grid-cols-4">
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
      </div>
    </section>
  )
}
