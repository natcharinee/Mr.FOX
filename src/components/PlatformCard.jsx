import { Zap } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import PlatformMark from './PlatformMark'
import { goldLink } from '@/lib/layout'
import { cn } from '@/lib/utils'

const gradientHeader =
  'bg-[radial-gradient(ellipse_at_30%_50%,rgba(242,202,80,0.14)_0%,transparent_70%),linear-gradient(180deg,#141414_0%,#0a0a0a_100%)]'

const primaryMarkIds = new Set(['foxy', 'cupe'])

const showcaseThemes = {
  foxy: 'from-[#3d3520] to-[#221e12]',
  cupe: 'from-[#3d2f4a] to-[#241a30]',
  cliq: 'from-[#1e3a5f] to-[#0f2744]',
  himbo: 'from-[#2d3b2d] to-[#1a261a]',
  lesbie: 'from-[#4a2035] to-[#2a1220]',
  tomboi: 'from-[#2a3048] to-[#141828]',
  bargirl: 'from-[#4a2020] to-[#2a1212]',
  silom: 'from-[#1a2a3a] to-[#0c1824]',
  cosplayPlus: 'from-[#3d2848] to-[#1e1028]',
  expatIdols: 'from-[#2a3a48] to-[#0c141c]',
  beautyQueen: 'from-[#4a3020] to-[#1a1008]',
  naksueksa: 'from-[#2a2a35] to-[#15151c]',
}

