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
  { code: 'th', label: 'ไทย' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
]

const flagClass =
  'h-4 w-6 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/25 [&_svg]:block [&_svg]:h-full [&_svg]:w-full'

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
            'group h-9 gap-1.5 rounded-full border-white/15 bg-white/[0.05] px-2.5 text-foreground hover:border-white/25 hover:bg-white/10 data-[state=open]:border-primary/40 data-[state=open]:bg-white/10',
            className,
          )}
          aria-label={`Language: ${current.label}`}
        >
          <FlagIcon code={current.code} className={flagClass} />
          <ChevronDown className="size-3 text-muted-foreground/80 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className={cn(
          'z-[110] w-auto min-w-0 border border-white/10 bg-[#141414] p-1.5 shadow-xl',
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
                'flex cursor-pointer items-center justify-center rounded-lg p-2.5 outline-none',
                isActive
                  ? 'bg-primary/10 ring-1 ring-primary/30 focus:bg-primary/14'
                  : 'focus:bg-white/[0.06]',
              )}
            >
              <FlagIcon code={code} className={flagClass} />
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
