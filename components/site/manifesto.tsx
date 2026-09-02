import { Reveal } from './reveal'

export function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-olive">
      <img src="/elementos/gaivota-yellow.png" alt="" aria-hidden="true" className="pointer-events-none absolute -left-16 top-0 w-[38%] max-w-md -translate-y-4 -scale-x-100 select-none opacity-90" />
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="ml-auto max-w-3xl lg:pl-24">
          <Reveal><h2 className="font-display text-4xl font-extrabold leading-[1.05] text-yellow text-balance sm:text-5xl md:text-6xl">O Rio é maior do que aquilo que se vê.</h2></Reveal>
          <Reveal delay={0.1}><div className="mt-8 space-y-6 text-lg leading-relaxed text-cream md:text-xl"><p>Visões do Rio surge da vontade de renovar a capacidade de sonhar com outros horizontes para o Rio de Janeiro.</p><p>Um espaço onde todos são protagonistas, em que os encontros e a construção coletiva apontem novos caminhos é a nossa proposta.</p><p className="font-display text-2xl font-bold text-yellow">Bora sonhar e voar juntos?</p></div></Reveal>
        </div>
      </div>
    </section>
  )
}
