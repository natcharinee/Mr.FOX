import { careerIds } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { CtaLink } from './CtaButton'
import { container, section, sectionLabel, sectionTitle, sectionSubtitle, card } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function Careers() {
  const { t } = useI18n()

  return (
    <section className={section} id="careers">
      <div className={cn(container, 'grid items-start gap-16 min-[769px]:grid-cols-2')}>
        <div>
          <p className={sectionLabel}>{t('careers.label')}</p>
          <h2 className={sectionTitle}>{t('careers.title')}</h2>
          <p className={sectionSubtitle}>{t('careers.subtitle')}</p>
        </div>
        <div className="flex flex-col gap-3">
          {careerIds.map((id) => (
            <div
              key={id}
              className={cn(card, 'flex items-center justify-between gap-4 px-7 py-6 hover:border-white/20')}
            >
              <div>
                <h3 className="text-lg font-bold">{t(`careers.${id}.role`)}</h3>
                <span className="mt-1 block text-[13px] text-muted-foreground">{t(`careers.${id}.dept`)}</span>
              </div>
              <CtaLink href="#contact" variant="outline" size="sm">{t('common.apply')}</CtaLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
