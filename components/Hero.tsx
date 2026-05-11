import Image from 'next/image'
import {
  SiRedhat,
  SiKubernetes,
  SiHelm,
  SiGit,
  SiDocker,
  SiTerraform,
  SiAnsible,
} from 'react-icons/si'
import type { Dictionary } from '@/lib/dictionaries'

interface HeroProps {
  dict: Dictionary['hero']
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative lg:min-h-[calc(100vh-3.5rem)] flex items-center py-14 lg:py-20">

      {/* Mobile background photo */}
      <div className="absolute inset-0 lg:hidden overflow-hidden" aria-hidden="true">
        <Image
          src="/photo.png"
          alt=""
          fill
          className="object-cover object-top opacity-15"
          priority
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — content */}
          <div className="space-y-7 lg:space-y-10">

            {/* Stats row */}
            <div className="flex gap-10">
              {dict.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="block text-lg font-bold font-mono leading-none text-neutral-900">
                    {stat.value}
                  </span>
                  <span className="block text-xs text-neutral-600 lg:text-neutral-400 mt-1.5 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Main heading */}
            <h1 className="text-[3.5rem] sm:text-[5.5rem] lg:text-[7rem] font-bold tracking-tight leading-none text-neutral-900">
              {dict.heading}
            </h1>

            {/* Role + tagline */}
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-semibold text-neutral-800">
                {dict.role}
              </p>
              <p className="text-base text-neutral-500 lg:text-neutral-400">
                {dict.tagline}
              </p>
            </div>

            {/* Tech logos */}
            <div className="flex items-center gap-5 flex-wrap">
              <SiRedhat     size={28} color="#EE0000"  title="Red Hat / OpenShift" />
              <SiKubernetes size={28} color="#326CE5"  title="Kubernetes" />
              <SiHelm       size={28} color="#0F1689"  title="Helm" />
              <SiGit        size={28} color="#F05032"  title="Git" />
              <SiDocker     size={28} color="#2496ED"  title="Docker" />
              <SiTerraform  size={28} color="#7B42BC"  title="Terraform" />
              <SiAnsible    size={28} color="#EE0000"  title="Ansible" />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-700 transition-colors duration-150"
              >
                {dict.ctaProjects}
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border border-neutral-400 px-5 py-2.5 text-sm text-neutral-600 hover:border-neutral-600 hover:text-neutral-800 transition-colors duration-150"
              >
                {dict.ctaContact}
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="w-96 h-[30rem] relative overflow-hidden">
              <Image
                src="/photo.png"
                alt="Noubissi Kala Theodore"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral-200 to-transparent" />
              <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-neutral-200 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
