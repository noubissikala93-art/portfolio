import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPost } from '@/lib/blog'
import { getDictionary, isValidLocale, locales } from '@/lib/dictionaries'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return locales.flatMap((locale) =>
    posts.map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPost(slug)
    return { title: `${post.title} — Application Management` }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params

  if (!isValidLocale(locale)) notFound()

  const dict = getDictionary(locale)

  let post
  try {
    post = getPost(slug)
  } catch {
    notFound()
  }

  return (
    <main className="py-16">
      <div className="max-w-3xl mx-auto px-6">

        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-neutral-900 transition-colors mb-14"
        >
          {dict.blog.back}
        </Link>

        <article>
          <header className="mb-12 space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
              <time>
                {new Date(post.date).toLocaleDateString(
                  locale === 'de' ? 'de-DE' : 'en-US',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                )}
              </time>
              <span>·</span>
              <span>{post.readingTime} min</span>
            </div>
            <p className="text-neutral-500 text-base leading-relaxed pl-4 border-l-2 border-neutral-300">
              {post.summary}
            </p>
          </header>

          <div className="prose prose-neutral max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </article>

      </div>
    </main>
  )
}
