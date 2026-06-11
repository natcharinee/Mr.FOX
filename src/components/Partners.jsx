import { partnerIds } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { container, section, sectionLabel, sectionTitle, sectionSubtitle, card, goldLink } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function Partners() {
  const { t } = useI18n()

  return (
    <section className={section} id="partners">
      <div className={container}>
        <p className={sectionLabel}>{t('partners.label')}</p>
        <h2 className={sectionTitle}>{t('partners.title')}</h2>
        <p className={sectionSubtitle}>{t('partners.subtitle')}</p>

        <div className="mt-12 grid grid-cols-1 gap-4 min-[481px]:grid-cols-2 min-[901px]:grid-cols-4">
          {partnerIds.map((id) => (
            <div
              key={id}
              className={cn(card, 'p-7 transition-transform hover:-translate-y-0.5 hover:border-primary/25')}
            >
              <h3 className="mb-2 text-lg font-bold">{t(`partners.${id}.type`)}</h3>
              <p className="mb-5 text-sm text-muted-foreground">{t(`partners.${id}.desc`)}</p>
              <a href="/support#contact" className={goldLink}>{t('common.partnerWithUs')}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
