import { useI18n } from '../i18n/I18nContext'
import { CtaLink } from './CtaButton'
import { container } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function PayoutCta() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden border-y border-border py-[clamp(72px,10vw,120px)]">
      <div className="pointer-events-none absolute inset-0 bg-black" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#0f0c06_18%,rgba(139,105,20,0.24)_48%,rgba(242,202,80,0.14)_50%,rgba(139,105,20,0.24)_52%,#0f0c06_82%,#000_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_42%_at_50%_50%,rgba(242,202,80,0.2),transparent_68%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-soft-light bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_3px,rgba(242,202,80,0.05)_3px,rgba(242,202,80,0.05)_4px)]"
        aria-hidden="true"
      />
      <div className={cn(container, 'relative')}>
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[clamp(22px,4.5vw,56px)] font-extrabold leading-[1.15] tracking-tight">
            <span className="inline-block whitespace-nowrap">
              {t('payoutCta.line1')}
              {t('payoutCta.line1Suffix') && (
                <>
                  {'\u00A0'}
                  {t('payoutCta.line1Suffix')}
                </>
              )}
            </span>
            <br />
            <span className="text-primary">{t('payoutCta.line2')}</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaLink href="https://mrfox.com" target="_blank" rel="noopener noreferrer">
              {t('common.becomeCreator')}
            </CtaLink>
            <CtaLink href="https://mrfox.com" target="_blank" rel="noopener noreferrer" variant="outline">
              {t('common.signUp')}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
