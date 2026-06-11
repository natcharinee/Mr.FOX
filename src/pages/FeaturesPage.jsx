import { Sparkles } from 'lucide-react'
import { creatorBenefitIds } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import Header from '../components/Header'
import FeatureCards from '../components/FeatureCards'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'
import { CtaLink } from '../components/CtaButton'
import { container, section, card } from '@/lib/layout'
import { cn } from '@/lib/utils'

const featureStats = ['statTools', 'statRealtime', 'statSecure']

export default function FeaturesPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(242,202,80,0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_0%,rgba(242,202,80,0.08),transparent_50%)]" />

          <div className={cn(container, 'relative pt-[clamp(120px,14vw,180px)] pb-[clamp(48px,6vw,80px)]')}>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[820px]">
                <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight text-[#f5f0e6]">
                  {t('featuresPage.titleLine1')}
                  <br />
                  <span className="whitespace-nowrap">{t('featuresPage.titleLine2')}</span>
                </h1>
                <p className="mt-4 max-w-[640px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-muted-foreground">
                  {t('featuresPage.subtitleLine1')}
                  <br />
                  <span className="whitespace-nowrap">{t('featuresPage.subtitleLine2')}</span>
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 lg:pb-1">
                <span>{t('featuresPage.meta')}</span>
                <span className="flex size-5 items-center justify-center rounded border border-white/20 bg-white/5">
                  <Sparkles className="size-3" strokeWidth={2} />
                </span>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 min-[481px]:grid-cols-3">
              {featureStats.map((key) => (
                <div
                  key={key}
                  className="rounded-2xl border border-border bg-card/80 px-6 py-5 backdrop-blur-sm transition-colors hover:border-primary/20 hover:bg-[#1a1a1a]"
                >
                  <p className="text-[clamp(20px,2.5vw,28px)] font-extrabold tracking-tight text-primary">
                    {t(`featuresPage.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={container}>
            <div className="mb-10 flex flex-col gap-3 min-[640px]:flex-row min-[640px]:items-end min-[640px]:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {t('featuresPage.gridLabel')}
                </p>
                <h2 className="mt-2 text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight">
                  {t('featuresPage.gridTitle')}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {t('featuresPage.gridSubtitle')}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-primary/15 bg-gradient-to-b from-primary/[0.05] via-white/[0.02] to-transparent p-4 sm:p-6 lg:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <FeatureCards variant="grid" />
            </div>
          </div>
        </section>

        <section className="border-t border-border py-[clamp(64px,8vw,100px)]">
          <div className={container}>
            <div className="mb-10 max-w-[640px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t('creators.label')}
              </p>
              <h2 className="mt-2 text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight">
                {t('creators.title')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t('creators.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[901px]:grid-cols-3">
              {creatorBenefitIds.map((id, i) => (
                <div
                  key={id}
                  className={cn(card, 'p-6 transition-all duration-300 hover:border-primary/25 hover:bg-[#1a1a1a]')}
                >
                  <span className="text-[13px] font-bold tracking-wide text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-lg font-bold tracking-tight">{t(`creators.${id}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`creators.${id}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-border py-[clamp(72px,10vw,120px)]">
          <div className="pointer-events-none absolute inset-0 bg-black" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#0f0c06_18%,rgba(139,105,20,0.24)_48%,rgba(242,202,80,0.14)_50%,rgba(139,105,20,0.24)_52%,#0f0c06_82%,#000_100%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_42%_at_50%_50%,rgba(242,202,80,0.18),transparent_68%)]"
            aria-hidden="true"
          />

          <div className={cn(container, 'relative')}>
            <div className="mx-auto max-w-[900px] text-center">
              <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.12] tracking-tight">
                {t('featuresPage.ctaTitle')}
              </h2>
              <p className="mx-auto mt-4 max-w-[520px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-muted-foreground">
                {t('featuresPage.ctaSubtitle')}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <CtaLink href="https://www.mrfox.com/Login/Index" target="_blank" rel="noopener noreferrer">
                  {t('common.becomeCreator')}
                </CtaLink>
                <CtaLink href="/" variant="outline">
                  {t('featuresPage.backHome')}
                </CtaLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BrandBanner />
      <Footer />
    </>
  )
}
