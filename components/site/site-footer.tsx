export function SiteFooter() {
  return (
    <footer id="footer" className="bg-ink">
      <div className="mx-auto max-w-7xl xl:max-w-[1180px] 2xl:max-w-[1040px] px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          {/* partners */}
          <div className="flex flex-wrap items-center gap-x-14 gap-y-6 sm:gap-x-20">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-yellow">Uma iniciativa</span>
              <img src="/logos/partner-vivario.png" alt="Viva Rio" className="h-6 w-auto md:h-7" />
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-sm font-semibold text-yellow">Apoio</span>
              <div className="flex items-center gap-6 sm:gap-8">
                <img src="/logos/partner-iser.png" alt="ISER" className="h-8 w-auto md:h-9" />
                <img src="/logos/partner-casa-fluminense.png" alt="Casa Fluminense" className="h-8 w-auto md:h-9" />
              </div>
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
