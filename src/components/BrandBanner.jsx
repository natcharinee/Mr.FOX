import Logo from './Logo'

export default function BrandBanner() {
  return (
    <section className="overflow-hidden border-t border-border bg-background" aria-label="Mr.FOX">
      <div className="w-full px-[clamp(16px,2.5vw,24px)] py-[clamp(28px,4vw,48px)]">
        <Logo variant="banner" />
      </div>
    </section>
  )
}
