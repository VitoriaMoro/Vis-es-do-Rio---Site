import { Reveal } from './reveal'

export function Stories() {
  return (
    <section id="historias" className="bg-teal">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal><img src="/images/historia-sala.png" alt="Pessoas reunidas em uma sala para conversar" className="aspect-[4/3] w-full rounded-md object-cover" /></Reveal>
          <div><Reveal><h2 className="font-display text-4xl font-extrabold leading-[1.05] text-yellow sm:text-5xl md:text-6xl">Organizando os sonhos</h2></Reveal><Reveal delay={0.08}><div className="mt-7 space-y-5 text-base leading-relaxed text-cream/90 md:text-lg"><p>Reuniremos pessoas de diferentes trajetórias para o diálogo e ação conjunta, em uma série de quatro encontros.</p><p>A cada edição, dois convidados inspiram os debates e, a partir deles, todos os participantes podem contribuir.</p><p>Este apanhado de ideias e propostas será organizado pelo Viva Rio e parceiros e compartilhado com lideranças, instituições e gestores públicos.</p></div></Reveal></div>
        </div>
        <Reveal delay={0.12}><div className="mt-14 border-t border-cream/25 pt-8"><h3 className="font-display text-2xl font-bold text-yellow">Sobre o Viva Rio</h3><p className="mt-4 max-w-4xl text-base leading-relaxed text-cream/90">Fundado em 1993, após as chacinas da Candelária e de Vigário Geral, o Viva Rio surgiu como um movimento voltado à redução da violência e à revitalização do Rio de Janeiro. Tem como referências centrais a redução da violência e das desigualdades e o compromisso com ações que fortaleçam políticas públicas que ampliem direitos e oportunidades para todos.</p></div></Reveal>
      </div>
    </section>
  )
}
