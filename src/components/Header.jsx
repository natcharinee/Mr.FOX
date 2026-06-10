import { useState, useEffect } from 'react'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { CtaLink } from './CtaButton'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { container } from '@/lib/layout'
import { useI18n } from '../i18n/I18nContext'

const desktopLinkKeys = [
  { href: '/#home', key: 'home' },
  { href: '/#solutions', key: 'features' },
  { href: '/platforms', key: 'platform' },
  { href: '/#faq', key: 'support' },
  { href: '/#news', key: 'blog' },
  { href: '/#about', key: 'about' },
  { href: '/#careers', key: 'careers' },
]

const mobileLinkKeys = [
  { href: '/#home', key: 'home' },
  { href: '/platforms', key: 'platform' },
  { href: '/#creators', key: 'forCreators' },
  { href: '/#solutions', key: 'solutions' },
  { href: '/#stories', key: 'successStories' },
  { href: '/#about', key: 'about' },
  { href: '/#news', key: 'news' },
  { href: '/#careers', key: 'careers' },
  { href: '/#contact', key: 'contact' },
]

export default function Header({ overHero = false }) {
  const { t } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[100] bg-black py-[18px] transition-all duration-300',
          scrolled && 'border-b border-border bg-black/95 py-3.5 backdrop-blur-xl',
        )}
      >
        <div className={cn(container, 'flex items-center gap-8')}>
          <a href="/" className="-ml-2.5 flex shrink-0 items-center gap-2">
            <Logo />
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-9 min-[901px]:flex" aria-label="Main navigation">
            {desktopLinkKeys.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-base font-semibold text-white/85 transition-colors hover:text-foreground"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5 max-[900px]:ml-auto">
            <CtaLink href="#contact" size="sm" className="hidden min-[901px]:inline-flex">
              {t('common.signUp')}
            </CtaLink>
            <CtaLink href="#contact" variant="outline" size="sm" className="hidden min-[901px]:inline-flex">
              {t('common.login')}
            </CtaLink>
            <LanguageSwitcher className="hidden min-[901px]:inline-flex" />
            <Button
              variant="outline"
              size="sm"
              className="hidden rounded-full border-transparent bg-white/12 text-sm font-semibold text-foreground backdrop-blur-md hover:bg-white/20 max-[900px]:inline-flex"
              onClick={() => setMenuOpen(true)}
              aria-label={t('nav.menu')}
            >
              {t('nav.menu')}
            </Button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[200] flex flex-col bg-background opacity-0 invisible transition-all duration-300',
          menuOpen && 'visible opacity-100',
        )}
      >
        <div className={cn(container, 'flex items-center justify-between py-5')}>
          <a href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <Logo />
          </a>
          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-transparent bg-white/12 text-sm font-semibold backdrop-blur-md hover:bg-white/20"
              onClick={() => setMenuOpen(false)}
              aria-label={t('nav.close')}
            >
              {t('nav.close')}
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
          {mobileLinkKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 text-[clamp(28px,5vw,42px)] font-bold tracking-tight transition-colors hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-3 p-6">
          <CtaLink href="#contact" onClick={() => setMenuOpen(false)}>
            {t('common.becomeCreator')}
          </CtaLink>
          <CtaLink href="#ecosystem" variant="outline" onClick={() => setMenuOpen(false)}>
            {t('common.exploreEcosystem')}
          </CtaLink>
        </div>
      </div>
    </>
  )
}
