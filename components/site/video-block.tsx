import { Reveal } from './reveal'

const VIDEO_SRC = '/videos/visoes-do-rio.mp4'

export function VideoBlock() {
  return (
    <section className="bg-yellow">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <Reveal>
          <div className="overflow-hidden rounded-sm bg-ink ring-1 ring-ink/10 shadow-xl shadow-ink/15">
            {VIDEO_SRC ? (
              <video className="aspect-video w-full object-cover" controls preload="metadata" poster="/images/historia-mural.png">
                <source src={VIDEO_SRC} type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            ) : (
              <div className="relative flex aspect-video items-end bg-ink p-6">
                <img src="/images/historia-mural.png" alt="Mural colorido em uma comunidade do Rio de Janeiro" className="absolute inset-0 h-full w-full object-cover opacity-55" />
                <p className="relative max-w-xs text-sm leading-relaxed text-cream">O vídeo do projeto será publicado aqui em breve.</p>
              </div>
            )}
          </div>
        </Reveal>

        <div>
          <Reveal><h2 className="font-display text-4xl font-extrabold leading-[1.05] text-teal sm:text-5xl md:text-6xl">Diferentes olhares,<br />outros caminhos,<br />melhores futuros</h2></Reveal>
          <Reveal delay={0.08}><p className="mt-6 max-w-md text-base leading-relaxed text-ink/80 md:text-lg">Assista ao vídeo, inspire-se e vem com a gente</p></Reveal>
        </div>
      </div>
    </section>
  )
}
