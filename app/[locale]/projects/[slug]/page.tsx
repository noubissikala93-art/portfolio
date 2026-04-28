import { projects } from '@/data/projects'
import { getDictionary, isValidLocale, locales } from '@/lib/dictionaries'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isValidLocale(locale)) return {}
  const dict = getDictionary(locale)
  const content = dict.projectsData[slug]
  if (!content) return {}
  return { title: `${content.title} — DevOps Portfolio` }
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params

  if (!isValidLocale(locale)) notFound()

  const dict = getDictionary(locale)
  const project = projects.find((p) => p.slug === slug)
  const content = dict.projectsData[slug]

  if (!project || !content) notFound()

  return (
    <main className="py-16">
      <div className="max-w-3xl mx-auto px-6 bg-white border border-neutral-300 p-10 sm:p-14">

        {/* Back */}
        <Link
          href={`/${locale}#projects`}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-neutral-900 transition-colors mb-14"
        >
          {dict.detail.back}
        </Link>

        {/* Header */}
        <div className="mb-10 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            {content.title}
          </h1>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Summary callout */}
        <p className="text-neutral-500 text-base leading-relaxed mb-14 pl-4 border-l-2 border-neutral-300">
          {content.summary}
        </p>

        {/* Sections */}
        <div className="space-y-12">

          <div>
            <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
              {dict.detail.problem}
            </h2>
            <p className="text-neutral-700 leading-relaxed">{content.problem}</p>
          </div>

          <div className="pt-2 border-t border-neutral-200">
            <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
              {dict.detail.solution}
            </h2>
            <p className="text-neutral-700 leading-relaxed">{content.solution}</p>
          </div>

          <div className="pt-2 border-t border-neutral-200">
            <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
              {dict.detail.outcome}
            </h2>
            <p className="text-neutral-700 leading-relaxed">{content.outcome}</p>
          </div>

          <div className="pt-2 border-t border-neutral-200">
            <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-5">
              {dict.detail.implementation}
            </h2>
            <ul className="space-y-3">
              {content.details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-sm text-neutral-600 leading-relaxed"
                >
                  <span className="font-mono text-neutral-400 shrink-0 mt-0.5">—</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </main>
  )
}
