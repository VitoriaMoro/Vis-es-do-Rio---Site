'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './reveal'

const SLIDES = [
  {
    image: '/images/historia-viva-rio.png',
    alt: 'Foto histórica em preto e branco de duas pessoas segurando um cartaz com o logo do Viva Rio',
    badge: 'Sobre o Viva Rio',
    paragraphs: [
      'Fundado em 1993, após as chacinas da Candelária e de Vigário Geral, o Viva Rio surgiu como um movimento voltado à redução da violência e à revitalização do Rio de Janeiro. Tem como referências centrais a redução da violência e das desigualdades e o compromisso com ações que fortaleçam políticas públicas que ampliem direitos e oportunidades para todos.',
    ],
  },
  {
    image: '/images/historia-organizando.png',
    alt: 'Três jovens de costas, abraçados, observando uma comunidade do alto',
    badge: 'Organizando os sonhos',
    paragraphs: [
      'Reuniremos pessoas de diferentes trajetórias para o diálogo e ação conjunta, em uma série de quatro encontros.',
      'A cada edição, dois convidados inspiram os debates e, a partir deles, todos os participantes podem contribuir.',
      'Este apanhado de ideias e propostas será organizado pelo Viva Rio e parceiros e compartilhado com lideranças, instituições e gestores públicos.',
    ],
  },
]

export function Stories() {
  const [index, setIndex] = useState(0)
  const slide = SLIDES[index]
  const nextSlide = SLIDES[(index + 1) % SLIDES.length]

  const go = (delta: number) => setIndex((current) => (current + delta + SLIDES.length) % SLIDES.length)

  return (
    <section id="historias" className="relative overflow-hidden bg-teal">
      <div className="mx-auto max-w-7xl xl:max-w-[1180px] 2xl:max-w-[1040px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mb-10 flex items-center gap-4">
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-yellow">Histórias</h2>
            <div className="h-px flex-1 bg-yellow/40" />
          </div>
        </Reveal>

        <div className="relative">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="História anterior"
            className="absolute -left-1 top-[34%] z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-cream/40 text-cream/80 transition-colors hover:border-yellow hover:text-yellow md:-left-4 md:top-1/2 md:h-9 md:w-9"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>

          <div className="grid items-center gap-8 pl-11 pr-[15%] sm:pr-[12%] md:grid-cols-[0.85fr_1.15fr] md:gap-10 md:pl-14 md:pr-[9%]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <AnimatePresence initial={false}>
                <motion.img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.alt}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="relative">
              <AnimatePresence initial={false}>
                <motion.div
                  key={slide.badge}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40, position: 'absolute' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="top-0 w-full"
                >
                  <span className="inline-block rounded-full border border-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-yellow">{slide.badge}</span>
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-cream/90 md:text-lg">
                    {slide.paragraphs.map((p) => <p key={p}>{p}</p>)}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próxima história"
            className="absolute right-0 top-0 h-full w-[15%] overflow-hidden rounded-l-md sm:w-[12%] md:w-[9%]"
          >
            <img src={nextSlide.image} alt="" className="h-full w-full object-cover opacity-80 transition-opacity hover:opacity-100" />
            <span className="absolute inset-0 bg-gradient-to-r from-teal/70 via-teal/10 to-transparent" />
          </button>

          <div
            aria-hidden
            className="pointer-events-none absolute -right-1 top-[34%] z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-cream/40 text-cream/80 md:-right-4 md:top-1/2 md:h-9 md:w-9"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  )
}
