import Logo from './Logo'
import { useI18n } from '../i18n/I18nContext'
import { cn } from '@/lib/utils'

export default function BrandBanner({ showText = false }) {
  const { t } = useI18n()

  return (
    <section className="overflow-hidden border-t border-border bg-background" aria-label="Mr.FOX">
      <div
        className={cn(
          'w-full px-[clamp(16px,2.5vw,24px)] text-center',
          showText ? 'py-[clamp(36px,5vw,64px)]' : 'py-[clamp(28px,4vw,48px)]',
        )}
      >
        {showText && (
          <div className="mx-auto mb-[clamp(32px,4vw,48px)] max-w-[720px] space-y-5">
            <p className="text-[clamp(18px,2.4vw,22px)] font-semibold leading-[1.45] tracking-tight text-foreground">
              {t('brandBanner.intro')}
            </p>
            <p className="mx-auto max-w-[640px] text-[clamp(15px,1.8vw,17px)] leading-[1.8] text-muted-foreground">
              {t('brandBanner.body')}
            </p>
            {t('brandBanner.outro') && (
              <p className="mx-auto max-w-[640px] border-t border-white/8 pt-5 text-[clamp(15px,1.8vw,17px)] font-medium leading-[1.8] text-foreground/90">
                {t('brandBanner.outro')}
              </p>
            )}
            <div className="mx-auto h-px w-16 bg-primary/40" aria-hidden="true" />
          </div>
        )}
        <Logo variant="banner" />
      </div>
    </section>
  )
}
