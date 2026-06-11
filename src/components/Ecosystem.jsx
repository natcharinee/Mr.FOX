import { Link } from 'react-router-dom'
import { platforms, PLATFORM_PREVIEW_COUNT } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import PlatformCard from './PlatformCard'
import { Button } from '@/components/ui/button'
import {
  container,
  section,
  sectionLabel,
  sectionTitle,
  sectionSubtitle,
} from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function Ecosystem() {
  const { t } = useI18n()
  const previewPlatforms = platforms.slice(0, PLATFORM_PREVIEW_COUNT)

  return (
    <section className={cn(section, 'overflow-hidden')} id="ecosystem">
      <div className={container}>
        <p className={sectionLabel}>{t('ecosystem.label')}</p>
        <h2 className={cn(sectionTitle, 'max-w-[900px]')}>
          {t('ecosystem.titleLine1')}
          <br />
          <span className="whitespace-nowrap">{t('ecosystem.titleLine2')}</span>
        </h2>
        <p className={cn(sectionSubtitle, 'max-w-[720px] leading-relaxed')}>
          {t('ecosystem.subtitleLine1')}
          <br />
          <span className="whitespace-nowrap">{t('ecosystem.subtitleLine2')}</span>
        </p>

        <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
          {previewPlatforms.map((p) => (
            <PlatformCard key={p.id} platform={p} />
          ))}
        </div>

        {platforms.length > PLATFORM_PREVIEW_COUNT && (
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              className="h-auto rounded-full px-7 py-3.5 text-[15px] font-semibold hover:-translate-y-px"
            >
              <Link to="/platforms">{t('ecosystem.viewAll')}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
