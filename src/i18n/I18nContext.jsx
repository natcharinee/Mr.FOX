import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import en from './locales/en'
import th from './locales/th'
import zh from './locales/zh'

const locales = { en, th, zh }
const STORAGE_KEY = 'mrfox-lang'
const DEFAULT_LOCALE = 'th'

const I18nContext = createContext(null)

function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

function detectLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && locales[saved]) return saved
  const browser = navigator.language.toLowerCase()
  if (browser.startsWith('zh')) return 'zh'
  if (browser.startsWith('en')) return 'en'
  return DEFAULT_LOCALE
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() => detectLocale())

  const setLocale = useCallback((lang) => {
    if (locales[lang]) {
      setLocaleState(lang)
      localStorage.setItem(STORAGE_KEY, lang)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-Hans' : locale
  }, [locale])

  const t = useCallback(
    (key, vars) => {
      let str = getNested(locales[locale], key) ?? getNested(locales[DEFAULT_LOCALE], key) ?? key
      if (vars) {
        Object.entries(vars).forEach(([k, v]) => {
          str = str.replace(`{{${k}}}`, v)
        })
      }
      return str
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, locales: Object.keys(locales) }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
