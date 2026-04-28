import type { Dictionary, Locale } from '@/types/dictionary'
import de from '@/dictionaries/de'

export type { Dictionary, Locale, ProjectContent } from '@/types/dictionary'

export const locales: Locale[] = ['de']

const dicts: Record<Locale, Dictionary> = { de }

export function getDictionary(_locale: string): Dictionary {
  return de
}

export function isValidLocale(locale: string): locale is Locale {
  return locale === 'de'
}
