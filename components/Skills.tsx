import type { Dictionary } from '@/lib/dictionaries'

interface SkillsProps {
  dict: Dictionary['skills']
}

export default function Skills({ dict }: SkillsProps) {
  return (
    <section id="skills" className="py-24 border-t border-neutral-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">

          <div className="pt-1">
            <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              {dict.label}
            </h2>
          </div>

          <div className="space-y-5">
            {dict.groups.map((group) => (
              <div
                key={group.category}
                className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-1 sm:gap-6 items-baseline"
              >
                <span className="text-xs text-neutral-400">{group.category}</span>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {group.items.map((skill) => (
                    <span key={skill} className="text-sm font-mono text-neutral-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
