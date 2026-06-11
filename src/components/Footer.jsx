import Logo from './Logo'
import { useI18n } from '../i18n/I18nContext'
import { container } from '@/lib/layout'

const footerSections = [
  {
    titleKey: 'company',
    links: [
      { key: 'about', href: '/about' },
      { key: 'careers', href: '/about#careers' },
      { key: 'contact', href: '/support#contact' },
    ],
  },
  {
    titleKey: 'ecosystem',
    links: [
      { label: 'FOXY', href: '#' },
      { label: 'CLIQ', href: '#' },
      { label: 'CupE', href: '#' },
      { key: 'allPlatforms', href: '/platforms' },
    ],
  },
  {
    titleKey: 'resources',
    links: [
      { key: 'blog', href: '/blog' },
      { key: 'creatorGuide', href: '#' },
      { key: 'faq', href: '/support#faq' },
    ],
  },
  {
    titleKey: 'legal',
    links: [
      { key: 'privacy', href: '#' },
      { key: 'terms', href: '#' },
      { key: 'cookie', href: '#' },
      { key: 'dmca', href: '#' },
    ],
  },
]

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border bg-[#0a0a0a] py-20 pb-10">
      <div className={container}>
        <div className="mb-16 grid gap-10 min-[901px]:grid-cols-[1fr_2fr] min-[901px]:gap-16">
          <div>
            <a href="#" className="inline-flex items-center">
              <Logo className="[&_img]:h-11 [&_svg]:h-9" />
            </a>
            <p className="mt-3 text-sm text-muted-foreground">{t('footer.tagline')}</p>
            <a
              href="tel:+6629575771"
              className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <svg className="size-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.6 11.6 0 003.64.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.6 11.6 0 00.58 3.64 1 1 0 01-.24 1z"
                  fill="currentColor"
                />
              </svg>
              {t('footer.phone')}
            </a>
            <p className="mt-2 flex max-w-xs items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <svg className="mt-0.5 size-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z"
                  fill="currentColor"
                />
              </svg>
              {t('footer.address')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 min-[481px]:grid-cols-2 min-[901px]:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.titleKey}>
                <h4 className="mb-4 text-[13px] font-bold uppercase tracking-wider text-muted-foreground">
                  {t(`footer.${section.titleKey}`)}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.key || link.label}>
                      <a href={link.href} className="text-sm opacity-70 transition-opacity hover:opacity-100">
                        {link.label || t(`footer.${link.key}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-[13px] text-[#666666]">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-5">
            {[
              ['https://facebook.com/mrfox', 'Facebook'],
              ['https://instagram.com/mrfox', 'Instagram'],
              ['https://x.com/mrfox', 'X'],
              ['#', 'LinkedIn'],
            ].map(([href, label]) => (
              <a
                key={label}
                href={href}
                target={href !== '#' ? '_blank' : undefined}
                rel={href !== '#' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="text-[13px] text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
