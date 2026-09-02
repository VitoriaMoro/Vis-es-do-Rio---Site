import { Reveal } from './reveal'

const METRICS = [
  { value: '04', label: 'encontros' },
  { value: '08', label: 'pessoas que\ninspiram o papo' },
  { value: '50', label: 'protagonistas' },
  { value: '', label: 'Ideias organizadas\ne direcionadas' },
]

export function Metrics() {
  return <section className="bg-orange"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20"><div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">{METRICS.map((m, i) => <Reveal key={m.label} delay={i * 0.08} className={`px-4 text-center md:px-8 ${i > 0 ? 'md:border-l md:border-cream/30' : ''} ${i % 2 === 1 ? 'border-l border-cream/30 md:border-l' : ''}`}><p className="min-h-14 font-display text-5xl font-extrabold leading-none text-yellow sm:text-6xl md:text-7xl">{m.value}</p><p className="mt-3 whitespace-pre-line text-sm font-medium leading-tight text-cream/95 md:text-base">{m.label}</p></Reveal>)}</div></div></section>
}
