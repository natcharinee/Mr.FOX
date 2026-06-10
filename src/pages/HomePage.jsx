import Header from '../components/Header'
import Hero from '../components/Hero'
import PlatformMarquee from '../components/PlatformMarquee'
import Stats from '../components/Stats'
import Ecosystem from '../components/Ecosystem'
import PayoutCta from '../components/PayoutCta'
import ForCreators from '../components/ForCreators'
import Solutions from '../components/Solutions'
import PromoBanner from '../components/PromoBanner'
import SuccessStories from '../components/SuccessStories'
import About from '../components/About'
import News from '../components/News'
import Careers from '../components/Careers'
import Partners from '../components/Partners'
import TrustSafety from '../components/TrustSafety'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header overHero />
      <main>
        <Hero />
        <PlatformMarquee />
        <PayoutCta />
        <Stats />
        <Ecosystem />
        <ForCreators />
        <Solutions />
        <PromoBanner />
        <SuccessStories />
        <About />
        <News />
        <Careers />
        <Partners />
        <TrustSafety />
        <Contact />
        <FAQ />
      </main>
      <BrandBanner />
      <Footer />
    </>
  )
}
