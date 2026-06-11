import Header from '../components/Header'
import PageHero from '../components/PageHero'
import About from '../components/About'
import Partners from '../components/Partners'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'
import { useI18n } from '../i18n/I18nContext'

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <main className="bg-background">
        <PageHero
          label={t('about.label')}
          title={t('about.title')}
          subtitle={t('aboutPage.subtitle')}
        />
        <About lead />
        <Partners />
      </main>
      <BrandBanner />
      <Footer />
    </>
  )
}
