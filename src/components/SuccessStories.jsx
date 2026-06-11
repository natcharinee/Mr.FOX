import { HERO_ASPECT_RATIO } from '../data/content'
import { useFoxyCreators } from '../hooks/useFoxyCreators'
import { useI18n } from '../i18n/I18nContext'
import { CtaLink } from './CtaButton'
import PanoramaCarousel from './PanoramaCarousel'
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

      <div className="relative mx-auto mt-12 max-w-[1400px] overflow-hidden rounded-[28px] border border-primary/15 bg-gradient-to-b from-primary/[0.05] via-white/[0.02] to-transparent px-4 py-10 sm:px-8 sm:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <PanoramaCarousel
          items={creators}
          getKey={(story) => story.id}
          stageClassName="max-w-none"
          stageHeight="min(460px, 84vw)"
          slideClassName="w-[min(280px,54vw)]"
          spacing={280}
          wrap
          maxVisible={3}
          renderSlide={({ item: story, isActive, onSelect }) => (
            <button
              type="button"
              onClick={onSelect}
              className={cn(
                'flex w-full flex-col items-center rounded-2xl border p-3 transition-all duration-500',
                isActive
                  ? 'cursor-default border-primary/30 bg-primary/[0.06] shadow-[0_20px_50px_-24px_rgba(242,202,80,0.35)]'
                  : 'cursor-pointer border-white/8 bg-white/[0.02] hover:border-primary/20',
              )}
              aria-current={isActive ? 'true' : undefined}
              aria-label={story.name}
            >
              <div
                className={cn(
                  'w-full overflow-hidden bg-[#0a0a0a]',
                  'border transition-colors duration-500',
                  isActive
                    ? 'border-primary/25 shadow-[inset_0_0_0_1px_rgba(242,202,80,0.08)]'
                    : 'border-white/10',
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
              <div
                className={cn(
                  'mt-2 space-y-1 text-center text-xs transition-all',
                  isActive ? 'opacity-100' : 'h-0 opacity-0',
                )}
              >
                <p className="text-white/55">
                  <span className="font-semibold text-primary">{story.followersLabel}</span>{' '}
                  {t('stories.followers')}
                </p>
                <p className="text-white/55">
                  {t('stories.monthlyIncome')}{' '}
                  <span className="font-semibold text-primary">{story.monthlyIncomeLabel}</span>
                </p>
              </div>
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
