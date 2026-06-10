import { Routes, Route } from 'react-router-dom'
import MetaUpdater from './components/MetaUpdater'
import HomePage from './pages/HomePage'
import PlatformsPage from './pages/PlatformsPage'

export default function App() {
  return (
    <>
      <MetaUpdater />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
      </Routes>
    </>
  )
}
