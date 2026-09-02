import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit, Manrope } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Visões do Rio — diferentes ideias, melhores futuros',
  description:
    'Visões do Rio nasce para ampliar narrativas, conectar territórios e fortalecer iniciativas que transformam realidades em todo o estado do Rio de Janeiro.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0b0b07',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${manrope.variable}`}>
      <body className="bg-ink antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
