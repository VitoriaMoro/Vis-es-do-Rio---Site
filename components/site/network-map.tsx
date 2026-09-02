'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { Reveal } from './reveal'

const GEO_URL = '/geo/rj-municipios.json'
const PROJECTION_CONFIG = { center: [-42.55, -22.25] as [number, number], scale: 9300 }

type Region = { name: string; color: string; center: [number, number] }

const REGIONS: Region[] = [
  { name: 'Noroeste Fluminense', color: '#9ce8dc', center: [-42.08, -21.58] },
  { name: 'Norte Fluminense', color: '#f4f2a9', center: [-41.55, -22.0] },
  { name: 'Centro Fluminense', color: '#e99be1', center: [-42.55, -22.15] },
  { name: 'Baixadas', color: '#f4b7a2', center: [-42.25, -22.7] },
  { name: 'Metropolitana do Rio de Janeiro', color: '#aab8ec', center: [-43.15, -22.75] },
  { name: 'Sul Fluminense', color: '#a9e89f', center: [-43.65, -22.55] },
]

function regionFor([longitude, latitude]: [number, number]) {
  if (latitude > -21.75) return longitude < -42.35 ? REGIONS[0] : REGIONS[1]
  if (longitude > -42.1 && latitude < -22.45) return REGIONS[3]
  if (longitude > -42.95 && latitude > -22.5) return REGIONS[2]
  if (longitude > -43.55 && latitude < -22.35) return REGIONS[4]
  return REGIONS[5]
}

function centroid(geo: { geometry: { coordinates: unknown } }): [number, number] {
  const points: [number, number][] = []
  const collect = (value: unknown): void => {
    if (Array.isArray(value) && value.length >= 2 && typeof value[0] === 'number' && typeof value[1] === 'number') points.push([value[0], value[1]])
    else if (Array.isArray(value)) value.forEach(collect)
  }
  collect(geo.geometry.coordinates)
  if (!points.length) return [-42.55, -22.25]
  return [points.reduce((sum, point) => sum + point[0], 0) / points.length, points.reduce((sum, point) => sum + point[1], 0) / points.length]
}

export function NetworkMap() {
  const [mounted, setMounted] = useState(false)
  const [selected, setSelected] = useState<{ name: string; region: string } | null>(null)
  useEffect(() => setMounted(true), [])
  const regionLabels = useMemo(() => REGIONS, [])

  return (
    <section id="mapa" className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <Reveal><h2 className="font-display text-4xl font-extrabold leading-[1.05] text-teal sm:text-5xl md:text-6xl text-balance">Uma rede<br />em movimento</h2></Reveal>
          <Reveal delay={0.06}><p className="mt-6 max-w-sm text-base leading-relaxed text-ink/75 md:text-lg">Explore as seis mesorregiões do estado e encontre as iniciativas que estão criando novas possibilidades em cada território.</p></Reveal>
          <Reveal delay={0.1}><div className="mt-7 grid max-w-sm grid-cols-2 gap-x-4 gap-y-3">{regionLabels.map((region) => <div key={region.name} className="flex items-center gap-2 text-xs font-semibold text-ink/75"><span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: region.color }} />{region.name}</div>)}</div></Reveal>
          <Reveal delay={0.14}><a href="#mapa" className="mt-7 inline-flex max-w-md items-center gap-2 text-base font-semibold leading-relaxed text-teal transition-colors hover:text-orange">Conheça outras iniciativas no Estado <ArrowRight className="h-4 w-4 shrink-0" /></a></Reveal>
        </div>
        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[25/18] w-full overflow-hidden rounded-2xl bg-[#f8f5df] p-2 shadow-xl shadow-ink/10 md:p-4">
            {mounted && <ComposableMap projection="geoMercator" projectionConfig={PROJECTION_CONFIG} className="h-full w-full" width={800} height={576} style={{ width: '100%', height: '100%' }}>
              <Geographies geography={GEO_URL}>{({ geographies }) => geographies.map((geo) => { const center = centroid(geo); const region = regionFor(center); return <Geography key={geo.rsmKey} geography={geo} fill={region.color} stroke="#6b6c57" strokeWidth={0.55} onClick={() => setSelected({ name: geo.properties?.name ?? 'Município', region: region.name })} style={{ default: { outline: 'none' }, hover: { fill: '#f2c21a', outline: 'none', cursor: 'pointer' }, pressed: { fill: '#e1502b', outline: 'none' } }} /> })}</Geographies>
              {REGIONS.map((region) => <Marker key={region.name} coordinates={region.center}><text textAnchor="middle" fill="#0b0b07" style={{ fontFamily: 'var(--font-manrope)', fontSize: 13, fontWeight: 800, pointerEvents: 'none' }}>{region.name.split(' ').map((word, index) => <tspan key={word} x="0" dy={index ? 15 : 0}>{word}</tspan>)}</text></Marker>)}
            </ComposableMap>}
            <div className="absolute right-3 top-3 w-56 rounded-xl bg-white/95 p-4 shadow-xl shadow-ink/15 ring-1 ring-ink/5 md:right-6 md:top-6"><div className="flex items-center gap-1.5 text-teal"><MapPin className="h-4 w-4" /><span className="text-sm font-semibold">{selected?.name ?? 'Explore o mapa'}</span></div><p className="mt-2 text-sm font-bold text-ink">{selected?.region ?? 'Mesorregiões do Rio'}</p><p className="mt-1 text-xs leading-relaxed text-ink/60">Clique em um município para conhecer seu território e suas iniciativas.</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
