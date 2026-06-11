import { faqKeys } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { container, section, leadSection, sectionTitle } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function FAQ({ lead = false }) {
  const { t } = useI18n()

  return (
    <section className={lead ? leadSection : section} id="faq">
      <div className={cn(container, 'max-w-[800px]')}>
        {!lead && <h2 className={sectionTitle}>{t('faq.title')}</h2>}
        <Accordion type="single" collapsible className={cn('gap-2', lead ? '' : 'mt-10')}>
          {faqKeys.map((key) => (
            <AccordionItem
              key={key}
              value={key}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <AccordionTrigger className="px-6 py-5 text-base font-semibold hover:bg-[#1a1a1a] hover:no-underline">
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
      </div>
    </section>
  )
}
