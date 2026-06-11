import { useI18n } from '../i18n/I18nContext'
import { cn } from '@/lib/utils'

const platformChips = ['FOXY', 'CupE', 'Himbo', 'Lesbie', 'CLIQ', 'Tomboi']

const chatMessages = [
  { textKey: 'brandStory.phoneChat1', side: 'left', delay: 0 },
  { textKey: 'brandStory.phoneChat2', side: 'right', delay: 0.8 },
  { textKey: 'brandStory.phoneChat3', side: 'left', delay: 1.6 },
]

const todayEarnings = [
  { platform: 'FOXY', amount: '+฿6,250', delay: 0.5 },
  { platform: 'CupE', amount: '+฿5,890', delay: 0.58 },
  { platform: 'Himbo', amount: '+฿7,480', delay: 0.66 },
  { platform: 'Lesbie', amount: '+฿5,620', delay: 0.74 },
  { platform: 'CLIQ', amount: '+฿5,375', delay: 0.82 },
  { platform: 'Tomboi', amount: '+฿6,840', delay: 0.9 },
]

const todayEarningsTotal = '+฿37,455'

function IphoneStatusBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex h-[26px] items-center justify-between px-4 pt-[7px] text-[8px] font-semibold text-white">
      <span className="w-10 tabular-nums">9:41</span>
      <div className="absolute left-1/2 top-[6px] flex h-[15px] w-[52px] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-1.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        <span className="size-[5px] rounded-full bg-[#1a1a22] ring-[1.5px] ring-[#2a2a35]" />
      </div>
      <div className="flex w-10 items-center justify-end gap-[3px]">
        <svg viewBox="0 0 16 10" className="h-[7px] w-[11px]" aria-hidden="true">
          <rect x="0" y="6" width="2" height="4" rx="0.5" fill="currentColor" />
          <rect x="3" y="4" width="2" height="6" rx="0.5" fill="currentColor" />
          <rect x="6" y="2" width="2" height="8" rx="0.5" fill="currentColor" />
          <rect x="9" y="0" width="2" height="10" rx="0.5" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 14 10" className="h-[7px] w-[10px]" aria-hidden="true">
          <path
            d="M7 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-2.8-1.4a3.4 3.4 0 0 1 5.6 0 .75.75 0 1 0 1.24-.86 4.9 4.9 0 0 0-8.08 0 .75.75 0 1 0 1.24.86Zm-2.3-1.9a6.5 6.5 0 0 1 10.2 0 .75.75 0 1 0 1.18-.92 8 8 0 0 0-12.56 0 .75.75 0 1 0 1.18.92Z"
            fill="currentColor"
          />
        </svg>
        <svg viewBox="0 0 22 10" className="h-[7px] w-[14px]" aria-hidden="true">
          <rect x="0.5" y="0.5" width="18" height="9" rx="2" stroke="currentColor" fill="none" strokeWidth="1" />
          <rect x="2" y="2" width="13" height="6" rx="1" fill="currentColor" />
          <rect x="19.5" y="3.5" width="2" height="3" rx="0.5" fill="currentColor" opacity="0.45" />
        </svg>
      </div>
    </div>
  )
}

function PhoneScreenAnimation() {
  const { t } = useI18n()

  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#080808] text-white">
      <IphoneStatusBar />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(242,202,80,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(242,202,80,0.08),transparent_45%)] motion-reduce:animate-none animate-feature-live-ken-burns" />

      <div className="relative flex items-center gap-2 px-3.5 pb-2 pt-8">
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

      <div className="relative mx-3.5 mt-3 flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-primary/20 bg-primary/[0.08] px-2.5 py-2.5">
        <p className="mb-2 shrink-0 text-[8px] text-white/45">{t('brandStory.phoneEarnings')}</p>
        <div className="flex flex-1 flex-col justify-center gap-1.5">
          {todayEarnings.map((item) => (
            <div
              key={item.platform}
              className="flex items-center justify-between gap-2 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 animate-feature-pip-in"
              style={{ animationDelay: `${item.delay}s` }}
            >
              <span className="truncate text-[8px] font-semibold text-white/55">{item.platform}</span>
              <span className="shrink-0 text-[10px] font-extrabold tabular-nums text-primary">{item.amount}</span>
            </div>
          ))}
        </div>
        <div
          className="mt-2 flex shrink-0 items-center justify-between border-t border-primary/15 pt-2 opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 animate-feature-pip-in"
          style={{ animationDelay: '1s' }}
        >
          <span className="text-[8px] font-semibold text-white/45">{t('brandStory.phoneEarningsTotal')}</span>
          <span className="text-[11px] font-extrabold tabular-nums text-primary motion-reduce:animate-none animate-feature-pulse">
            {todayEarningsTotal}
          </span>
        </div>
      </div>

      <div className="relative mt-auto space-y-1.5 px-3.5 pb-7 pt-3">
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

function PhoneSideButton({ side, top, height, width = 3, rounded = 'rounded-sm' }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute bg-gradient-to-b from-[#6e6e73] via-[#434345] to-[#2c2c2e] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(0,0,0,0.45)]',
        rounded,
        side === 'left' ? '-left-[2px]' : '-right-[2px]',
      )}
      style={{ top, height, width: `${width}px` }}
    />
  )
}

export default function PhoneMockup({ className }) {
  return (
    <div
      className={cn(
        'relative h-[clamp(360px,52vw,560px)] w-[clamp(178px,26vw,278px)]',
        className,
      )}
    >
      <PhoneSideButton side="left" top="14%" height="4.5%" width={3} rounded="rounded-l-[3px]" />
      <PhoneSideButton side="left" top="21.5%" height="7.5%" width={3} rounded="rounded-l-[3px]" />
      <PhoneSideButton side="left" top="30.5%" height="7.5%" width={3} rounded="rounded-l-[3px]" />
      <PhoneSideButton side="right" top="23%" height="11%" width={3} rounded="rounded-r-[3px]" />

      <div
        className="relative size-full rounded-[2.65rem] p-[1.5px] shadow-[0_28px_70px_rgba(0,0,0,0.62),0_2px_0_rgba(255,255,255,0.08)_inset]"
        style={{
          background:
            'linear-gradient(160deg, #8e8e93 0%, #636366 18%, #3a3a3c 52%, #1c1c1e 78%, #48484a 100%)',
        }}
      >
        <div
          className="relative size-full overflow-hidden rounded-[2.55rem] p-[3px]"
          style={{
            background: 'linear-gradient(180deg, #4a4a4c 0%, #1c1c1e 55%, #0b0b0c 100%)',
          }}
        >
          <div className="pointer-events-none absolute inset-x-[8%] top-[1px] h-px bg-white/20" />
          <div className="pointer-events-none absolute inset-y-[12%] left-[1px] w-px bg-white/10" />

          <div className="relative size-full overflow-hidden rounded-[2.2rem] bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
            <PhoneScreenAnimation />
            <div className="pointer-events-none absolute inset-x-0 bottom-[5px] z-30 flex justify-center">
              <div className="h-[3px] w-[28%] rounded-full bg-white/85" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
