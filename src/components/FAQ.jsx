import { faqKeys } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import PageFrame from './PageFrame'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { container, section, leadSection, sectionTitle } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function FAQ({ lead = false, page = false }) {
  const { t } = useI18n()

  const accordion = (
    <Accordion type="single" collapsible className="gap-2">
      {faqKeys.map((key) => (
        <AccordionItem
          key={key}
          value={key}
          className="overflow-hidden rounded-xl border border-white/8 bg-[#161616] transition-colors data-[state=open]:border-primary/25"
        >
          <AccordionTrigger className="px-6 py-5 text-base font-semibold hover:bg-white/[0.04] hover:no-underline data-[state=open]:text-primary">
            {t(`faq.${key}`)}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {t(`faq.a${key.slice(1)}`)}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )

  if (page) {
    return (
      <section className={section}>
        <div className={container}>
          <div className="mb-10 flex flex-col gap-3 min-[640px]:flex-row min-[640px]:items-end min-[640px]:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t('supportPage.label')}
              </p>
              <h2 className="mt-2 text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight">
                {t('supportPage.faqTitle')}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {t('supportPage.faqSubtitle')}
            </p>
          </div>
          <PageFrame className="max-w-[900px]">{accordion}</PageFrame>
        </div>
      </section>
    )
  }

  return (
    <section className={lead ? leadSection : section} id="faq">
      <div className={cn(container, 'max-w-[800px]')}>
        {!lead && <h2 className={sectionTitle}>{t('faq.title')}</h2>}
        <div className={lead ? '' : 'mt-10'}>{accordion}</div>
      </div>
    </section>
  )
}
