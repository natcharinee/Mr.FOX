import { timeline } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import Careers from './Careers'
import PageFrame from './PageFrame'
import { container, section, leadSection, sectionLabel, sectionTitle, card } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function About({ lead = false, page = false }) {
  const { t } = useI18n()

  const visionMission = (
    <div className="flex flex-col gap-4">
      {['vision', 'mission'].map((key) => (
        <div
          key={key}
          className={cn(
            card,
            'border-white/8 bg-[#161616] p-7 transition-colors hover:border-primary/25',
          )}
        >
          <h3 className="mb-2 text-base font-bold text-primary">
            {t(`about.${key}Title`)}
          </h3>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {t(`about.${key}`)}
          </p>
        </div>
      ))}
    </div>
  )

  const timelineBlock = (
    <div className="rounded-2xl border border-white/8 bg-[#161616] p-6 sm:p-8">
      <h3 className="mb-6 text-xl font-bold tracking-tight">{t('about.timelineTitle')}</h3>
      {timeline.map((item) => (
        <div key={item.year} className="flex gap-6 border-b border-white/6 py-5 last:border-b-0">
          <span className="min-w-[70px] text-2xl font-extrabold text-primary">{item.year}</span>
          <p className="text-[15px] leading-relaxed text-muted-foreground">{t(`about.${item.key}`)}</p>
        </div>
      ))}
    </div>
  )

  const facts = (
    <div className={cn(card, 'border-white/8 bg-[#161616] p-8 sm:p-10')}>
      <h3 className="mb-6 text-xl font-bold tracking-tight">{t('about.factsTitle')}</h3>
      <div className="grid grid-cols-2 gap-6 min-[901px]:grid-cols-4">
        {[
          ['2019', t('about.founded')],
          ['20+', t('about.platforms')],
          ['10K+', t('about.creators')],
          ['SEA + Global', t('about.markets')],
        ].map(([value, label]) => (
          <div key={label}>
            <span className="block text-[clamp(24px,3vw,28px)] font-extrabold tracking-tight text-primary">
              {value}
            </span>
            <span className="mt-1 block text-[13px] text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )

  if (page) {
    return (
      <>
        <section className={section}>
          <div className={container}>
            <div className="mb-10 flex flex-col gap-3 min-[640px]:flex-row min-[640px]:items-end min-[640px]:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {t('about.label')}
                </p>
                <h2 className="mt-2 text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight">
                  {t('aboutPage.storyTitle')}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {t('aboutPage.storySubtitle')}
              </p>
            </div>

            <PageFrame>
              <div className="grid gap-6 min-[901px]:grid-cols-[1.2fr_1fr] min-[901px]:gap-8">
                {visionMission}
                {timelineBlock}
              </div>
            </PageFrame>

            <div className="mt-6">{facts}</div>
          </div>
        </section>

        <Careers embedded />
      </>
    )
  }

  return (
    <section className={lead ? leadSection : section} id="about">
      <div className={cn(container, 'mb-16 grid gap-16 min-[901px]:grid-cols-[1.2fr_1fr]')}>
        <div>
          {!lead && (
            <>
              <p className={sectionLabel}>{t('about.label')}</p>
              <h2 className={sectionTitle}>{t('about.title')}</h2>
            </>
          )}
          <div className={cn('flex flex-col gap-6', !lead && 'mt-8')}>
            {visionMission}
          </div>
        </div>
        {timelineBlock}
      </div>

      <div className={container}>{facts}</div>
      <Careers embedded />
    </section>
  )
}
