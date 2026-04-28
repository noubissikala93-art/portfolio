'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionaries'

interface NavbarProps {
  dict: Dictionary['nav']
  locale: string
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const anchorLinks = [
    { label: dict.about, href: '#about' },
    { label: dict.projects, href: '#projects' },
    { label: dict.skills, href: '#skills' },
    { label: dict.contact, href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-300">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="text-sm font-semibold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors"
        >
          Noubissi Kala Theodore
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {anchorLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href={`/${locale}/blog`}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {dict.blog}
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-xl text-neutral-500 hover:text-neutral-900 transition-colors w-8 h-8 flex items-center justify-center"
          aria-label="Toggle navigation"
        >
          {open ? '✕' : '≡'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-neutral-200 bg-white">
          <ul className="max-w-5xl mx-auto px-6 py-5 flex flex-col gap-5">
            {anchorLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href={`/${locale}/blog`}
                onClick={() => setOpen(false)}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {dict.blog}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
