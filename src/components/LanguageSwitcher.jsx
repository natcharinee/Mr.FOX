import { ChevronDown } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import FlagIcon from './FlagIcon'

const languages = [
  { code: 'th', label: 'ภาษาไทย' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
]

const flagClass =
  'h-[17px] w-[25px] overflow-hidden rounded-[4px] ring-1 ring-white/12 shadow-[0_1px_2px_rgba(0,0,0,0.35)] [&_svg]:block [&_svg]:h-full [&_svg]:w-full [&_svg]:object-cover'

function FlagSlot({ code }) {
  return (
    <span className="flex w-7 shrink-0 items-center justify-center">
      <FlagIcon code={code} className={flagClass} />
    </span>
  )
}

export default function LanguageSwitcher({ className = '', inOverlay = false }) {
  const { locale, setLocale } = useI18n()
  const current = languages.find((lang) => lang.code === locale) ?? languages[0]

  return (
    <DropdownMenu modal={!inOverlay}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            'group h-9 items-center gap-2 rounded-full border-white/15 bg-white/[0.05] py-0 pl-3 pr-2.5 text-foreground hover:border-white/25 hover:bg-white/10 data-[state=open]:border-primary/40 data-[state=open]:bg-white/10',
            className,
          )}
          aria-label={`Language: ${current.label}`}
        >
          <FlagSlot code={current.code} />
          <span className="text-[13px] font-semibold leading-none tracking-tight">{current.label}</span>
          <ChevronDown className="ml-0.5 size-3 shrink-0 text-muted-foreground/80 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className={cn(
          'z-[110] min-w-[10.5rem] border border-white/10 bg-[#141414] p-1.5 shadow-xl',
          inOverlay && 'z-[250]',
        )}
      >
        {languages.map(({ code, label }) => {
          const isActive = locale === code
          return (
            <DropdownMenuItem
              key={code}
              onClick={() => setLocale(code)}
              aria-label={label}
              className={cn(
                'flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2.5 outline-none',
                isActive
                  ? 'bg-primary/10 ring-1 ring-primary/30 focus:bg-primary/14'
                  : 'focus:bg-white/[0.06]',
              )}
            >
              <FlagSlot code={code} />
              <span className="text-[13px] font-semibold leading-none tracking-tight">{label}</span>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
