import { useState, useEffect } from 'react'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { CtaLink } from './CtaButton'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { container } from '@/lib/layout'
import { useI18n } from '../i18n/I18nContext'

const desktopLinkKeys = [
  { href: '/', key: 'home' },
  { href: '/platforms', key: 'platform' },
  { href: '/features', key: 'features' },
  { href: '/blog', key: 'blog' },
  { href: '/support', key: 'support' },
  { href: '/about', key: 'about' },
]

const mobileLinkKeys = desktopLinkKeys

export default function Header({ overHero = false }) {
  const { t, tNav } = useI18n()
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
        <div className={cn(container, 'flex items-center gap-6')}>
          <a href="/" className="flex shrink-0 items-center gap-2">
            <Logo />
          </a>

          <nav
            className="hidden flex-1 items-center justify-center gap-8 min-[901px]:flex xl:gap-10"
            aria-label="Main navigation"
          >
            {desktopLinkKeys.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-[15px] font-semibold uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-primary"
              >
                {tNav(link.key)}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center min-[901px]:ml-0">
            <div className="hidden items-center gap-1.5 border-l border-white/10 pl-5 min-[901px]:flex">
              <CtaLink
                href="https://mrfox.com"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="h-9 px-4 text-[13px]"
              >
                {t('common.signUp')}
              </CtaLink>
              <CtaLink
                href="/support#contact"
                variant="outline"
                size="sm"
                className="h-9 border-white/15 bg-white/[0.05] px-4 text-[13px] hover:border-white/25 hover:bg-white/10"
              >
                {t('common.login')}
              </CtaLink>
              <span className="mx-0.5 h-5 w-px shrink-0 bg-white/10" aria-hidden="true" />
              <LanguageSwitcher className="h-9 px-2" />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-transparent bg-white/12 text-sm font-semibold text-foreground backdrop-blur-md hover:bg-white/20 max-[900px]:inline-flex min-[901px]:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label={tNav('menu')}
            >
              {tNav('menu')}
            </Button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[200] flex flex-col bg-background opacity-0 invisible pointer-events-none transition-all duration-300',
          menuOpen && 'visible opacity-100 pointer-events-auto',
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
              aria-label={tNav('close')}
            >
              {tNav('close')}
            </Button>
            <LanguageSwitcher inOverlay />
          </div>
        </div>
        <nav className="flex flex-1 flex-col justify-start gap-0 px-8 pt-10">
          {mobileLinkKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-white/5 py-3 text-[clamp(24px,4vw,32px)] font-semibold uppercase leading-tight tracking-[0.06em] transition-colors last:border-b-0 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {tNav(link.key)}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-3 p-6">
          <CtaLink href="/support#contact" onClick={() => setMenuOpen(false)}>
            {t('common.becomeCreator')}
          </CtaLink>
          <CtaLink href="/platforms" variant="outline" onClick={() => setMenuOpen(false)}>
            {t('common.exploreEcosystem')}
          </CtaLink>
        </div>
      </div>
    </>
  )
}
