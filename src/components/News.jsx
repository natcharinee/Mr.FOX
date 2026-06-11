import { articleKeys, articleCategories } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import PageFrame from './PageFrame'
import { container, section, leadSection, sectionLabel, sectionTitle, sectionSubtitle, card } from '@/lib/layout'
import { cn } from '@/lib/utils'

const articleDates = ['Mar 2026', 'Feb 2026', 'Jan 2026', 'Jan 2026']

export default function News({ lead = false, page = false }) {
  const { t } = useI18n()

  const content = (
    <>
      <div className={cn('flex flex-wrap gap-2', page || lead ? 'mb-8' : 'my-8')}>
        {articleCategories.map((key) => (
          <span
            key={key}
            className="cursor-pointer rounded-full border border-border bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            {t(`news.${key}`)}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2">
        {articleKeys.map((key, i) => (
          <article
            key={key}
            className={cn(
              card,
              'group cursor-pointer p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-[#1a1a1a] hover:shadow-[0_20px_50px_-24px_rgba(242,202,80,0.18)]',
            )}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {t(`news.${articleCategories[i]}`)}
            </span>
            <h3 className="mt-3 mb-4 text-lg font-bold leading-snug tracking-tight group-hover:text-[#f5f0e6]">
              {t(`news.${key}`)}
            </h3>
            <span className="text-[13px] text-muted-foreground">{articleDates[i]}</span>
          </article>
        ))}
      </div>
    </>
  )

  if (page) {
    return (
      <section className={section}>
        <div className={container}>
          <div className="mb-10 flex flex-col gap-3 min-[640px]:flex-row min-[640px]:items-end min-[640px]:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t('news.label')}
              </p>
              <h2 className="mt-2 text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight">
                {t('blogPage.gridTitle')}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {t('blogPage.gridSubtitle')}
            </p>
          </div>
          <PageFrame>{content}</PageFrame>
        </div>
      </section>
    )
  }

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
        {content}
      </div>
    </section>
  )
}
