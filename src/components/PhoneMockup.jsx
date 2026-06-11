import { useI18n } from '../i18n/I18nContext'
import { cn } from '@/lib/utils'

const platformChips = ['FOXY', 'CupE', 'Himbo', 'Lesbie', 'CLIQ', 'Tomboi']

const chatMessages = [
  { textKey: 'brandStory.phoneChat1', side: 'left', delay: 0 },
  { textKey: 'brandStory.phoneChat2', side: 'right', delay: 0.8 },
  { textKey: 'brandStory.phoneChat3', side: 'left', delay: 1.6 },
]

function PhoneScreenAnimation() {
  const { t } = useI18n()

  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#080808] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(242,202,80,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(242,202,80,0.08),transparent_45%)] motion-reduce:animate-none animate-feature-live-ken-burns" />

      <div className="relative flex items-center gap-2 px-3.5 pb-2 pt-9">
        <div className="flex size-8 items-center justify-center overflow-hidden rounded-lg bg-primary shadow-[0_0_16px_rgba(242,202,80,0.35)] motion-reduce:animate-none animate-feature-video-breathe">
          <img src="/images/fox-mark.png" alt="" className="size-6 rounded-md" draggable={false} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-[11px] font-extrabold tracking-tight text-primary">Mr.FOX</p>
          <p className="truncate text-[8px] text-white/45">{t('brandStory.phoneHub')}</p>
        </div>
        <span className="ml-auto flex items-center gap-1 rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 px-1.5 py-0.5">
          <span className="size-1.5 rounded-full bg-[#4ade80] motion-reduce:animate-none animate-feature-pulse" />
          <span className="text-[7px] font-semibold text-[#4ade80]">LIVE</span>
        </span>
      </div>

      <div className="relative grid grid-cols-2 gap-2 px-3.5">
        {[
          { value: '20+', labelKey: 'brandStory.phoneStatPlatforms', delay: 0.1 },
          { value: '50K+', labelKey: 'brandStory.phoneStatCreators', delay: 0.35 },
        ].map((stat) => (
          <div
            key={stat.labelKey}
            className="rounded-xl border border-white/8 bg-white/[0.04] px-2.5 py-2 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 animate-feature-pop-in"
            style={{ animationDelay: `${stat.delay}s` }}
          >
            <p className="text-sm font-extrabold tabular-nums text-primary">{stat.value}</p>
            <p className="text-[8px] text-white/50">{t(stat.labelKey)}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-3 overflow-hidden px-3.5">
        <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/35">
          {t('brandStory.phonePlatforms')}
        </p>
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-1.5 motion-reduce:animate-none animate-marquee-fast">
            {[...platformChips, ...platformChips].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[8px] font-bold text-primary"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="relative mx-3.5 mt-3 overflow-hidden rounded-xl border border-primary/20 bg-primary/[0.08] px-2.5 py-2 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 animate-feature-pip-in"
        style={{ animationDelay: '0.5s' }}
      >
        <p className="text-[8px] text-white/45">{t('brandStory.phoneEarnings')}</p>
        <p className="text-sm font-extrabold tabular-nums text-primary motion-reduce:animate-none animate-feature-pulse">
          +฿1,250
        </p>
      </div>

      <div className="relative mt-auto space-y-1.5 px-3.5 pb-5 pt-3">
        {chatMessages.map((msg) => (
          <div
            key={msg.textKey}
            className={cn(
              'max-w-[82%] rounded-xl px-2.5 py-1.5 text-[9px] leading-snug opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 animate-feature-chat-bubble',
              msg.side === 'right'
                ? 'ml-auto rounded-tr-sm bg-primary/90 font-medium text-black'
                : 'rounded-tl-sm border border-white/10 bg-white/10 text-white/90',
            )}
            style={{ animationDelay: `${msg.delay}s` }}
          >
            {t(msg.textKey)}
          </div>
        ))}
      </div>

      {[0, 0.9].map((delay) => (
        <span
          key={delay}
          className="pointer-events-none absolute left-1/2 top-[38%] size-16 -translate-x-1/2 rounded-full border border-primary/25 motion-reduce:hidden animate-feature-video-ring"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  )
}

export default function PhoneMockup({ className }) {
  return (
    <div className={cn('relative inline-block', className)}>
      <img
        src="/images/phone-mockup.png"
        alt=""
        className="relative z-0 h-[clamp(360px,52vw,560px)] w-auto drop-shadow-[0_24px_64px_rgba(0,0,0,0.55)]"
        draggable={false}
      />
      <div className="pointer-events-none absolute left-[6.8%] right-[6.8%] top-[2.2%] bottom-[2.2%] z-10 overflow-hidden rounded-[9%]">
        <PhoneScreenAnimation />
      </div>
    </div>
  )
}
