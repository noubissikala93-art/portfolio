'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const locales = ['en', 'de'] as const

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname()

  const getLocalePath = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    return segments.join('/')
  }

  return (
    <div className="flex items-center gap-2 text-xs font-mono">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span className="text-neutral-300">|</span>}
          <Link
            href={getLocalePath(l)}
            className={
              locale === l
                ? 'text-neutral-900 font-semibold'
                : 'text-neutral-400 hover:text-neutral-700 transition-colors'
            }
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  )
}
