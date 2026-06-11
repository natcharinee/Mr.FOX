import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'
import { legalDocuments } from '../data/legalDocuments'

export default function MetaUpdater() {
  const { locale, t } = useI18n()
  const { pathname } = useLocation()

  useEffect(() => {
    const metaByPath = {
      '/platforms': ['platformsPage.metaTitle', 'platformsPage.metaDescription'],
      '/features': ['featuresPage.metaTitle', 'featuresPage.metaDescription'],
      '/blog': ['blogPage.metaTitle', 'blogPage.metaDescription'],
      '/support': ['supportPage.metaTitle', 'supportPage.metaDescription'],
      '/about': ['aboutPage.metaTitle', 'aboutPage.metaDescription'],
    }
    const legalDoc = pathname.match(/^\/legal\/([^/]+)$/)?.[1]
    const legalMeta = legalDoc && legalDocuments[locale]?.[legalDoc]

    if (legalMeta) {
      document.title = legalMeta.metaTitle
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', legalMeta.metaDescription)
      return
    }

    const [titleKey, descriptionKey] = metaByPath[pathname] ?? ['meta.title', 'meta.description']
    document.title = t(titleKey)
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', t(descriptionKey))
    }
  }, [locale, t, pathname])

  return null
}
