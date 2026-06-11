import { LifeBuoy } from 'lucide-react'
import Header from '../components/Header'
import FAQ from '../components/FAQ'
import TrustSafety from '../components/TrustSafety'
import Contact from '../components/Contact'
import SubpageHero from '../components/SubpageHero'
import SubpageCta from '../components/SubpageCta'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'
import { useI18n } from '../i18n/I18nContext'

export default function SupportPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <main className="bg-background">
        <SubpageHero
          titleLine1={t('supportPage.titleLine1')}
          titleLine2={t('supportPage.titleLine2')}
          subtitleLine1={t('supportPage.subtitleLine1')}
          subtitleLine2={t('supportPage.subtitleLine2')}
          meta={t('supportPage.meta')}
          metaIcon={LifeBuoy}
          stats={[t('supportPage.statFaq'), t('supportPage.statSafety'), t('supportPage.statContact')]}
        />
        <FAQ page />
        <TrustSafety page />
        <Contact page />
        <SubpageCta
          title={t('supportPage.ctaTitle')}
          subtitle={t('supportPage.ctaSubtitle')}
          primaryLabel={t('common.becomeCreator')}
          secondaryLabel={t('supportPage.backHome')}
        />
      </main>
      <BrandBanner />
      <Footer />
    </>
  )
}
