import { HERO_ASPECT_RATIO } from '../data/content'
import { useFoxyCreators } from '../hooks/useFoxyCreators'
import { useI18n } from '../i18n/I18nContext'
import { CtaLink } from './CtaButton'
import CoverFlowCarousel from './CoverFlowCarousel'
import { container, section, sectionTitle } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function SuccessStories() {
  const { t } = useI18n()
  const { creators } = useFoxyCreators()

  return (
    <section className={cn(section, 'overflow-x-clip')} id="stories">
      <div className={container}>
        <h2 className={cn(sectionTitle, 'text-center')}>{t('stories.title')}</h2>
      </div>

      <div className="mt-12">
        <CoverFlowCarousel
          items={creators}
          getKey={(story) => story.id}
          stageHeight="min(460px, 84vw)"
          stageClassName="max-w-[1400px]"
          slideClassName="w-[min(360px,66vw)]"
          spacing={272}
          wrap
          maxVisible={2}
          renderSlide={({ item: story, isActive, onSelect }) => (
            <button
              type="button"
              onClick={onSelect}
              className={cn(
                'flex w-full flex-col items-center',
                isActive ? 'cursor-default' : 'cursor-pointer',
              )}
              aria-current={isActive ? 'true' : undefined}
              aria-label={story.name}
            >
              <div
                className={cn(
                  'w-full overflow-hidden bg-[#0a0a0a] shadow-[0_32px_64px_-24px_rgba(0,0,0,0.9)]',
                  isActive && 'ring-1 ring-white/15',
                )}
                style={{ aspectRatio: HERO_ASPECT_RATIO }}
              >
                {story.image ? (
                  <img
                    src={story.image}
                    alt=""
                    className="size-full object-cover object-[50%_22%]"
                    draggable="false"
                    loading="eager"
                  />
                ) : (
                  <div
                    className={cn(
                      'flex size-full items-end justify-center bg-gradient-to-br p-6',
                      story.gradient ?? 'from-primary/25 to-[#1a1a1a]',
                    )}
                  >
                    <span className="text-6xl font-black text-white/15">
                      {story.name.charAt(story.name.length - 1)}
                    </span>
                  </div>
                )}
              </div>
              <h3
                className={cn(
                  'mt-4 text-center font-bold tracking-tight transition-colors',
                  isActive ? 'text-lg text-white' : 'text-sm text-white/55',
                )}
              >
                {story.name}
              </h3>
              <p
                className={cn(
                  'mt-1 text-center text-sm transition-all',
                  isActive ? 'text-muted-foreground opacity-100' : 'h-0 opacity-0',
                )}
              >
                {story.role}
              </p>
            </button>
          )}
        />
      </div>

      <div className="relative mt-10 overflow-hidden py-[clamp(40px,6vw,64px)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_100%,rgba(242,202,80,0.14),transparent_65%)]"
          aria-hidden="true"
        />
        <div className={cn(container, 'relative text-center')}>
          <h3 className="mx-auto max-w-[1200px] text-[clamp(22px,3.5vw,48px)] font-extrabold leading-[1.18] tracking-tight text-balance min-[769px]:whitespace-nowrap">
            {t('stories.ctaHeadline')}
          </h3>
          <p className="mx-auto mt-5 max-w-[640px] text-[clamp(15px,2vw,18px)] leading-relaxed text-white/75">
            {t('stories.ctaSublineBefore')}
            <span className="font-semibold text-primary">{t('stories.ctaSublineHighlight')}</span>
            {t('stories.ctaSublineAfter')}
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink href="/support#contact">{t('stories.ctaButton')}</CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
