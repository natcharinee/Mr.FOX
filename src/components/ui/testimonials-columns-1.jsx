import { Fragment } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export function TestimonialsColumn({ className, testimonials, duration = 10 }) {
  return (
    <div className={cn('h-full overflow-hidden', className)}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[0, 1].map((pass) => (
          <Fragment key={pass}>
            {testimonials.map(({ text, image, name, role }) => (
              <div
                key={`${pass}-${name}`}
                className="w-full max-w-xs rounded-2xl border border-white/10 bg-[#161616] p-6 shadow-[0_20px_50px_-24px_rgba(242,202,80,0.12)]"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="size-10 shrink-0 rounded-full object-cover ring-2 ring-primary/20"
                    draggable={false}
                  />
                  <div className="min-w-0 flex flex-col">
                    <span className="truncate text-sm font-semibold tracking-tight text-white">{name}</span>
                    <span className="truncate text-sm text-muted-foreground">{role}</span>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  )
}
