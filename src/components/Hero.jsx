import { useEffect, useState } from 'react'
import { heroSlides } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { CtaLink } from './CtaButton'
import { container } from '@/lib/layout'
import { cn } from '@/lib/utils'

const SLIDE_INTERVAL_MS = 5000

export default function Hero() {
  const { t } = useI18n()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const slideCount = heroSlides.length

  useEffect(() => {
    if (slideCount <= 1 || paused) return undefined

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slideCount)
    }, SLIDE_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [slideCount, paused, active])

  const goTo = (index) => setActive(index)

  const goPrev = () => goTo((active - 1 + slideCount) % slideCount)
  const goNext = () => goTo((active + 1) % slideCount)

  return (
    <section className="flex flex-col bg-background" id="home">
      <div
        className="group relative w-full overflow-hidden bg-black aspect-[1007/1024]"
        aria-roledescription="carousel"
        aria-label={t('hero.carouselLabel')}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
        }}
      >
        {heroSlides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={t(`hero.slides.${slide.altKey}`)}
            className={cn(
              'absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none',
              index === active
                ? 'opacity-100 animate-hero-ken-burns motion-reduce:animate-none'
                : 'opacity-0',
            )}
            style={index === active ? { animationDuration: `${SLIDE_INTERVAL_MS}ms` } : undefined}
            draggable={false}
            aria-hidden={index !== active}
          />
        ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.25)_100%)]" />

        {slideCount > 1 && (
          <>
            <button
              type="button"
              aria-label={t('hero.prevSlide')}
              onClick={goPrev}
              className="absolute left-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-black/60 hover:text-white group-hover:opacity-100 max-[640px]:hidden"
            >
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label={t('hero.nextSlide')}
              onClick={goNext}
              className="absolute right-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-black/60 hover:text-white group-hover:opacity-100 max-[640px]:hidden"
            >
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={t('hero.goToSlide', { number: index + 1 })}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => goTo(index)}
                  className={cn(
                    'relative overflow-hidden rounded-full transition-all duration-300',
                    index === active
                      ? 'h-1.5 w-7 bg-white/20'
                      : 'size-1.5 bg-white/40 hover:bg-white/65',
                  )}
                >
                  {index === active && (
                    <span
                      key={`progress-${active}`}
                      className="absolute inset-y-0 left-0 rounded-full bg-primary motion-reduce:w-full motion-reduce:animate-none animate-hero-progress"
                      style={{ animationDuration: `${SLIDE_INTERVAL_MS}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="bg-background py-[clamp(40px,5vw,64px)]">
        <div className={cn(
          container,
          'flex items-center justify-between gap-[clamp(24px,4vw,64px)] max-[900px]:flex-col max-[900px]:items-start',
        )}>
          <h1 className="max-w-[720px] flex-1 text-[clamp(28px,3.8vw,48px)] font-extrabold leading-[1.12] tracking-tight">
            {t('hero.title')}
          </h1>
          <div className="flex shrink-0 flex-wrap justify-end gap-3 max-[900px]:w-full max-[900px]:justify-start max-[480px]:w-full max-[480px]:flex-col">
            <CtaLink href="/support#contact" className="max-[480px]:w-full max-[480px]:justify-center">
              {t('common.becomeCreator')}
            </CtaLink>
            <CtaLink href="/platforms" variant="outline" className="max-[480px]:w-full max-[480px]:justify-center">
              {t('common.exploreEcosystem')}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
