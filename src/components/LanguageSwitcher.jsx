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
            'h-9 gap-1 rounded-full border-white/15 bg-white/[0.05] px-2.5 text-foreground hover:border-white/25 hover:bg-white/10 data-[state=open]:border-primary/40 data-[state=open]:bg-white/10',
            className,
          )}
          aria-label={`Language: ${current.label}`}
        >
          <FlagIcon code={current.code} className="size-[22px] h-[15px] overflow-hidden rounded-sm shadow-[0_0_0_1px_rgba(0,0,0,0.15)] [&_svg]:block [&_svg]:size-full" />
          <ChevronDown className="size-2.5 text-muted-foreground/80" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={cn('min-w-0 p-1.5', inOverlay && 'z-[250]')}
      >
        {languages.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLocale(code)}
            aria-label={label}
            className={cn(
              'cursor-pointer justify-center px-2.5 py-2',
              locale === code && 'bg-primary/12 text-primary focus:bg-primary/16 focus:text-primary',
            )}
          >
            <FlagIcon code={code} className="size-[22px] h-[15px] overflow-hidden rounded-sm shadow-[0_0_0_1px_rgba(0,0,0,0.15)] [&_svg]:block [&_svg]:size-full" />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
