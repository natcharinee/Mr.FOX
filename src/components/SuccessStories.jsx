import { successStories } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { container, section, sectionLabel, sectionTitle, card } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function SuccessStories() {
  const { t } = useI18n()
  const doubled = [...successStories, ...successStories]

  return (
    <section className={cn(section, 'overflow-hidden')} id="stories">
      <div className={container}>
        <p className={sectionLabel}>{t('stories.label')}</p>
        <h2 className={sectionTitle}>{t('stories.title')}</h2>
      </div>

      <div className="mt-12 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee-fast gap-4">
          {doubled.map((s, i) => (
            <div key={`${s.name}-${i}`} className={cn(card, 'min-w-[280px] shrink-0 p-7')}>
              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#8b6914] text-[22px] font-extrabold text-black">
                {s.name.charAt(s.name.length - 1)}
              </div>
              <h3 className="mb-4 text-lg font-bold">{s.name}</h3>
              <div className="flex flex-col gap-2.5">
                {[
                  [s.followers, t('common.followers')],
                  [s.growth, t('common.incomeGrowth')],
                  [s.platform, t('common.platform')],
                ].map(([value, label]) => (
                  <div key={label} className="flex items-center justify-between border-t border-border py-2">
                    <span className="text-sm font-bold text-primary">{value}</span>
                    <span className="text-[13px] text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
