import { useState } from 'react'
import { contactSubjectKeys } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { CtaButton, CtaLink } from './CtaButton'
import PageFrame from './PageFrame'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { container, section, sectionLabel, sectionTitle, card } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function Contact({ page = false }) {
  const { t } = useI18n()
  const [submitted, setSubmitted] = useState(false)
  const [subject, setSubject] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!subject) return
    setSubmitted(true)
  }

  const fieldInput = 'min-h-12 w-full border-white/10 bg-[#0f0f0f] text-[15px] focus-visible:border-primary'

  const form = (
    <form className={cn(card, 'border-white/8 bg-[#161616] p-8 sm:p-9')} onSubmit={handleSubmit}>
      {submitted ? (
        <div className="px-5 py-10 text-center">
          <span className="mb-4 inline-flex size-14 items-center justify-center rounded-full bg-primary/15 text-2xl text-primary">
            ✓
          </span>
          <h3 className="mb-2 text-[22px] font-bold">{t('contact.thankYou')}</h3>
          <p className="text-muted-foreground">{t('contact.thankYouDesc')}</p>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <Label htmlFor="name" className="mb-2 block text-[13px] font-semibold text-muted-foreground">
              {t('contact.name')}
            </Label>
            <Input id="name" type="text" required placeholder={t('contact.namePlaceholder')} className={fieldInput} />
          </div>
          <div className="mb-5">
            <Label htmlFor="email" className="mb-2 block text-[13px] font-semibold text-muted-foreground">
              {t('contact.email')}
            </Label>
            <Input id="email" type="email" required placeholder={t('contact.emailPlaceholder')} className={fieldInput} />
          </div>
          <div className="mb-5">
            <Label htmlFor="subject" className="mb-2 block text-[13px] font-semibold text-muted-foreground">
              {t('contact.subject')}
            </Label>
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger id="subject" className={cn(fieldInput, 'w-full')}>
                <SelectValue placeholder={t('contact.selectTopic')} />
              </SelectTrigger>
              <SelectContent className="z-[110]">
                {contactSubjectKeys.map((key) => (
                  <SelectItem key={key} value={key}>{t(`contact.${key}`)}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-5">
            <Label htmlFor="message" className="mb-2 block text-[13px] font-semibold text-muted-foreground">
              {t('contact.message')}
            </Label>
            <Textarea id="message" rows={4} required placeholder={t('contact.messagePlaceholder')} className={cn(fieldInput, 'min-h-[100px] resize-y')} />
          </div>
          <CtaButton type="submit" className="mt-2 w-full">
            {t('common.sendMessage')}
          </CtaButton>
        </>
      )}
    </form>
  )

  if (page) {
    return (
      <section className={cn(section, 'border-t border-border')} id="contact">
        <div className={cn(container, 'grid items-start gap-10 min-[769px]:grid-cols-2 min-[769px]:gap-16')}>
          <div>
            <p className={sectionLabel}>{t('contact.label')}</p>
            <h2 className={sectionTitle}>{t('contact.title')}</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {t('supportPage.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="https://www.mrfox.com/Login/Index" target="_blank" rel="noopener noreferrer">
                {t('common.becomeCreator')}
              </CtaLink>
              <CtaLink href="/platforms" variant="outline">{t('common.exploreEcosystem')}</CtaLink>
            </div>
          </div>
          <PageFrame className="p-3 sm:p-4">{form}</PageFrame>
        </div>
      </section>
    )
  }

  return (
    <section className={section} id="contact">
      <div className={cn(container, 'grid items-start gap-16 min-[769px]:grid-cols-2')}>
        <div>
          <p className={sectionLabel}>{t('contact.label')}</p>
          <h2 className={sectionTitle}>{t('contact.title')}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="https://www.mrfox.com/Login/Index" target="_blank" rel="noopener noreferrer">
              {t('common.becomeCreator')}
            </CtaLink>
            <CtaLink href="/platforms" variant="outline">{t('common.signUpAsFan')}</CtaLink>
          </div>
        </div>
        {form}
      </div>
    </section>
  )
}
