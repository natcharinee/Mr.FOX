import { Fragment } from 'react'
import { useI18n } from '../i18n/I18nContext'
import PhoneMockup from './PhoneMockup'
import { container } from '@/lib/layout'
import { cn } from '@/lib/utils'

const pillKeys = ['pill1', 'pill2', 'pill3']

function HighlightBrand({ text }) {
  const parts = text.split('Mr.FOX')
  if (parts.length === 1) return text

  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <span className="text-primary">Mr.FOX</span>}
    </Fragment>
  ))
}

export default function BrandStory() {
  const { t } = useI18n()

  return (
    <section
      className="relative overflow-hidden border-b border-border py-[clamp(56px,7vw,88px)]"
      aria-label="Mr.FOX story"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(242,202,80,0.16),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_100%_100%,rgba(242,202,80,0.07),transparent_55%)]" />

      <div className={cn(container, 'relative')}>
        <p className="mb-8 text-center text-[13px] font-bold uppercase tracking-[0.22em] text-primary">
          {t('brandStory.label')}
        </p>

        <div className="relative w-full overflow-hidden rounded-[28px] border border-primary/20 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-[clamp(24px,5vw,56px)] py-[clamp(32px,5vw,52px)] shadow-[0_0_100px_rgba(242,202,80,0.1)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 size-56 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mb-8 flex justify-center">
              <div className="rounded-2xl border border-primary/25 bg-black/40 p-3 shadow-[0_8px_32px_rgba(242,202,80,0.15)]">
                <img
                  src="/images/fox-mark.png"
                  alt=""
                  className="size-[clamp(52px,8vw,72px)] rounded-xl"
                  draggable="false"
                />
              </div>
            </div>

            <h2 className="relative text-center text-[clamp(24px,3.4vw,38px)] font-extrabold leading-[1.3] tracking-tight">
              <HighlightBrand text={t('brandBanner.intro')} />
              {t('brandBanner.introLine2') && (
                <>
                  <br />
                  {t('brandBanner.introLine2')}
                </>
              )}
            </h2>

            <p className="relative mx-auto mt-6 max-w-[640px] text-center text-[clamp(15px,1.9vw,18px)] leading-[1.85] text-muted-foreground">
              {t('brandBanner.body')}
            </p>

            {t('brandBanner.outro') && (
              <div className="relative mt-8 rounded-2xl border border-primary/20 bg-primary/[0.07] px-6 py-5">
                <p className="text-center text-[clamp(15px,1.9vw,17px)] font-semibold leading-[1.8] text-foreground/95">
                  <HighlightBrand text={t('brandBanner.outro')} />
                </p>
              </div>
            )}

            <div className="relative mt-8 flex flex-wrap justify-center gap-2.5">
              {pillKeys.map((key) => (
                <span
                  key={key}
                  className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[12px] font-bold tracking-wide text-primary"
                >
                  {t(`brandStory.${key}`)}
                </span>
              ))}
            </div>
          </div>

        <div className="relative mt-10 overflow-hidden rounded-[28px] border border-primary/12 bg-gradient-to-b from-primary/[0.07] via-white/[0.02] to-transparent px-6 py-12 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_100%,rgba(242,202,80,0.14),transparent_65%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle,rgba(242,202,80,0.07)_1px,transparent_1px)] bg-[size:28px_28px]" />

          <div className="relative flex justify-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-[min(90vw,360px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/14 blur-3xl" />
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
