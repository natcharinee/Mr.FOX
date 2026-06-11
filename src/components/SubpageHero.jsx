import { container } from '@/lib/layout'
import { cn } from '@/lib/utils'

export default function SubpageHero({
  titleLine1,
  titleLine2,
  subtitleLine1,
  subtitleLine2,
  meta,
  metaIcon: MetaIcon,
  stats = [],
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(242,202,80,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_0%,rgba(242,202,80,0.08),transparent_50%)]" />

      <div className={cn(container, 'relative pt-[clamp(120px,14vw,180px)] pb-[clamp(48px,6vw,80px)]')}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[820px]">
            <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight text-[#f5f0e6]">
              {titleLine1}
              {titleLine2 ? (
                <>
                  <br />
                  <span className="whitespace-nowrap">{titleLine2}</span>
                </>
              ) : null}
            </h1>
            {(subtitleLine1 || subtitleLine2) && (
              <p className="mt-4 max-w-[640px] text-[clamp(15px,1.8vw,18px)] leading-relaxed text-muted-foreground">
                {subtitleLine1}
                {subtitleLine2 ? (
                  <>
                    <br />
                    <span className="whitespace-nowrap">{subtitleLine2}</span>
                  </>
                ) : null}
              </p>
            )}
          </div>

          {meta && MetaIcon ? (
            <div className="flex shrink-0 items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 lg:pb-1">
              <span>{meta}</span>
              <span className="flex size-5 items-center justify-center rounded border border-white/20 bg-white/5">
                <MetaIcon className="size-3" strokeWidth={2} />
              </span>
            </div>
          ) : null}
        </div>

        {stats.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-4 min-[481px]:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat}
                className="rounded-2xl border border-border bg-card/80 px-6 py-5 backdrop-blur-sm transition-colors hover:border-primary/20 hover:bg-[#1a1a1a]"
              >
                <p className="text-[clamp(20px,2.5vw,28px)] font-extrabold tracking-tight text-primary">
                  {stat}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
