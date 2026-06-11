import { Link } from 'react-router-dom'
import { Layers } from 'lucide-react'
import { platforms } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import PlatformCard from './PlatformCard'
import { Button } from '@/components/ui/button'
import { container, section } from '@/lib/layout'
import { cn } from '@/lib/utils'

const ECOSYSTEM_HOME_PREVIEW = 4

export default function Ecosystem() {
  const { t } = useI18n()
  const previewPlatforms = platforms.slice(0, ECOSYSTEM_HOME_PREVIEW)

  return (
    <section className={cn(section, 'overflow-hidden')} id="ecosystem">
      <div className={container}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px]">
            <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight text-[#f5f0e6]">
              {t('ecosystem.titleLine1')}
              <br />
              <span className="whitespace-nowrap">{t('ecosystem.titleLine2')}</span>
            </h2>
            <p className="mt-4 max-w-[640px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-muted-foreground">
              {t('ecosystem.subtitleLine1')}
              <br />
              <span className="whitespace-nowrap">{t('ecosystem.subtitleLine2')}</span>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 lg:pb-1">
            <span>{t('ecosystem.meta')}</span>
            <span className="flex size-5 items-center justify-center rounded border border-white/20 bg-white/5">
              <Layers className="size-3" strokeWidth={2} />
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previewPlatforms.map((p) => (
            <PlatformCard key={p.id} platform={p} variant="ecosystem" />
          ))}
        </div>

        {platforms.length > ECOSYSTEM_HOME_PREVIEW && (
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              className="h-auto rounded-full px-8 py-3.5 text-[15px] font-semibold hover:-translate-y-px"
            >
              <Link to="/platforms">{t('ecosystem.viewAll')}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
