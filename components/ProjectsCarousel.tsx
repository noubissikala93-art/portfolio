'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import type { ProjectBase } from '@/data/projects'
import type { Dictionary } from '@/types/dictionary'

const PER_PAGE = 4

interface Props {
  projects: ProjectBase[]
  projectsData: Dictionary['projectsData']
  locale: string
  detailsLink: string
}

export default function ProjectsCarousel({ projects, projectsData, locale, detailsLink }: Props) {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(projects.length / PER_PAGE)
  const visible = projects.slice(page * PER_PAGE, (page + 1) * PER_PAGE)

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visible.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            content={projectsData[project.slug]}
            locale={locale}
            detailsLink={detailsLink}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm font-mono text-neutral-600 font-medium">
            {page + 1} / {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setPage(p => p - 1)}
              disabled={page === 0}
              aria-label="Page précédente"
              className="border border-neutral-500 w-10 h-10 flex items-center justify-center text-xl text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 hover:bg-neutral-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ‹
            </button>
            <button
              onClick={() => setPage(p => p + 1)}
              disabled={page === totalPages - 1}
              aria-label="Page suivante"
              className="border border-neutral-500 w-10 h-10 flex items-center justify-center text-xl text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 hover:bg-neutral-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
