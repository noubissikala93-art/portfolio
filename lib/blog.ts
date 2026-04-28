import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogMeta {
  slug: string
  title: string
  date: string
  readingTime: number
  summary: string
}

export interface BlogPost extends BlogMeta {
  content: string
}

const postsDir = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogMeta[] {
  const files = fs.readdirSync(postsDir)
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        readingTime: data.readingTime as number,
        summary: data.summary as string,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): BlogPost {
  const filePath = path.join(postsDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    readingTime: data.readingTime as number,
    summary: data.summary as string,
    content,
  }
}
