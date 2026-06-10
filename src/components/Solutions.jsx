import { solutionIds } from '../data/content'
import { useI18n } from '../i18n/I18nContext'
import { container, section, sectionLabel, sectionTitle, sectionSubtitle, card } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function Solutions() {
  const { t } = useI18n()

  return (
    <section className={section} id="solutions">
      <div className={container}>
        <p className={sectionLabel}>{t('solutions.label')}</p>
        <h2 className={sectionTitle}>{t('solutions.title')}</h2>
        <p className={sectionSubtitle}>{t('solutions.subtitle')}</p>

        <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-4 max-[400px]:grid-cols-1">
          {solutionIds.map((id, i) => (
            <div
              key={id}
              className={cn(card, 'flex flex-col overflow-hidden transition-transform hover:-translate-y-0.5 hover:border-white/20')}
            >
              <div className="flex h-40 items-end bg-[radial-gradient(ellipse_at_30%_50%,rgba(242,202,80,0.12)_0%,transparent_70%),linear-gradient(180deg,#141414_0%,#0a0a0a_100%)] p-5">
                <span className="text-5xl font-black leading-none text-white/[0.06]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{t(`solutions.${id}.title`)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(`solutions.${id}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
