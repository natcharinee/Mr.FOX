import { timeline } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { container, section, sectionLabel, sectionTitle, card } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function About() {
  const { t } = useI18n()

  return (
    <section className={section} id="about">
      <div className={cn(container, 'mb-16 grid gap-16 min-[901px]:grid-cols-[1.2fr_1fr]')}>
        <div>
          <p className={sectionLabel}>{t('about.label')}</p>
          <h2 className={sectionTitle}>{t('about.title')}</h2>
          <div className="mt-8 flex flex-col gap-6">
            {['vision', 'mission'].map((key) => (
              <div key={key} className={cn(card, 'p-7')}>
                <h3 className="mb-2 text-base font-bold text-primary">
                  {t(`about.${key}Title`)}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {t(`about.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-bold">{t('about.timelineTitle')}</h3>
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-6 border-b border-border py-5">
              <span className="min-w-[70px] text-2xl font-extrabold text-primary">{item.year}</span>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{t(`about.${item.key}`)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={container}>
        <div className={cn(card, 'p-10')}>
          <h3 className="mb-6 text-xl font-bold">{t('about.factsTitle')}</h3>
          <div className="grid grid-cols-1 gap-6 min-[481px]:grid-cols-2 min-[901px]:grid-cols-4">
            {[
              ['2019', t('about.founded')],
              ['20+', t('about.platforms')],
              ['10K+', t('about.creators')],
              ['SEA + Global', t('about.markets')],
            ].map(([value, label]) => (
              <div key={label}>
                <span className="block text-[28px] font-extrabold tracking-tight">{value}</span>
                <span className="mt-1 block text-[13px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
