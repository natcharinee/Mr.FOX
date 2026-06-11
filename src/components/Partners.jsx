import { partnerIds } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import PageFrame from './PageFrame'
import { container, section, sectionLabel, sectionTitle, sectionSubtitle, card, goldLink } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function Partners({ page = false }) {
  const { t } = useI18n()

  const grid = (
    <div className="grid grid-cols-1 gap-4 min-[481px]:grid-cols-2 min-[901px]:grid-cols-4">
      {partnerIds.map((id) => (
        <div
          key={id}
          className={cn(
            card,
            'border-white/8 bg-[#161616] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-[#1a1a1a]',
          )}
        >
          <h3 className="mb-2 text-lg font-bold tracking-tight">{t(`partners.${id}.type`)}</h3>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{t(`partners.${id}.desc`)}</p>
          <a href="/support#contact" className={goldLink}>{t('common.partnerWithUs')}</a>
        </div>
      ))}
    </div>
  )

  if (page) {
    return (
      <section className={cn(section, 'border-t border-border')}>
        <div className={container}>
          <div className="mb-10 flex flex-col gap-3 min-[640px]:flex-row min-[640px]:items-end min-[640px]:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t('partners.label')}
              </p>
              <h2 className="mt-2 text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight">
                {t('aboutPage.partnersTitle')}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {t('aboutPage.partnersSubtitle')}
            </p>
          </div>
          <PageFrame>{grid}</PageFrame>
        </div>
      </section>
    )
  }

  return (
    <section className={section} id="partners">
      <div className={container}>
        <p className={sectionLabel}>{t('partners.label')}</p>
        <h2 className={sectionTitle}>{t('partners.title')}</h2>
        <p className={sectionSubtitle}>{t('partners.subtitle')}</p>
        <div className="mt-12">{grid}</div>
      </div>
    </section>
  )
}
