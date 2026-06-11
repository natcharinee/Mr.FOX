import { Building2 } from 'lucide-react'
import Header from '../components/Header'
import About from '../components/About'
import Partners from '../components/Partners'
import SubpageHero from '../components/SubpageHero'
import SubpageCta from '../components/SubpageCta'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'
import { useI18n } from '../i18n/I18nContext'

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <main className="bg-background">
        <SubpageHero
          titleLine1={t('aboutPage.titleLine1')}
          titleLine2={t('aboutPage.titleLine2')}
          subtitleLine1={t('aboutPage.subtitleLine1')}
          subtitleLine2={t('aboutPage.subtitleLine2')}
          meta={t('aboutPage.meta')}
          metaIcon={Building2}
          stats={[t('aboutPage.statFounded'), t('aboutPage.statPlatforms'), t('aboutPage.statCreators')]}
        />
        <About page />
        <Partners page />
        <SubpageCta
          title={t('aboutPage.ctaTitle')}
          subtitle={t('aboutPage.ctaSubtitle')}
          primaryLabel={t('common.becomeCreator')}
          secondaryLabel={t('aboutPage.backHome')}
        />
      </main>
      <BrandBanner />
      <Footer />
    </>
  )
}
