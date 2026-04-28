import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { getDictionary, isValidLocale, locales } from '@/lib/dictionaries'
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
  const dict = getDictionary(isValidLocale(locale) ? locale : 'en')
  return { title: `${dict.blog.heading} — DevOps Portfolio` }
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  const dict = getDictionary(locale)
  const posts = getAllPosts()

  return (
    <main className="py-16">
      <div className="max-w-3xl mx-auto px-6">

        <div className="mb-14">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            {dict.blog.label}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mt-4">
            {dict.blog.heading}
          </h1>
          <p className="text-neutral-500 mt-3 text-base leading-relaxed">
            {dict.blog.description}
          </p>
        </div>

        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="block group border-t border-neutral-200 py-8 hover:bg-neutral-50 -mx-4 px-4 transition-colors"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-2">
                  <h2 className="text-base font-semibold text-neutral-900 group-hover:text-neutral-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-mono text-neutral-400 whitespace-nowrap pt-0.5">
                  {post.readingTime} min
                </span>
              </div>
              <time className="block mt-3 text-xs font-mono text-neutral-400">
                {new Date(post.date).toLocaleDateString(
                  locale === 'de' ? 'de-DE' : 'en-US',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                )}
              </time>
            </Link>
          ))}
          <div className="border-t border-neutral-200" />
        </div>

      </div>
    </main>
  )
}
