import Header from '../components/Header'
import PageHero from '../components/PageHero'
import FAQ from '../components/FAQ'
import TrustSafety from '../components/TrustSafety'
import Contact from '../components/Contact'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'
import { useI18n } from '../i18n/I18nContext'

export default function SupportPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <main className="bg-background">
        <PageHero
          label={t('supportPage.label')}
          title={t('supportPage.title')}
          subtitle={t('supportPage.subtitle')}
        />
        <FAQ lead />
        <TrustSafety />
        <Contact />
      </main>
      <BrandBanner />
      <Footer />
    </>
  )
}
