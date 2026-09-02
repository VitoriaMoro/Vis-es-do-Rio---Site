import { Home, Building2 } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          {/* partners */}
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            <span className="text-sm text-cream/50">Uma iniciativa</span>

            <div className="flex items-center gap-2.5 text-cream">
              <Home className="h-6 w-6" strokeWidth={1.5} />
              <span className="font-display text-xl font-extrabold tracking-tight">VIVA RIO</span>
            </div>

            <div className="flex items-center gap-2.5 text-cream/90">
              <Building2 className="h-6 w-6" strokeWidth={1.5} />
              <span className="font-display text-sm font-semibold uppercase leading-tight tracking-wide">
                Casa
                <br />
                Fluminense
              </span>
            </div>
          </div>

          {/* main logo */}
          <img
            src="/logos/horizontal-1.png"
            alt="Visões do Rio"
            className="h-12 w-auto md:h-14"
          />
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/10 pt-8 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Visões do Rio. Todos os direitos reservados.</p>
          <p>diferentes ideias, melhores futuros</p>
        </div>
      </div>
    </footer>
  )
}
