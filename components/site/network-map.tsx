'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const REGIONS = [
  { key: 'noroeste', name: 'Noroeste Fluminense', color: '#7fcfbb', points: '77.96,7.05 71.47,7.59 68.55,9.75 69.37,12.47 66.12,20.59 65.32,31.16 62.88,35.23 65.97,39.30 67.43,44.72 72.29,39.56 75.36,32.52 77.15,30.62 78.28,31.71 81.36,26.83 81.04,23.31 83.79,19.51 77.47,14.63' },
  { key: 'norte', name: 'Norte Fluminense', color: '#f5b400', points: '95.14,22.22 83.96,19.51 81.36,23.03 81.53,26.83 78.28,31.97 77.15,30.90 75.36,32.79 72.77,38.48 72.29,44.72 77.64,46.34 77.31,51.77 75.36,55.01 72.93,53.38 65.80,62.87 66.12,65.85 75.36,66.13 80.88,59.62 92.87,52.03 94.49,46.34 92.54,30.08' },
  { key: 'centro', name: 'Centro Fluminense', color: '#854491', points: '77.79,47.70 71.47,44.72 72.29,39.84 67.43,44.98 65.15,38.48 60.13,42.55 60.45,44.72 57.70,44.17 43.92,55.82 43.44,52.31 37.44,52.84 38.57,60.17 40.84,63.15 50.89,52.31 54.13,59.35 53.97,65.31 55.76,66.13 55.76,61.52 56.88,60.97 57.86,68.02 62.40,64.50 63.86,65.58 64.83,62.06 67.58,61.52 71.96,55.29 71.80,52.84 75.69,54.47' },
  { key: 'sul', name: 'Sul Fluminense', color: '#8a9101', points: '38.09,53.93 28.85,53.12 18.15,61.79 13.29,60.71 4.86,66.67 9.57,75.07 16.04,73.44 20.10,77.23 17.18,84.01 8.91,86.72 4.22,92.41 10.69,92.41 15.40,88.89 15.56,91.60 19.78,92.41 19.61,88.89 21.07,86.45 25.28,86.45 28.36,80.49 27.71,76.42 29.17,75.34 29.34,66.67 37.44,59.08' },
  { key: 'metro', name: 'Metropolitana do Rio de Janeiro', color: '#006296', points: '59.97,67.75 57.54,67.75 56.88,61.25 55.76,66.39 53.97,65.58 53.00,55.56 51.05,55.29 50.89,52.57 41.66,62.87 41.66,65.31 37.92,58.27 29.50,66.67 29.34,75.07 32.25,71.27 33.88,73.71 31.28,80.21 27.88,81.30 28.20,86.72 25.77,85.37 19.93,92.41 23.99,88.08 28.53,87.80 32.57,92.41 54.30,88.89 53.48,86.99 58.34,80.49 56.08,72.63' },
  { key: 'baixadas', name: 'Baixadas', color: '#de5508', points: '74.72,66.94 66.77,67.48 64.66,63.96 64.02,65.85 62.40,65.58 61.11,67.75 58.34,68.29 56.24,73.17 58.19,76.16 58.51,80.49 56.08,83.47 54.45,88.89 68.23,89.70 70.83,90.78 70.50,88.08 71.64,86.45 71.47,84.28 74.07,81.30 71.47,78.86 71.32,73.71' },
]

export function NetworkMap() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="mapa" style={{ backgroundColor: '#f4e7d2' }}>
      <div className="mx-auto grid max-w-7xl lg:max-w-[1180px] xl:max-w-[1080px] 2xl:max-w-[900px] items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <Reveal><h2 className="font-display text-4xl font-extrabold leading-[1.1] text-teal text-balance sm:text-5xl">Uma rede em movimento</h2></Reveal>
          <Reveal delay={0.06}><p className="mt-6 max-w-sm text-base leading-relaxed text-ink/75 md:text-lg">Conectamos territórios, iniciativas e pessoas em todo o estado do Rio de Janeiro para multiplicar impactos e criar novas possibilidades.</p></Reveal>
          <Reveal delay={0.1}><a href="#mapa" className="mt-6 inline-flex max-w-sm items-center gap-2 text-base font-semibold leading-relaxed text-teal transition-colors hover:text-orange">Conheça outras iniciativas no Estado que sonham um Rio diferente <ArrowRight className="h-4 w-4 shrink-0" /></a></Reveal>
        </div>
        <Reveal delay={0.1} className="relative">
          <div className="relative flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:flex-[9]">
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

            <div className="w-full shrink-0 self-start rounded-xl bg-white/95 p-2 shadow-lg shadow-ink/15 ring-1 ring-ink/5 sm:w-[104px]">
              <ul className="grid grid-cols-2 gap-1 sm:block sm:space-y-1">
                {REGIONS.map((region) => (
                  <li key={region.key}>
                    <button
                      type="button"
                      onMouseEnter={() => setSelected(region.key)}
                      onClick={() => setSelected(region.key)}
                      className={`flex w-full items-center gap-1.5 rounded-md px-1 py-0.5 text-left text-[9px] font-semibold leading-snug transition-colors ${selected === region.key ? 'bg-ink/5 text-ink' : 'text-ink/70 hover:bg-ink/5'}`}
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: region.color }} />
                      <span className="min-w-0">{region.name}</span>
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
