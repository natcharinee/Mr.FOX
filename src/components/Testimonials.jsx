import { motion } from 'motion/react'
import { testimonials as testimonialItems } from '../data/testimonials'
import { useI18n } from '../i18n/I18nContext'
import { TestimonialsColumn } from './ui/testimonials-columns-1'
import { container } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function Testimonials() {
  const { t } = useI18n()

  const testimonials = testimonialItems.map((item) => ({
    image: item.image,
    text: t(`testimonials.${item.textKey}`),
    name: t(`testimonials.${item.nameKey}`),
    role: t(`testimonials.${item.roleKey}`),
  }))

  const firstColumn = testimonials.slice(0, 3)
  const secondColumn = testimonials.slice(3, 6)
  const thirdColumn = testimonials.slice(6, 9)

  return (
    <div className={cn(container, 'relative mt-12')}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-[540px] flex-col items-center justify-center text-center"
      >
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
          {t('testimonials.label')}
        </span>
        <h3 className="mt-5 text-[clamp(24px,3.5vw,40px)] font-extrabold tracking-tight text-balance">
          {t('testimonials.title')}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t('testimonials.subtitle')}
        </p>
      </motion.div>

      <div className="mx-auto mt-10 flex max-h-[min(740px,70vh)] justify-center gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] sm:gap-6">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
      </div>
    </div>
  )
}
