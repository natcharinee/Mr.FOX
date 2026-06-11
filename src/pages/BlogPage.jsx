import Header from '../components/Header'
import PageHero from '../components/PageHero'
import News from '../components/News'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'
import { useI18n } from '../i18n/I18nContext'

export default function BlogPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <main className="bg-background">
        <PageHero
          label={t('news.label')}
          title={t('news.title')}
          subtitle={t('news.subtitle')}
        />
        <News lead />
      </main>
      <BrandBanner />
      <Footer />
    </>
  )
}
