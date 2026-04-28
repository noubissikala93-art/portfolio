import type { Dictionary } from '@/lib/dictionaries'

interface AboutProps {
  dict: Dictionary['about']
}

export default function About({ dict }: AboutProps) {
  return (
    <section id="about" className="py-24 border-t border-neutral-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">

          <div className="pt-1">
            <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              {dict.label}
            </h2>
          </div>

          <div className="space-y-4 max-w-2xl">
            {dict.paragraphs.map((p, i) => (
              <p key={i} className="text-neutral-700 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
