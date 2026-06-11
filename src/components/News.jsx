import { articleKeys, articleCategories } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { container, section, leadSection, sectionLabel, sectionTitle, sectionSubtitle, card } from '@/lib/layout'
import { cn } from '@/lib/utils'

const articleDates = ['Mar 2026', 'Feb 2026', 'Jan 2026', 'Jan 2026']

export default function News({ lead = false }) {
  const { t } = useI18n()

  return (
    <section className={lead ? leadSection : section} id="news">
      <div className={container}>
        {!lead && (
          <>
            <p className={sectionLabel}>{t('news.label')}</p>
            <h2 className={sectionTitle}>{t('news.title')}</h2>
            <p className={sectionSubtitle}>{t('news.subtitle')}</p>
          </>
        )}

        <div className={cn('flex flex-wrap gap-2', lead ? 'mb-8' : 'my-8')}>
          {articleCategories.map((key) => (
            <span
              key={key}
              className="cursor-pointer rounded-full border border-border px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {t(`news.${key}`)}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
          {articleKeys.map((key, i) => (
            <article
              key={key}
              className={cn(card, 'cursor-pointer p-7 transition-transform hover:-translate-y-0.5 hover:border-white/20')}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {t(`news.${articleCategories[i]}`)}
              </span>
              <h3 className="mt-3 mb-4 text-lg font-bold leading-snug">{t(`news.${key}`)}</h3>
              <span className="text-[13px] text-[#666666]">{articleDates[i]}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
