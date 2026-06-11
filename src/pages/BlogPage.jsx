import { Newspaper } from 'lucide-react'
import Header from '../components/Header'
import News from '../components/News'
import SubpageHero from '../components/SubpageHero'
import SubpageCta from '../components/SubpageCta'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'
import { useI18n } from '../i18n/I18nContext'

export default function BlogPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <main className="bg-background">
        <SubpageHero
          titleLine1={t('blogPage.titleLine1')}
          titleLine2={t('blogPage.titleLine2')}
          subtitleLine1={t('blogPage.subtitleLine1')}
          subtitleLine2={t('blogPage.subtitleLine2')}
          meta={t('blogPage.meta')}
          metaIcon={Newspaper}
          stats={[t('blogPage.statArticles'), t('blogPage.statCategories'), t('blogPage.statInsights')]}
        />
        <News page />
        <SubpageCta
          title={t('blogPage.ctaTitle')}
          subtitle={t('blogPage.ctaSubtitle')}
          primaryLabel={t('common.becomeCreator')}
          secondaryLabel={t('blogPage.backHome')}
        />
      </main>
      <BrandBanner />
      <Footer />
    </>
  )
}
