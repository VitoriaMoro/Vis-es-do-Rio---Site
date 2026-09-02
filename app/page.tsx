import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { Manifesto } from '@/components/site/manifesto'
import { VideoBlock } from '@/components/site/video-block'
import { NetworkMap } from '@/components/site/network-map'
import { Stories } from '@/components/site/stories'
import { Metrics } from '@/components/site/metrics'
import { Future } from '@/components/site/future'
import { CTA } from '@/components/site/cta'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <main className="bg-cream">
      <SiteHeader />
      <Hero />
      <Manifesto />
      <VideoBlock />
      <NetworkMap />
      <Stories />
      <Metrics />
      <Future />
      <CTA />
      <SiteFooter />
    </main>
  )
}
