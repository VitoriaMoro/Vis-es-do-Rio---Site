'use client'

import { FormEvent, useState } from 'react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'

export default function ContatoPage() {
  const [sent, setSent] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />
      <section className="bg-olive px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cream/80">Contato</p>
            <h1 className="mt-5 max-w-lg font-display text-5xl font-extrabold leading-[1.02] text-yellow sm:text-6xl">Vamos conversar sobre outros futuros.</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream">Tem uma dúvida, uma ideia ou quer saber mais sobre o Visões do Rio? Escreva para a gente.</p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl bg-cream p-6 shadow-2xl shadow-ink/20 sm:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-ink">Nome<input required name="name" type="text" placeholder="Seu nome" className="rounded-md border border-ink/20 bg-card px-4 py-3 font-normal outline-none transition-shadow placeholder:text-ink/45 focus:ring-2 focus:ring-yellow" /></label>
              <label className="grid gap-2 text-sm font-semibold text-ink">E-mail<input required name="email" type="email" placeholder="voce@email.com" className="rounded-md border border-ink/20 bg-card px-4 py-3 font-normal outline-none transition-shadow placeholder:text-ink/45 focus:ring-2 focus:ring-yellow" /></label>
              <label className="grid gap-2 text-sm font-semibold text-ink">Mensagem<textarea required name="message" rows={5} placeholder="Como podemos ajudar?" className="resize-y rounded-md border border-ink/20 bg-card px-4 py-3 font-normal outline-none transition-shadow placeholder:text-ink/45 focus:ring-2 focus:ring-yellow" /></label>
              <button type="submit" className="rounded-md bg-yellow px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-yellow/90">Enviar mensagem</button>
              {sent && <p role="status" className="text-sm font-medium text-teal">Mensagem preparada. Em breve entraremos em contato.</p>}
            </div>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
