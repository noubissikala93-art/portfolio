export interface ProjectContent {
  title: string
  summary: string
  problem: string
  solution: string
  outcome: string
  details: string[]
}

export interface Dictionary {
  nav: {
    about: string
    projects: string
    skills: string
    contact: string
    blog: string
  }
  hero: {
    stats: { value: string; label: string }[]
    heading: string
    role: string
    tagline: string
    ctaProjects: string
    ctaContact: string
  }
  about: {
    label: string
    paragraphs: string[]
  }
  projects: {
    label: string
    detailsLink: string
  }
  projectsData: Record<string, ProjectContent>
  skills: {
    label: string
    groups: { category: string; items: string[] }[]
  }
  contact: {
    label: string
    availability: string
    links: { label: string; href: string; display: string }[]
  }
  detail: {
    back: string
    problem: string
    solution: string
    outcome: string
    implementation: string
  }
  blog: {
    label: string
    heading: string
    description: string
    back: string
  }
  footer: string
}

export type Locale = 'de'
