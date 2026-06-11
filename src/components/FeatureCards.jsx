import { useRef } from 'react'
import { featureCardIds } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { container, section, sectionTitle } from '@/lib/layout'
import { cn } from '@/lib/utils'

const chatBubbles = [
  {
    text: 'สวัสดีครับ มีคอนเทนต์ใหม่ไหม?',
    className: 'ml-auto w-[78%] rounded-2xl rounded-tr-md bg-primary/90 px-3 py-2 text-[11px] font-medium text-black',
  },
  {
    text: 'มีแล้วค่า อัปโหลดให้แล้ว!',
    className: 'w-[72%] rounded-2xl rounded-tl-md border border-white/10 bg-white/10 px-3 py-2 text-[11px] text-white/90 backdrop-blur-sm',
  },
  {
    text: 'เยี่ยมเลย!',
    className: 'ml-auto w-[55%] rounded-2xl rounded-tr-md bg-primary/90 px-3 py-2 text-[11px] font-medium text-black',
  },
]

const motionPop = 'animate-feature-pop-in opacity-0 motion-reduce:animate-none motion-reduce:opacity-100'

const liveChatMessages = [
  { text: 'สวยมากค่ะ!', delay: 0 },
  { text: '❤️❤️❤️', delay: 1.1 },
  { text: 'เยี่ยมเลย', delay: 2.2 },
  { text: 'ส่งของขวัญแล้ว', delay: 3.3 },
]

const liveHearts = [
  { left: '72%', delay: 0.3 },
  { left: '80%', delay: 1 },
  { left: '66%', delay: 1.7 },
  { left: '76%', delay: 2.5 },
]

const visualThemes = {
  chat: 'from-[#1e3a5f] to-[#0f2744]',
  voiceCall: 'from-[#2d3b2d] to-[#1a261a]',
  videoCall: 'from-[#3d2f4a] to-[#241a30]',
  liveStreaming: 'from-[#4a2020] to-[#2a1212]',
  feed: 'from-[#2a2a35] to-[#15151c]',
  following: 'from-[#3d3520] to-[#221e12]',
}

