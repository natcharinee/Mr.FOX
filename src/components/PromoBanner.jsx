import { useI18n } from '../i18n/I18nContext'
import { container } from '@/lib/layout'

export default function PromoBanner() {
  const { t } = useI18n()

  return (
    <section className="border-t border-border py-[clamp(48px,6vw,80px)]">
      <div className={container}>
        <img
          src="/images/promo-banner.png"
          alt={t('promo.imageAlt')}
          className="block w-full"
          draggable="false"
        />
      </div>
    </section>
  )
}
