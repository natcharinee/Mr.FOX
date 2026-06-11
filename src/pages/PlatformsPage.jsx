import { Layers } from 'lucide-react'
import { PLATFORM_NETWORK_COUNT, platforms } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import Header from '../components/Header'
import PlatformCard from '../components/PlatformCard'
import PlatformMarquee from '../components/PlatformMarquee'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'
import { CtaLink } from '../components/CtaButton'
import { container, section } from '@/lib/layout'
import { cn } from '@/lib/utils'

const [flagshipPlatform, ...networkPlatforms] = platforms

const platformStats = [
  { key: 'statCount', vars: { count: PLATFORM_NETWORK_COUNT } },
  { key: 'statNiches' },
  { key: 'statRegions' },
]

export default function PlatformsPage() {
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
                  {t('ecosystem.titleLine1')}
                  <br />
                  <span className="whitespace-nowrap">{t('ecosystem.titleLine2')}</span>
                </h1>
                <p className="mt-4 max-w-[640px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-muted-foreground">
                  {t('ecosystem.subtitleLine1')}
                  <br />
                  <span className="whitespace-nowrap">{t('ecosystem.subtitleLine2')}</span>
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 lg:pb-1">
                <span>{t('ecosystem.meta')}</span>
                <span className="flex size-5 items-center justify-center rounded border border-white/20 bg-white/5">
                  <Layers className="size-3" strokeWidth={2} />
                </span>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 min-[481px]:grid-cols-3">
              {platformStats.map(({ key, vars }) => (
                <div
                  key={key}
                  className="rounded-2xl border border-border bg-card/80 px-6 py-5 backdrop-blur-sm transition-colors hover:border-primary/20 hover:bg-[#1a1a1a]"
                >
                  <p className="text-[clamp(20px,2.5vw,28px)] font-extrabold tracking-tight text-primary">
                    {t(`platformsPage.${key}`, vars)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PlatformMarquee />

        <section className={section}>
          <div className={container}>
            <div className="mb-10 flex flex-col gap-3 min-[640px]:flex-row min-[640px]:items-end min-[640px]:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {t('platformsPage.allLabel')}
                </p>
                <h2 className="mt-2 text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight">
                  {t('platformsPage.allTitle')}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {t('platformsPage.featuredSubtitle')}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-primary/15 bg-gradient-to-b from-primary/[0.05] via-white/[0.02] to-transparent p-4 sm:p-6 lg:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <div className="mb-4">
                <PlatformCard platform={flagshipPlatform} variant="catalog" featured />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {networkPlatforms.map((platform) => (
                  <PlatformCard key={platform.id} platform={platform} variant="catalog" />
                ))}
              </div>
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
                {t('platformsPage.ctaTitle')}
              </h2>
              <p className="mx-auto mt-4 max-w-[520px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-muted-foreground">
                {t('platformsPage.ctaSubtitle')}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <CtaLink href="https://www.mrfox.com/Login/Index" target="_blank" rel="noopener noreferrer">
                  {t('common.becomeCreator')}
                </CtaLink>
                <CtaLink href="/" variant="outline">
                  {t('platformsPage.backHome')}
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
