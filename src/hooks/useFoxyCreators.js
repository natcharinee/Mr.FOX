import { useEffect, useState } from 'react'
import { successStories } from '../data/content'
import foxyCreatorsData from '../data/foxyCreators.json'
import { fetchFoxyCreators } from '../lib/platformFeed'

const staticCreators = foxyCreatorsData.creators?.length
  ? foxyCreatorsData.creators
  : successStories

export function useFoxyCreators() {
  const [creators, setCreators] = useState(staticCreators)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function loadCreators() {
      setIsLoading(true)

      try {
        const liveCreators = await fetchFoxyCreators()
        if (!cancelled && liveCreators.length) {
          setCreators(liveCreators)
        }
      } catch {
        // Keep bundled snapshot when live FOXY feed is unavailable.
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    loadCreators()

    return () => {
      cancelled = true
    }
  }, [])

  return { creators, isLoading }
}
