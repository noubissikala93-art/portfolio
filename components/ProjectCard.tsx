import Link from 'next/link'
import type { ProjectBase } from '@/data/projects'
import type { ProjectContent } from '@/lib/dictionaries'

interface ProjectCardProps {
  project: ProjectBase
  content: ProjectContent
  locale: string
  detailsLink: string
}

export default function ProjectCard({ project, content, locale, detailsLink }: ProjectCardProps) {
  return (
    <Link href={`/${locale}/projects/${project.slug}`} className="group block h-full">
      <div className="h-full flex flex-col bg-white border border-neutral-300 p-6 hover:border-neutral-900 transition-colors duration-150">

        {/* Title */}
        <h3 className="font-semibold text-neutral-900 leading-snug mb-3">
          {content.title}
        </h3>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono bg-neutral-100 text-neutral-600 px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Summary */}
        <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-6">
          {content.summary}
        </p>

        {/* Link */}
        <span className="text-xs font-mono text-neutral-400 group-hover:text-neutral-900 transition-colors">
          {detailsLink}
        </span>

      </div>
    </Link>
  )
}