export default function PlatformCard({
  platform,
  index,
  enhanced = false,
  featured = false,
  variant = 'default',
}) {
  const { t } = useI18n()

  if (variant === 'catalog') {
    const hasPrimaryMark = primaryMarkIds.has(platform.id)

    return (
      <article
        className={cn(
          'group relative flex overflow-hidden rounded-2xl border border-white/8 bg-[#161616] transition-all duration-300',
          'hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_20px_50px_-24px_rgba(242,202,80,0.22)]',
          featured ? 'min-h-[240px] flex-col min-[640px]:flex-row min-[640px]:items-stretch' : 'min-h-[220px] flex-col',
        )}
      >
        {featured && hasPrimaryMark ? (
          <div className="relative flex min-h-[180px] shrink-0 items-center justify-center bg-primary min-[640px]:min-h-0 min-[640px]:w-[44%]">
            <span className="text-7xl font-black leading-none text-black">{platform.name.charAt(0)}</span>
          </div>
        ) : null}

        <div className={cn('flex flex-1 flex-col p-6', featured && 'min-[640px]:justify-center min-[640px]:p-8')}>
          {!(featured && hasPrimaryMark) && (
            <div
              className={cn(
                'mb-5 flex size-11 items-center justify-center overflow-hidden rounded-xl',
                hasPrimaryMark ? 'bg-primary' : 'border border-white/8 bg-[#222222]',
              )}
            >
              <span className={cn('text-base font-extrabold leading-none', hasPrimaryMark ? 'text-black' : 'text-white/90')}>
                {platform.name.charAt(0)}
              </span>
            </div>
          )}

          <h3 className={cn('font-bold tracking-tight text-white', featured ? 'text-2xl' : 'text-lg')}>
            {platform.name}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {t(`platforms.${platform.id}`)}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-white/6 pt-4">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-primary/90">
              {t('ecosystem.connected')}
            </span>
            <Zap className="size-4 fill-primary/90 text-primary/90" strokeWidth={0} />
          </div>
        </div>
      </article>
    )
  }

  if (variant === 'ecosystem') {
    const hasPrimaryMark = primaryMarkIds.has(platform.id)

    return (
      <article
        className={cn(
          'group flex min-h-[220px] flex-col rounded-2xl bg-[#161616] p-6 transition-all duration-200',
          'border border-transparent hover:border-white/15',
        )}
      >
        <div
          className={cn(
            'mb-5 flex size-11 items-center justify-center overflow-hidden rounded-xl',
            hasPrimaryMark ? 'bg-primary' : 'border border-white/8 bg-[#222222]',
          )}
        >
          <span
            className={cn(
              'text-base font-extrabold leading-none',
              hasPrimaryMark ? 'text-black' : 'text-white/90',
            )}
          >
            {platform.name.charAt(0)}
          </span>
        </div>
        <h3 className="text-lg font-bold tracking-tight text-white">{platform.name}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {t(`platformsMarquee.${platform.id}`)}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-primary/90">
            {t('ecosystem.connected')}
          </span>
          <Zap className="size-4 fill-primary/90 text-primary/90" strokeWidth={0} />
        </div>
      </article>
    )
  }

  if (variant === 'showcase') {
    const theme = showcaseThemes[platform.id] ?? 'from-[#1a1a2e] to-[#0f3460]'

    return (
      <article className="flex flex-col">
        <div
          className={cn(
            'relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br',
            theme,
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(242,202,80,0.14),transparent_60%)]" />
          {platform.logo ? (
            <PlatformMark platform={platform} fill cropFrame className="absolute inset-0" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <PlatformMark
                platform={platform}
                preferLetter
                className="size-24 rounded-2xl shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)]"
                letterClassName="text-4xl"
              />
            </div>
          )}
        </div>
        <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight">{platform.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {t(`platforms.${platform.id}`)}
        </p>
        <a href="#" className={cn(goldLink, 'mt-4 inline-flex w-fit items-center gap-1')}>
          {t('common.visitPlatform')}
        </a>
      </article>
    )
  }

  if (!enhanced) {
    return (
      <div
        className={cn(
          'rounded-2xl border border-border bg-[#111111] p-6 transition-all duration-200',
          'hover:-translate-y-0.5 hover:border-primary/25 hover:bg-[#161616]',
        )}
      >
        <PlatformMark
          platform={platform}
          preferLetter
          className="mb-5 size-11 rounded-xl"
          letterClassName="text-lg"
        />
        <h3 className="mb-2 text-lg font-bold tracking-tight">{platform.name}</h3>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          {t(`platforms.${platform.id}`)}
        </p>
        <a href="#" className={cn(goldLink, 'inline-flex items-center gap-1')}>
          {t('common.visitPlatform')}
        </a>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-[#111111] group flex overflow-hidden transition-all duration-300',
        'hover:-translate-y-1 hover:border-primary/30 hover:bg-[#161616] hover:shadow-[0_20px_40px_-20px_rgba(242,202,80,0.2)]',
        featured ? 'flex-col min-[769px]:col-span-2 min-[769px]:flex-row' : 'flex-col',
      )}
    >
      <div
        className={cn(
          'relative shrink-0 overflow-hidden',
          featured && platform.logo
            ? 'min-h-44 w-full bg-[#111111] min-[769px]:min-h-0 min-[769px]:w-72 min-[769px]:self-stretch'
            : cn(
                'flex items-end p-5',
                gradientHeader,
                featured ? 'min-h-36 min-[769px]:min-h-0 min-[769px]:w-52' : 'h-28',
              ),
        )}
      >
        {index != null && (
          <span className="absolute right-4 top-3 z-10 text-5xl font-black leading-none text-white/[0.06] transition-colors group-hover:text-primary/10">
            {String(index).padStart(2, '0')}
          </span>
        )}
        <PlatformMark
          platform={platform}
          fill={featured && Boolean(platform.logo)}
          className={featured && platform.logo ? undefined : featured ? 'size-14' : 'size-12'}
          letterClassName={featured ? 'text-2xl' : 'text-xl'}
        />
      </div>

      <div className={cn('flex flex-1 flex-col p-6', featured && 'min-[769px]:justify-center')}>
        <h3 className={cn('mb-2 font-bold', featured ? 'text-2xl' : 'text-lg')}>{platform.name}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {t(`platforms.${platform.id}`)}
        </p>
        <a href="#" className={cn(goldLink, 'w-fit')}>{t('common.visitPlatform')}</a>
      </div>
    </div>
  )
}
