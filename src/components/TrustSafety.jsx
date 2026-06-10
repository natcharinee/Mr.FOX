import { trustKeys } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { container, section, sectionLabel, sectionTitle, sectionSubtitle, card } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function TrustSafety() {
  const { t } = useI18n()

  return (
    <section className={cn(section, 'bg-[#0a0a0a]')} id="trust">
      <div className={cn(container, 'grid items-center gap-16 min-[769px]:grid-cols-2')}>
        <div>
          <p className={sectionLabel}>{t('trust.label')}</p>
          <h2 className={sectionTitle}>{t('trust.title')}</h2>
          <p className={sectionSubtitle}>{t('trust.subtitle')}</p>
        </div>
        <ul className="flex flex-col gap-3">
          {trustKeys.map((key) => (
            <li
              key={key}
              className={cn(card, 'flex items-center gap-4 px-6 py-5 text-base font-semibold')}
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm text-primary">
                ✓
              </span>
              {t(`trust.${key}`)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
