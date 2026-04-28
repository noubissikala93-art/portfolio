import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import { getDictionary, isValidLocale, locales } from '@/lib/dictionaries'
import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'de' ? 'DevOps Portfolio' : 'DevOps Portfolio',
    description:
      locale === 'de'
        ? 'DevOps & Platform Engineer — Kubernetes, GitOps, Secrets Management'
        : 'DevOps & Platform Engineer — Kubernetes, GitOps, Secrets Management',
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params

  if (!isValidLocale(locale)) notFound()

  const dict = getDictionary(locale)

  const heroDict = {
    ...dict.hero,
    stats: dict.hero.stats.map((stat, i) =>
      i === 0 ? { ...stat, value: String(projects.length) } : stat
    ),
  }

  return (
    <main>
      <Hero dict={heroDict} />
      <About dict={dict.about} />
      <Projects dict={dict.projects} projectsData={dict.projectsData} locale={locale} />
      <Skills dict={dict.skills} />
      <Contact dict={dict.contact} />
    </main>
  )
}
