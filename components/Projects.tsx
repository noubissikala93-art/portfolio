import { projects } from '@/data/projects'
import ProjectsCarousel from '@/components/ProjectsCarousel'
import type { Dictionary } from '@/lib/dictionaries'

interface ProjectsProps {
  dict: Dictionary['projects']
  projectsData: Dictionary['projectsData']
  locale: string
}

export default function Projects({ dict, projectsData, locale }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 border-t border-neutral-300">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-10">
          {dict.label}
        </h2>

        <ProjectsCarousel
          projects={projects}
          projectsData={projectsData}
          locale={locale}
          detailsLink={dict.detailsLink}
        />

      </div>
    </section>
  )
}
