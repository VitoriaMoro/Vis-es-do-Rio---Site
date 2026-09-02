import { Reveal } from './reveal'

const METRICS = [
  { value: '04', label: 'encontros' },
  { value: '08', label: 'pessoas que\ninspiram o papo' },
  { value: '50', label: 'protagonistas' },
  { value: '', label: 'Ideias organizadas\ne direcionadas' },
]

export function Metrics() {
  return (
    <section className="bg-orange">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 text-center sm:gap-x-14">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08} className={`flex flex-col items-center ${i > 0 ? 'border-l border-yellow/50 pl-10 sm:pl-14' : ''}`}>
              {m.value && <p className="font-display text-5xl font-extrabold leading-none text-yellow sm:text-6xl md:text-7xl">{m.value}</p>}
              <p className={`max-w-[11rem] whitespace-pre-line text-sm font-medium leading-tight text-cream/95 md:text-base ${m.value ? 'mt-3' : ''}`}>{m.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
