import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const THEMES = [
  { label: 'Cultura', icon: '/elementos/gaivota-orange.png' },
  { label: 'Educação', icon: '/elementos/livro-teal.png' },
  { label: 'Direitos\nHumanos', icon: '/elementos/megafone-olive.png' },
  { label: 'Juventude', icon: '/elementos/rolima-teal.png' },
  { label: 'Meio\nAmbiente', icon: '/elementos/pipa-orange.png' },
  { label: 'Segurança', icon: '/elementos/barco-teal.png' },
]

export function Future() {
  return (
    <section id="futuro" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.12em] text-orange">Visões para o futuro</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-extrabold leading-[1.1] text-olive sm:text-4xl md:text-5xl">
                Múltiplas perspectivas,<br />objetivos comuns: um<br />Rio de encontros
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/70">
                Cada voz expressa o que considera mais<br />importante, mas todos os temas importam<br />para construir o Rio que sonhamos.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <a href="#footer" className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-orange transition-colors hover:text-teal">
                Explorar temas <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-6 lg:pr-6 xl:pr-16 2xl:pr-28">
              {THEMES.map((t) => (
                <li key={t.label}>
                  <a
                    href="#footer"
                    aria-label={`Explorar temas de ${t.label.replace('\n', ' ')}`}
                    className="group flex flex-col items-center rounded-lg py-1 text-center outline-none transition-colors focus-visible:ring-2 focus-visible:ring-orange"
                  >
                    <div className="flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
                      <img src={t.icon} alt="" aria-hidden="true" className="max-h-full max-w-full object-contain" />
                    </div>
                    <span className="mt-4 whitespace-pre-line text-sm font-medium leading-tight text-ink/80 transition-colors group-hover:text-orange">{t.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
