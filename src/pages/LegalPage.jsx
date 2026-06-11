import { Navigate, NavLink, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useI18n } from '../i18n/I18nContext'
import { container } from '@/lib/layout'
import { cn } from '@/lib/utils'
import { LEGAL_DOC_KEYS, legalDocuments } from '../data/legalDocuments'

export default function LegalPage() {
  const { doc } = useParams()
  const { locale, t } = useI18n()

  if (!LEGAL_DOC_KEYS.includes(doc)) {
    return <Navigate to="/legal/terms" replace />
  }

  const content = legalDocuments[locale]?.[doc] ?? legalDocuments.th[doc]

  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(242,202,80,0.14),transparent_55%)]" />
          <div className={cn(container, 'relative pt-[clamp(120px,14vw,180px)] pb-[clamp(40px,5vw,64px)]')}>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {t('footer.legal')}
            </p>
            <h1 className="max-w-[900px] text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight">
              {content.title}
            </h1>
            <p className="mt-4 max-w-[640px] text-[clamp(16px,2vw,18px)] leading-relaxed text-muted-foreground">
              {content.intro}
            </p>
            <p className="mt-6 text-sm text-muted-foreground/80">
              {t('legalPage.updated', { date: content.updated })}
            </p>
          </div>
        </section>

        <section className="py-[clamp(48px,6vw,80px)]">
          <div className={cn(container, 'grid gap-10 min-[901px]:grid-cols-[220px_1fr] min-[901px]:gap-16')}>
            <nav aria-label={t('footer.legal')} className="min-[901px]:sticky min-[901px]:top-28 min-[901px]:self-start">
              <p className="mb-3 hidden text-[11px] font-bold uppercase tracking-wider text-muted-foreground min-[901px]:block">
                {t('legalPage.documents')}
              </p>
              <ul className="flex gap-2 overflow-x-auto pb-1 min-[901px]:flex-col min-[901px]:gap-1 min-[901px]:overflow-visible min-[901px]:pb-0">
                {LEGAL_DOC_KEYS.map((key) => (
                  <li key={key} className="shrink-0 min-[901px]:shrink">
                    <NavLink
                      to={`/legal/${key}`}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-lg px-3 py-2 text-sm transition-colors min-[901px]:border-l-2 min-[901px]:rounded-none min-[901px]:rounded-r-lg min-[901px]:py-2.5',
                          isActive
                            ? 'bg-primary/10 font-semibold text-primary min-[901px]:border-primary'
                            : 'text-muted-foreground hover:bg-white/[0.04] hover:text-foreground min-[901px]:border-transparent',
                        )
                      }
                    >
                      {t(`footer.${key}`)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <article className="min-w-0">
              <div className="rounded-2xl border border-border bg-[#111111] p-[clamp(24px,4vw,40px)]">
                <div className="space-y-10">
                  {content.sections.map((section) => (
                    <section key={section.title}>
                      <h2 className="text-lg font-bold tracking-tight text-foreground">{section.title}</h2>
                      {section.body?.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)} className="mt-3 text-[15px] leading-[1.75] text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                      {section.list && (
                        <ul className="mt-3 space-y-2">
                          {section.list.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-[15px] leading-[1.75] text-muted-foreground before:mt-2 before:size-1.5 before:shrink-0 before:rounded-full before:bg-primary"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card/50 px-5 py-4">
                <p className="text-sm text-muted-foreground">{t('legalPage.questions')}</p>
                <a
                  href="/support#contact"
                  className="text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                >
                  {t('legalPage.contact')}
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
