import { Routes, Route } from 'react-router-dom'
import MetaUpdater from './components/MetaUpdater'
import ScrollToHash from './components/ScrollToHash'
import HomePage from './pages/HomePage'
import PlatformsPage from './pages/PlatformsPage'
import FeaturesPage from './pages/FeaturesPage'
import BlogPage from './pages/BlogPage'
import SupportPage from './pages/SupportPage'
import AboutPage from './pages/AboutPage'
import LegalPage from './pages/LegalPage'

export default function App() {
  return (
    <>
      <MetaUpdater />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/legal/:doc" element={<LegalPage />} />
      </Routes>
    </>
  )
}
