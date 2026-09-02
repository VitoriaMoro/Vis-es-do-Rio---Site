'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Os 3 banners sao imagens prontas fornecidas pelo cliente, com
// titulo, tagline e botoes ja desenhados na propria imagem. Nao recortar
// nem sobrepor texto adicional por cima - a imagem e a fonte da verdade.
// As caixas dos botoes (ctaPrimary/ctaSecondary) foram medidas por
// amostragem de pixel em cada imagem (em % das dimensoes da propria
// imagem) - usadas so para manter os links clicaveis por cima do desenho.
type Box = { top: number; bottom: number; left: number; right: number }

const CTA_PRIMARY: Box = { top: 81.4, bottom: 10.5, left: 9.9, right: 75.3 }
const CTA_SECONDARY: Box = { top: 81.4, bottom: 10.8, left: 26.4, right: 61.3 }

const SLIDES = [
  {
    src: '/images/hero-danca.png',
    alt: 'Visões do Rio - grupo de amigos dançando e comemorando em uma rua de comunidade',
    naturalSize: { w: 1920, h: 816 },
    ctaPrimary: CTA_PRIMARY,
    ctaSecondary: CTA_SECONDARY,
  },
  {
    src: '/images/hero-comunidade.png',
    alt: 'Visões do Rio - três crianças de costas observando a vista de uma comunidade no Rio de Janeiro',
    naturalSize: { w: 1920, h: 816 },
    ctaPrimary: CTA_PRIMARY,
    ctaSecondary: CTA_SECONDARY,
  },
  {
    src: '/images/hero-abordagem.png',
    alt: 'Visões do Rio - policial cumprimentando uma criança com um aperto de mão',
    naturalSize: { w: 1920, h: 816 },
    ctaPrimary: CTA_PRIMARY,
    ctaSecondary: CTA_SECONDARY,
  },
  {
    src: '/images/hero-basquete.png',
    alt: 'Visões do Rio - jovem jogando basquete em uma quadra na comunidade, com o Rio de Janeiro ao fundo',
    naturalSize: { w: 1080, h: 398 },
    ctaPrimary: CTA_PRIMARY,
    ctaSecondary: CTA_SECONDARY,
  },
]

const SLIDE_DURATION = 6000

// As imagens nao compartilham a mesma proporcao, entao o corte automatico
// do object-fit:cover (object-position "left center") desloca cada uma de
// um jeito diferente dependendo do tamanho da tela. Para os links ficarem
// sempre em cima dos botoes desenhados, calculamos aqui a posicao real em
// pixels (replicando a matematica do cover) toda vez que o container ou a
// imagem mudam de tamanho, em vez de confiar em uma porcentagem fixa.
function coverBoxStyle(container: { w: number; h: number }, natural: { w: number; h: number }, box: Box): CSSProperties {
  if (!container.w || !container.h || !natural.w || !natural.h) return { opacity: 0 }
  const scale = Math.max(container.w / natural.w, container.h / natural.h)
  const displayW = natural.w * scale
  const displayH = natural.h * scale
  const offsetX = 0 // object-position: left
  const offsetY = (container.h - displayH) / 2 // object-position: center (vertical)

  const leftPx = offsetX + (box.left / 100) * displayW
  const rightPx = offsetX + ((100 - box.right) / 100) * displayW
  const topPx = offsetY + (box.top / 100) * displayH
  const bottomPx = offsetY + ((100 - box.bottom) / 100) * displayH

  return {
    left: `${(leftPx / container.w) * 100}%`,
    right: `${100 - (rightPx / container.w) * 100}%`,
    top: `${(topPx / container.h) * 100}%`,
    bottom: `${100 - (bottomPx / container.h) * 100}%`,
  }
}

export function Hero() {
  const [active, setActive] = useState(0)
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 })
  const sectionRef = useRef<HTMLElement | null>(null)
  const slide = SLIDES[active]

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const update = () => setContainerSize({ w: el.clientWidth, h: el.clientHeight })
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="top" className="relative min-h-[clamp(640px,82vh,860px)] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover object-left"
          />
        </AnimatePresence>
      </div>

      {/* Links reais e acessiveis sobre os botoes ja desenhados em cada banner */}
      <a href="#manifesto" aria-label="Conheça o projeto" className="absolute z-10" style={coverBoxStyle(containerSize, slide.naturalSize, slide.ctaPrimary)} />
      <a href="#futuro" aria-label="Ver iniciativas" className="absolute z-10" style={coverBoxStyle(containerSize, slide.naturalSize, slide.ctaSecondary)} />

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
