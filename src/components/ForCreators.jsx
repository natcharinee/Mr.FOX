import { creatorBenefitIds } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { CtaLink } from './CtaButton'
import { cn } from '@/lib/utils'
import { container, section, leadSection, sectionLabel, sectionTitle, sectionSubtitle, card } from '@/lib/layout'

export default function ForCreators({ lead = false }) {
  const { t } = useI18n()

  return (
    <section className={lead ? leadSection : section} id="creators">
      <div className={cn(
        container,
        'grid items-start gap-16 min-[901px]:grid-cols-[1fr_1.4fr]',
      )}>
        <div>
          <p className={sectionLabel}>{t('creators.label')}</p>
          <h2 className={sectionTitle}>{t('creators.title')}</h2>
          <p className={sectionSubtitle}>{t('creators.subtitle')}</p>
          <CtaLink href="/support#contact" className="mt-8">{t('common.becomeCreator')}</CtaLink>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[901px]:grid-cols-2">
          {creatorBenefitIds.map((id, i) => (
            <div key={id} className={cn(card, 'p-7 hover:border-primary/25')}>
              <span className="text-[13px] font-bold tracking-wide text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 mb-2 text-lg font-bold">{t(`creators.${id}.title`)}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(`creators.${id}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
