import { featureCardIds } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { container, section, sectionTitle } from '@/lib/layout'
import { cn } from '@/lib/utils'

function FeatureVisual({ id }) {
  if (id === 'api') {
    return (
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#7ec8f7] via-[#5eb0ef] to-[#3d8fd9]">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,white_0,transparent_45%),radial-gradient(circle_at_80%_70%,white_0,transparent_40%)]" />
        <div className="relative flex size-24 flex-col items-center justify-center rounded-[22px] bg-[#2f8fe8] shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
          <svg viewBox="0 0 48 32" className="mb-1 h-8 w-12 text-white/90" aria-hidden="true">
            <rect x="4" y="6" width="28" height="20" rx="4" fill="currentColor" opacity="0.35" />
            <rect x="12" y="2" width="28" height="20" rx="4" fill="currentColor" opacity="0.55" />
            <rect x="20" y="8" width="24" height="18" rx="4" fill="currentColor" />
          </svg>
          <span className="text-sm font-extrabold tracking-tight text-white">API+</span>
        </div>
      </div>
    )
  }

  if (id === 'payments') {
    return (
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-[#f4f4f5]">
        <div className="relative flex size-36 items-center justify-center">
          <svg viewBox="0 0 120 120" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#e4e4e7" strokeWidth="10" />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#22c55e"
              strokeWidth="10"
              strokeDasharray="245 327"
              strokeLinecap="round"
            />
          </svg>
          <div className="relative text-center">
            <p className="text-2xl font-extrabold tracking-tight text-black">฿12,417</p>
            <p className="mt-0.5 text-xs font-medium text-[#71717a]">Last 30 days</p>
          </div>
        </div>
      </div>
    )
  }

  if (id === 'analytics') {
    return (
      <div className="flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-[#3d4a2f] to-[#2a3320] p-5">
        <div>
          <p className="text-[11px] font-medium text-white/55">Your earnings last 30 days</p>
          <p className="mt-1 text-2xl font-extrabold tracking-tight text-white">฿13,495</p>
        </div>
        <svg viewBox="0 0 200 60" className="h-14 w-full" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,45 L30,38 L60,42 L90,28 L120,32 L150,18 L180,12 L200,8 L200,60 L0,60 Z"
            fill="url(#chartFill)"
          />
          <path
            d="M0,45 L30,38 L60,42 L90,28 L120,32 L150,18 L180,12 L200,8"
            fill="none"
            stroke="#4ade80"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex justify-between text-[10px] font-semibold uppercase tracking-wider text-white/40">
          <span>July</span>
          <span>August</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(242,202,80,0.15),transparent_55%)]" />
      <div className="relative w-full space-y-2">
        {[
          ['FOXY', 'Creator'],
          ['CupE', 'Model'],
          ['CLIQ', 'Ambassador'],
        ].map(([name, role]) => (
          <div
            key={name}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-sm"
          >
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#8b6914] text-xs font-bold text-black">
              {name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-white">{name}</p>
              <p className="truncate text-[10px] text-white/50">{role}</p>
            </div>
            <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white">
              Subscribe
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FeatureCards() {
  const { t } = useI18n()

  return (
    <section className={section} id="features">
      <div className={container}>
        <h2 className={cn(sectionTitle, 'text-center')}>{t('featureCards.title')}</h2>

        <div className="mt-12 grid grid-cols-1 gap-8 min-[641px]:grid-cols-2 min-[1101px]:grid-cols-4 min-[1101px]:gap-6">
          {featureCardIds.map((id) => {
            const badgeKey = t(`featureCards.${id}.badge`)
            const hasBadge = badgeKey && badgeKey !== `featureCards.${id}.badge`

            return (
              <article key={id} className="flex flex-col">
                <FeatureVisual id={id} />
                {hasBadge && (
                  <span
                    className={cn(
                      'mt-4 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide',
                      id === 'analytics'
                        ? 'bg-[#4ade80] text-black'
                        : 'border border-white/10 bg-white/8 text-white/80',
                    )}
                  >
                    {badgeKey}
                  </span>
                )}
                <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight">
                  {t(`featureCards.${id}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`featureCards.${id}.desc`)}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
