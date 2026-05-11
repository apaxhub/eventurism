import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    default: 'Eventurism — Event Management & Tour Packages in Chennai',
    template: '%s | Eventurism Chennai',
  },
  description:
    "Chennai's leading event management and tour operator since 2011. Rated 4.8★ with 212 Justdial reviews. Corporate events, team outings, holiday packages, hotel & flight bookings.",
  keywords: ['event management Chennai', 'tour packages Chennai', 'travel agency Tamil Nadu'],
  openGraph: {
    title: 'Eventurism — Event Management & Tour Packages in Chennai',
    description: "Chennai's #1 event & tour management company. 4.8★ rated.",
    siteName: 'Eventurism',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
