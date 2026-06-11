import { platforms } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import Header from '../components/Header'
import PlatformCard from '../components/PlatformCard'
import PlatformMarquee from '../components/PlatformMarquee'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'
import { CtaLink } from '../components/CtaButton'
import { container, sectionLabel, sectionTitle, sectionSubtitle } from '@/lib/layout'
import { cn } from '@/lib/utils'

const featuredPlatforms = platforms.slice(0, 2)
const restPlatforms = platforms.slice(2)

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
            <p className={sectionLabel}>{t('ecosystem.label')}</p>
            <h1 className={cn(sectionTitle, 'max-w-[900px]')}>{t('ecosystem.title')}</h1>
            <p className={cn(sectionSubtitle, 'max-w-[640px]')}>{t('ecosystem.subtitle')}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary">
                {t('platformsPage.statCount', { count: platforms.length })}
              </span>
              <span className="rounded-full border border-border bg-white/5 px-5 py-2.5 text-sm font-medium text-muted-foreground">
                {t('platformsPage.statNiches')}
              </span>
              <span className="rounded-full border border-border bg-white/5 px-5 py-2.5 text-sm font-medium text-muted-foreground">
                {t('platformsPage.statRegions')}
              </span>
            </div>
          </div>
        </section>

        <PlatformMarquee />

        <section className="py-[clamp(48px,6vw,80px)]">
          <div className={container}>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className={sectionLabel}>{t('platformsPage.featuredLabel')}</p>
                <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold tracking-tight">
                  {t('platformsPage.featuredTitle')}
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">{t('platformsPage.featuredSubtitle')}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[769px]:grid-cols-2">
              {featuredPlatforms.map((p, i) => (
                <PlatformCard
                  key={p.id}
                  platform={p}
                  index={i + 1}
                  enhanced
                  featured
                />
              ))}
            </div>

            <div className="mt-14 mb-8">
              <p className={sectionLabel}>{t('platformsPage.allLabel')}</p>
              <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold tracking-tight">
                {t('platformsPage.allTitle')}
              </h2>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
              {restPlatforms.map((p, i) => (
                <PlatformCard
                  key={p.id}
                  platform={p}
                  index={i + 3}
                  enhanced
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-[radial-gradient(ellipse_70%_80%_at_50%_100%,rgba(242,202,80,0.1),transparent_60%)] py-[clamp(64px,8vw,100px)]">
          <div className={cn(container, 'text-center')}>
            <h2 className="mx-auto max-w-[600px] text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight">
              {t('platformsPage.ctaTitle')}
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-muted-foreground">
              {t('platformsPage.ctaSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CtaLink href="/support#contact">{t('common.becomeCreator')}</CtaLink>
              <CtaLink href="/" variant="outline">{t('platformsPage.backHome')}</CtaLink>
            </div>
          </div>
        </section>
      </main>
      <BrandBanner />
      <Footer />
    </>
  )
}
