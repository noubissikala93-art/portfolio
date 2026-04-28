import Navbar from '@/components/Navbar'
import { getDictionary, isValidLocale, locales } from '@/lib/dictionaries'
import { notFound } from 'next/navigation'

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!isValidLocale(locale)) notFound()

  const dict = getDictionary(locale)

  return (
    <>
      <Navbar dict={dict.nav} locale={locale} />
      {children}
      <footer className="border-t border-neutral-300 py-8 mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-mono text-neutral-400">
            © {new Date().getFullYear()} — {dict.footer}
          </p>
        </div>
      </footer>
    </>
  )
}
