import { useI18n } from '../i18n/I18nContext'
import PlatformMark from './PlatformMark'
import { card, goldLink } from '@/lib/layout'
import { cn } from '@/lib/utils'

const gradientHeader =
  'bg-[radial-gradient(ellipse_at_30%_50%,rgba(242,202,80,0.14)_0%,transparent_70%),linear-gradient(180deg,#141414_0%,#0a0a0a_100%)]'

export default function PlatformCard({ platform, index, enhanced = false, featured = false }) {
  const { t } = useI18n()

  if (!enhanced) {
    return (
      <div
        className={cn(
          card,
          'p-7 transition-transform hover:-translate-y-0.5 hover:border-primary/30 hover:bg-[#1a1a1a]',
        )}
      >
        <PlatformMark platform={platform} preferLetter className="mb-4 size-11" letterClassName="text-lg" />
        <h3 className="mb-2 text-lg font-bold">{platform.name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {t(`platforms.${platform.id}`)}
        </p>
        <a href="#" className={goldLink}>{t('common.visitPlatform')}</a>
      </div>
    )
  }

  return (
    <div
      className={cn(
        card,
        'group flex overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(242,202,80,0.25)]',
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
