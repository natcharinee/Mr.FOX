import { trustKeys } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import PageFrame from './PageFrame'
import { container, section, sectionLabel, sectionTitle, sectionSubtitle, card } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function TrustSafety({ page = false }) {
  const { t } = useI18n()

  const list = (
    <ul className="flex flex-col gap-3">
      {trustKeys.map((key) => (
        <li
          key={key}
          className={cn(
            card,
            'flex items-center gap-4 border-white/8 bg-[#161616] px-6 py-5 text-base font-semibold transition-colors hover:border-primary/25',
          )}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm text-primary">
            ✓
          </span>
          {t(`trust.${key}`)}
        </li>
      ))}
    </ul>
  )

  if (page) {
    return (
      <section className={cn(section, 'border-t border-border')}>
        <div className={cn(container, 'grid items-start gap-10 min-[769px]:grid-cols-2 min-[769px]:gap-16')}>
          <div>
            <p className={sectionLabel}>{t('trust.label')}</p>
            <h2 className={sectionTitle}>{t('trust.title')}</h2>
            <p className={sectionSubtitle}>{t('trust.subtitle')}</p>
          </div>
          <PageFrame className="p-4 sm:p-5">{list}</PageFrame>
        </div>
      </section>
    )
  }

  return (
    <section className={cn(section, 'bg-[#0a0a0a]')} id="trust">
      <div className={cn(container, 'grid items-center gap-16 min-[769px]:grid-cols-2')}>
        <div>
          <p className={sectionLabel}>{t('trust.label')}</p>
          <h2 className={sectionTitle}>{t('trust.title')}</h2>
          <p className={sectionSubtitle}>{t('trust.subtitle')}</p>
        </div>
        {list}
      </div>
    </section>
  )
}
