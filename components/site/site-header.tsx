'use client'

import { useEffect, useState } from 'react'

const NAV = [
  { label: 'O projeto', href: '#manifesto' },
  { label: 'Iniciativas', href: '#futuro' },
  { label: 'Mapa do Rio', href: '#mapa' },
  { label: 'Histórias', href: '#historias' },
  { label: 'Parceiros', href: '#footer' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink/85 backdrop-blur-md py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 xl:px-12 2xl:px-20">
        <a href="/#top" className="flex items-center" aria-label="Visões do Rio — início"><img src="/elementos/gaivota-yellow.png" alt="Visões do Rio" className="h-8 w-auto md:h-9" /></a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">{NAV.map((item) => <a key={item.label} href={item.href} className="text-sm font-medium text-cream/90 transition-colors hover:text-yellow">{item.label}</a>)}</nav>
        <div className="flex items-center gap-3"><a href="/contato" className="hidden rounded-full bg-yellow px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-yellow/90 sm:inline-block">Contato</a><button type="button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"><span className={`h-0.5 w-6 bg-cream transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} /><span className={`h-0.5 w-6 bg-cream transition-opacity ${open ? 'opacity-0' : ''}`} /><span className={`h-0.5 w-6 bg-cream transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} /></button></div>
      </div>
      {open && <nav className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 border-t border-cream/10 px-5 pb-4 pt-3 lg:hidden" aria-label="Navegação móvel">{NAV.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 text-base font-medium text-cream/90 hover:bg-cream/10 hover:text-yellow">{item.label}</a>)}<a href="/contato" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 text-base font-semibold text-yellow hover:bg-cream/10">Contato</a></nav>}
    </header>
  )
}
