import Header from '../components/Header'
import PageHero from '../components/PageHero'
import ForCreators from '../components/ForCreators'
import Solutions from '../components/Solutions'
import PromoBanner from '../components/PromoBanner'
import SuccessStories from '../components/SuccessStories'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'
import { useI18n } from '../i18n/I18nContext'

export default function FeaturesPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <main className="bg-background">
        <PageHero
          label={t('featuresPage.label')}
          title={t('featuresPage.title')}
          subtitle={t('featuresPage.subtitle')}
        />
        <ForCreators lead />
        <Solutions />
        <PromoBanner />
        <SuccessStories />
      </main>
      <BrandBanner />
      <Footer />
    </>
  )
}
