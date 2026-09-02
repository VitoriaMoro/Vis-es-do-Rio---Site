'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Todos os 4 banners sao imagens prontas fornecidas pelo cliente, com
// titulo, tagline e botoes ja desenhados na propria imagem. Nao recortar
// nem sobrepor texto adicional por cima - a imagem e a fonte da verdade.
// As caixas dos botoes (ctaPrimary/ctaSecondary) foram medidas por
// amostragem de pixel em cada imagem, pois o recorte/proporcao varia entre
// elas - so servem para manter os links clicaveis por cima do desenho.
const SLIDES = [
  {
    src: '/images/hero-basquete.png',
    alt: 'Visões do Rio - jovem jogando basquete em uma quadra na comunidade, com o Rio de Janeiro ao fundo',
    ctaPrimary: { top: '82.8%', bottom: '8.3%', left: '8.7%', right: '76.9%' },
    ctaSecondary: { top: '82.8%', bottom: '8.3%', left: '25.5%', right: '64%' },
  },
  {
    src: '/images/hero-danca.png',
    alt: 'Visões do Rio - grupo de amigos dançando e comemorando em uma rua de comunidade',
    ctaPrimary: { top: '81.8%', bottom: '10.6%', left: '12.1%', right: '69.9%' },
    ctaSecondary: { top: '81.8%', bottom: '10.6%', left: '31.5%', right: '52%' },
  },
  {
    src: '/images/hero-comunidade.png',
    alt: 'Visões do Rio - três crianças de costas observando a vista de uma comunidade no Rio de Janeiro',
    ctaPrimary: { top: '81.8%', bottom: '10.6%', left: '12.1%', right: '69.9%' },
    ctaSecondary: { top: '81.8%', bottom: '10.6%', left: '31.5%', right: '52%' },
  },
  {
    src: '/images/hero-abordagem.png',
    alt: 'Visões do Rio - policial cumprimentando uma criança com um aperto de mão',
    ctaPrimary: { top: '81.8%', bottom: '10.6%', left: '12.1%', right: '69.9%' },
    ctaSecondary: { top: '81.8%', bottom: '10.6%', left: '31.5%', right: '52%' },
  },
]

const SLIDE_DURATION = 6000

export function Hero() {
  const [active, setActive] = useState(0)
  const slide = SLIDES[active]

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="top" className="relative min-h-[clamp(640px,82vh,860px)] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover object-left"
          />
        </AnimatePresence>
      </div>

      {/* Links reais e acessiveis sobre os botoes ja desenhados em cada banner */}
      <a href="#manifesto" aria-label="Conheça o projeto" className="absolute z-10" style={slide.ctaPrimary} />
      <a href="#futuro" aria-label="Ver iniciativas" className="absolute z-10" style={slide.ctaSecondary} />

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2" role="tablist" aria-label="Selecionar imagem de destaque">
        {SLIDES.map((s, index) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Mostrar imagem ${index + 1} de ${SLIDES.length}`}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === active ? 'w-6 bg-yellow' : 'w-2 bg-cream/50 hover:bg-cream/80'}`}
          />
        ))}
      </div>
    </section>
  )
}
