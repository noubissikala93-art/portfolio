import type { Dictionary } from '@/lib/dictionaries'

interface ContactProps {
  dict: Dictionary['contact']
}

export default function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="py-24 border-t border-neutral-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">

          <div className="pt-1">
            <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              {dict.label}
            </h2>
          </div>

          <div className="space-y-7">
            <p className="text-sm text-neutral-500">
              {dict.availability}
            </p>

            <div className="space-y-3">
              {dict.links.map((link) => (
                <div key={link.label} className="flex items-baseline gap-5">
                  <span className="text-xs font-mono text-neutral-400 w-16 shrink-0">
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-700 hover:text-neutral-900 underline-offset-4 hover:underline transition-colors"
                  >
                    {link.display}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
