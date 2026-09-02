'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const REGIONS = [
  { key: 'noroeste', name: 'Noroeste Fluminense', color: '#7fcfbb', points: '80.50,0.00 73.83,0.63 70.83,3.16 71.67,6.33 68.33,15.82 67.50,28.16 65.00,32.91 68.17,37.66 69.67,43.99 74.67,37.97 77.83,29.75 79.67,27.53 80.83,28.80 84.00,23.10 83.67,18.99 86.50,14.56 80.00,8.86' },
  { key: 'norte', name: 'Norte Fluminense', color: '#f5b400', points: '98.17,17.72 86.67,14.56 84.00,18.67 84.17,23.10 80.83,29.11 79.67,27.85 77.83,30.06 75.17,36.71 74.67,43.99 80.17,45.89 79.83,52.22 77.83,56.01 75.33,54.11 68.00,65.19 68.33,68.67 77.83,68.99 83.50,61.39 95.83,52.53 97.50,45.89 95.50,26.90' },
  { key: 'centro', name: 'Centro Fluminense', color: '#854491', points: '80.33,47.47 73.83,43.99 74.67,38.29 69.67,44.30 67.33,36.71 62.17,41.46 62.50,43.99 59.67,43.35 45.50,56.96 45.00,52.85 38.83,53.48 40.00,62.03 42.33,65.51 52.67,52.85 56.00,61.08 55.83,68.04 57.67,68.99 57.67,63.61 58.83,62.97 59.83,71.20 64.50,67.09 66.00,68.35 67.00,64.24 69.83,63.61 74.33,56.33 74.17,53.48 78.17,55.38' },
  { key: 'sul', name: 'Sul Fluminense', color: '#8a9101', points: '39.50,54.75 30.00,53.80 19.00,63.92 14.00,62.66 5.33,69.62 10.17,79.43 16.83,77.53 21.00,81.96 18.00,89.87 9.50,93.04 4.67,99.68 11.33,99.68 16.17,95.57 16.33,98.73 20.67,99.68 20.50,95.57 22.00,92.72 26.33,92.72 29.50,85.76 28.83,81.01 30.33,79.75 30.50,69.62 38.83,60.76' },
  { key: 'metro', name: 'Metropolitana do Rio de Janeiro', color: '#006296', points: '62.00,70.89 59.50,70.89 58.83,63.29 57.67,69.30 55.83,68.35 54.83,56.65 52.83,56.33 52.67,53.16 43.17,65.19 43.17,68.04 39.33,59.81 30.67,69.62 30.50,79.43 33.50,75.00 35.17,77.85 32.50,85.44 29.00,86.71 29.33,93.04 26.83,91.46 20.83,99.68 25.00,94.62 29.67,94.30 33.83,99.68 56.17,95.57 55.33,93.35 60.33,85.76 58.00,76.58' },
  { key: 'baixadas', name: 'Baixadas', color: '#de5508', points: '77.17,69.94 69.00,70.57 66.83,66.46 66.17,68.67 64.50,68.35 63.17,70.89 60.33,71.52 58.17,77.22 60.17,80.70 60.50,85.76 58.00,89.24 56.33,95.57 70.50,96.52 73.17,97.78 72.83,94.62 74.00,92.72 73.83,90.19 76.50,86.71 73.83,83.86 73.67,77.85' },
]

export function NetworkMap() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="mapa" style={{ backgroundColor: '#f4e7d2' }}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <Reveal><h2 className="font-display text-4xl font-extrabold leading-[1.05] text-teal sm:text-5xl md:text-6xl text-balance">Uma rede<br />em movimento</h2></Reveal>
          <Reveal delay={0.06}><p className="mt-6 max-w-sm text-base leading-relaxed text-ink/75 md:text-lg">Conectamos territórios, iniciativas e pessoas em todo o estado do Rio de Janeiro para multiplicar impactos e criar novas possibilidades.</p></Reveal>
          <Reveal delay={0.1}><a href="#mapa" className="mt-6 inline-flex max-w-sm items-center gap-2 text-base font-semibold leading-relaxed text-teal transition-colors hover:text-orange">Conheça outras iniciativas no Estado que sonham um Rio diferente <ArrowRight className="h-4 w-4 shrink-0" /></a></Reveal>
        </div>
        <Reveal delay={0.1} className="relative">
          <div className="relative flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:flex-[5]">
              <img src="/images/network-map.png" alt="Mapa das seis mesorregiões do estado do Rio de Janeiro" className="w-full select-none" />
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                {REGIONS.map((region) => (
                  <polygon
                    key={region.key}
                    points={region.points}
                    fill={selected === region.key ? `${region.color}55` : 'transparent'}
                    style={{
                      cursor: 'pointer',
                      pointerEvents: 'all',
                      filter: selected === region.key ? `drop-shadow(0 0 3px ${region.color}) drop-shadow(0 0 7px rgba(11,11,7,.5))` : 'none',
                      transition: 'filter 150ms ease, fill 150ms ease',
                    }}
                    onMouseEnter={() => setSelected(region.key)}
                    onClick={() => setSelected(region.key)}
                    role="button"
                    aria-label={region.name}
                    tabIndex={0}
                  />
                ))}
              </svg>
            </div>

            <div className="w-full shrink-0 self-start rounded-xl bg-white/95 p-2.5 shadow-lg shadow-ink/15 ring-1 ring-ink/5 sm:w-[120px]">
              <ul className="grid grid-cols-2 gap-1 sm:block sm:space-y-1">
                {REGIONS.map((region) => (
                  <li key={region.key}>
                    <button
                      type="button"
                      onMouseEnter={() => setSelected(region.key)}
                      onClick={() => setSelected(region.key)}
                      className={`flex w-full items-center gap-1.5 rounded-md px-1 py-0.5 text-left text-[10px] font-semibold leading-snug transition-colors ${selected === region.key ? 'bg-ink/5 text-ink' : 'text-ink/70 hover:bg-ink/5'}`}
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: region.color }} />
                      {region.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