function FeatureVisual({ id }) {
  const theme = visualThemes[id] ?? 'from-[#1a1a2e] to-[#0f3460]'

  return (
    <div className={cn('relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br p-5', theme)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(242,202,80,0.12),transparent_60%)]" />

      {id === 'chat' && (
        <div className="relative w-full max-w-[220px] space-y-2.5">
          {chatBubbles.map((bubble, i) => (
            <div
              key={bubble.text}
              className={cn(
                bubble.className,
                'animate-feature-chat-bubble opacity-0 motion-reduce:animate-none motion-reduce:opacity-100',
              )}
              style={{ animationDelay: `${i * 0.65}s` }}
            >
              {bubble.text}
            </div>
          ))}
        </div>
      )}

      {id === 'voiceCall' && (
        <div className="relative flex flex-col items-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/15">
            <svg viewBox="0 0 24 24" className="size-7 text-primary" aria-hidden="true">
              <path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.6 11.6 0 003.64.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.6 11.6 0 00.58 3.64 1 1 0 01-.24 1z" />
            </svg>
          </div>
          <div className="flex h-8 items-end gap-1">
            {[3, 6, 4, 8, 5, 9, 4, 7, 3, 6, 5, 8].map((h, i) => (
              <span
                key={i}
                className="w-1 origin-bottom rounded-full bg-primary/70 motion-reduce:animate-none animate-feature-wave"
                style={{ height: `${h * 3}px`, animationDelay: `${i * 0.08}s` }}
              />
            ))}
          </div>
        </div>
      )}

      {id === 'videoCall' && (
        <div className="relative w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-lg">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
            <span className="text-[10px] font-semibold text-white/70">Video Call</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-medium tabular-nums text-white/50 motion-reduce:animate-none animate-feature-pulse">
                00:24
              </span>
              <span className="size-2 rounded-full bg-[#4ade80] motion-reduce:animate-none animate-feature-pulse" />
            </div>
          </div>
          <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-[#2a2035] to-[#141018]">
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(242,202,80,0.12),transparent_55%)]" />
            {[0, 0.7].map((delay) => (
              <span
                key={delay}
                className="pointer-events-none absolute size-20 rounded-full border border-primary/30 motion-reduce:hidden animate-feature-video-ring"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
            <div className="relative flex size-14 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/15 text-2xl font-bold text-primary motion-reduce:animate-none animate-feature-video-breathe">
              F
            </div>
            <div
              className="absolute bottom-2 right-2 overflow-hidden rounded-lg border border-white/20 bg-black/70 shadow-lg motion-reduce:animate-none animate-feature-pip-in"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex h-11 w-14 items-center justify-center bg-gradient-to-br from-white/10 to-white/0">
                <div className="flex size-7 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white">
                  C
                </div>
              </div>
              <div className="absolute bottom-0.5 left-1 flex gap-px">
                {[2, 4, 3, 5].map((h, i) => (
                  <span
                    key={i}
                    className="w-0.5 origin-bottom rounded-full bg-primary/80 motion-reduce:animate-none animate-feature-wave"
                    style={{ height: `${h * 2}px`, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            <span className="rounded-full bg-red-500/90 px-3 py-1 text-[10px] font-bold text-white">End</span>
          </div>
        </div>
      )}

      {id === 'liveStreaming' && (
        <div className="relative w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/15 bg-black/50 shadow-lg">
          <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#4a1010] to-[#1a0808]">
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,rgba(242,202,80,0.18),transparent_55%)] motion-reduce:animate-none animate-feature-live-ken-burns" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />

            <div className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded bg-red-600 px-1.5 py-0.5 shadow-sm">
              <span className="size-1.5 rounded-full bg-white motion-reduce:animate-none animate-feature-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-wide text-white">Live</span>
            </div>

            <div className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 backdrop-blur-sm">
              <svg viewBox="0 0 24 24" className="size-2.5 text-white/70" aria-hidden="true">
                <path fill="currentColor" d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5zm0 12.5a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
              <span className="text-[9px] font-semibold tabular-nums text-white/90 motion-reduce:animate-none animate-feature-pulse">
                1.2K
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex size-14 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/15 text-xl font-bold text-primary shadow-[0_0_24px_rgba(242,202,80,0.2)] motion-reduce:animate-none animate-feature-video-breathe">
                F
              </div>
            </div>

            <div className="absolute bottom-2 left-2 flex w-[58%] flex-col gap-1">
              {liveChatMessages.map((msg) => (
                <span
                  key={msg.text}
                  className="w-fit max-w-full truncate rounded-md bg-black/55 px-1.5 py-0.5 text-[8px] font-medium text-white/90 backdrop-blur-sm opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 animate-feature-live-chat-rise"
                  style={{ animationDelay: `${msg.delay}s` }}
                >
                  {msg.text}
                </span>
              ))}
            </div>

            {liveHearts.map((heart, i) => (
              <span
                key={i}
                className="pointer-events-none absolute bottom-6 text-xs opacity-0 motion-reduce:hidden animate-feature-live-heart-rise"
                style={{ left: heart.left, animationDelay: `${heart.delay}s` }}
                aria-hidden="true"
              >
                ❤️
              </span>
            ))}

            <div
              className="absolute bottom-9 right-2.5 flex items-center gap-1 rounded-full border border-primary/30 bg-primary/20 px-2 py-0.5 text-[8px] font-bold text-primary opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 animate-feature-live-gift-pop"
              style={{ animationDelay: '1.6s' }}
            >
              <span aria-hidden="true">🎁</span>
              <span>+50</span>
            </div>
          </div>
        </div>
      )}

      {id === 'feed' && (
        <div className="relative w-full max-w-[220px] space-y-2">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={cn('flex gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm', motionPop)}
              style={{ animationDelay: `${(n - 1) * 0.35}s` }}
            >
              <div className="size-9 shrink-0 rounded-lg bg-gradient-to-br from-primary/40 to-primary/10" />
              <div className="min-w-0 flex-1 space-y-1.5">
                <div className="h-2 w-3/4 rounded-full bg-white/20" />
                <div className="h-1.5 w-full rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      )}

      {id === 'following' && (
        <div className="relative w-full max-w-[220px] space-y-2">
          {['FOXY', 'CupE', 'CLIQ'].map((name, i) => (
            <div
              key={name}
              className={cn('flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-sm', motionPop)}
              style={{ animationDelay: `${i * 0.35}s` }}
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#8b6914] text-xs font-bold text-black">
                {name.charAt(0)}
              </div>
              <p className="min-w-0 flex-1 truncate text-xs font-bold text-white">{name}</p>
              <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-black">
                Follow
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ScrollArrow({ direction }) {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FeatureCards() {
  const { t } = useI18n()
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('article')
    const amount = (card?.offsetWidth ?? 300) + 24
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className={cn(section, 'overflow-hidden')} id="features">
      <div className={container}>
        <h2 className={cn(sectionTitle, 'text-center')}>{t('featureCards.title')}</h2>
      </div>

      <div className="mt-12 [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-6 pb-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {featureCardIds.map((id) => {
            const badgeKey = t(`featureCards.${id}.badge`)
            const hasBadge = badgeKey && badgeKey !== `featureCards.${id}.badge`

            return (
              <article key={id} className="flex w-[min(300px,78vw)] shrink-0 snap-start flex-col">
                <FeatureVisual id={id} />
                {hasBadge && (
                  <span className="mt-4 inline-flex w-fit rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-bold tracking-wide text-white/80">
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

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          aria-label={t('featureCards.scrollPrev')}
          onClick={() => scroll(-1)}
          className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
        >
          <ScrollArrow direction="left" />
        </button>
        <button
          type="button"
          aria-label={t('featureCards.scrollNext')}
          onClick={() => scroll(1)}
          className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
        >
          <ScrollArrow direction="right" />
        </button>
      </div>
    </section>
  )
}
