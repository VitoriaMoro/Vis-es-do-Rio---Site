'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[clamp(640px,82vh,860px)] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img src="/images/hero-basquete.png" alt="Jovem jogando basquete em uma quadra na comunidade, com o Rio de Janeiro ao fundo" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/40" />
      </div>

      <motion.img src="/elementos/gaivota-yellow.png" alt="" aria-hidden="true" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 0.95, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="pointer-events-none absolute bottom-0 right-0 w-[42%] max-w-2xl translate-y-6 select-none" />

      <div className="relative z-10 mx-auto flex min-h-[clamp(640px,82vh,860px)] max-w-7xl flex-col justify-center px-6 pb-20 pt-28 sm:px-10 md:px-16 lg:px-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
          <h1 className="font-display text-yellow">
            <span className="block text-6xl font-semibold tracking-tight sm:text-7xl md:text-8xl">Visões</span>
            <span className="mt-1 flex items-end gap-3 leading-[0.78] md:gap-4">
              <span className="text-4xl font-light tracking-tight sm:text-5xl md:text-6xl">do</span>
              <span className="text-7xl font-extrabold tracking-tight sm:text-8xl md:text-9xl">RIO</span>
            </span>
          </h1>

          <div className="mt-8 flex items-center gap-4 text-cream">
            <span className="text-xl font-light sm:text-2xl">Uma iniciativa</span>
            <span className="h-8 w-px bg-cream/40" aria-hidden="true" />
            <span className="font-display text-2xl font-extrabold tracking-tight">VIVARIO</span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#manifesto" className="rounded-md bg-yellow px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-yellow/90">Conheça o projeto</a>
            <a href="#futuro" className="rounded-md border border-cream/60 px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:border-cream hover:bg-cream/10">Ver iniciativas</a>
          </div>
        </motion.div>
      </div>

      <motion.a href="#manifesto" aria-label="Rolar para baixo" className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/70" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
        <ChevronDown className="h-6 w-6" strokeWidth={1.5} />
      </motion.a>
    </section>
  )
}
