import Header from '../components/Header'
import Hero from '../components/Hero'
import PlatformMarquee from '../components/PlatformMarquee'
import BrandStory from '../components/BrandStory'
import Stats from '../components/Stats'
import Ecosystem from '../components/Ecosystem'
import FeatureCards from '../components/FeatureCards'
import SuccessStories from '../components/SuccessStories'
import PayoutCta from '../components/PayoutCta'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header overHero />
      <main>
        <Hero />
        <PlatformMarquee />
        <BrandStory />
        <PayoutCta />
        <Stats />
        <Ecosystem />
        <FeatureCards />
        <SuccessStories />
      </main>
      <BrandBanner />
      <Footer />
    </>
  )
}
