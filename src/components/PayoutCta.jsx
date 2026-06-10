import { useI18n } from '../i18n/I18nContext'
import { CtaLink } from './CtaButton'
import { container } from '@/lib/layout'

export default function PayoutCta() {
  const { t } = useI18n()

  return (
    <section className="border-y border-border bg-background py-[clamp(72px,10vw,120px)]">
      <div className={container}>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight">
            {t('payoutCta.line1')}
            <br />
            {t('payoutCta.line2')}
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaLink href="#contact">{t('common.becomeCreator')}</CtaLink>
            <CtaLink href="#contact" variant="outline">{t('common.signUp')}</CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
