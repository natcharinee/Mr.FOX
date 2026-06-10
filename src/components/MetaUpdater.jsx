import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext'

export default function MetaUpdater() {
  const { locale, t } = useI18n()
  const { pathname } = useLocation()

  useEffect(() => {
    const isPlatformsPage = pathname === '/platforms'
    document.title = isPlatformsPage ? t('platformsPage.metaTitle') : t('meta.title')
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        isPlatformsPage ? t('platformsPage.metaDescription') : t('meta.description'),
      )
    }
  }, [locale, t, pathname])

  return null
}
