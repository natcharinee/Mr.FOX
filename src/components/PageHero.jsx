import { container, sectionLabel, sectionTitle, sectionSubtitle } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function PageHero({ label, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(242,202,80,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_0%,rgba(242,202,80,0.08),transparent_50%)]" />

      <div className={cn(container, 'relative pt-[clamp(120px,14vw,180px)] pb-[clamp(48px,6vw,80px)]')}>
        <p className={sectionLabel}>{label}</p>
        <h1 className={cn(sectionTitle, 'max-w-[900px]')}>{title}</h1>
        {subtitle && <p className={cn(sectionSubtitle, 'max-w-[640px]')}>{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
