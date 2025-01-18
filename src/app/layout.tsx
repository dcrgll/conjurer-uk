import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

import './globals.css'

import Footer from '@/components/footer'
import { GoogleTagManager } from '@/components/google-tag-manager'
import Header from '@/components/header'
import Providers from '@/components/providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <GoogleTagManager />
        <Providers>
          <div className="container mx-auto max-w-6xl px-2">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    default: 'Conjurer – UK Riff Music.',
    template: '%s | Conjurer - UK Riff Music'
  },
  keywords: [
    'Conjurer',
    'UK metal',
    'Heavy metal',
    'Post-metal',
    'Sludge metal',
    'Progressive metal',
    'Black metal',
    'Death metal',
    'Metalcore',
    'Hardcore',
    'Live performances',
    'Music videos',
    'Album releases',
    'Tour dates',
    'Merchandise',
    'Guitar riffs',
    'British metal',
    'New wave of British heavy metal'
  ],
  description: 'UK RIFF MUSIC NOW SIGNED TO NUCLEAR BLAST RECORDS',
  creator: 'cargill.dev',
  openGraph: {
    title: 'Conjurer - UK Riff Music',
    description: 'UK RIFF MUSIC NOW SIGNED TO NUCLEAR BLAST RECORDS',
    url: 'https://www.conjureruk.com',
    siteName: 'Conjurer - UK Riff Music'
  },
  twitter: {
    title: 'Conjurer - UK Riff Music',
    description: 'UK RIFF MUSIC NOW SIGNED TO NUCLEAR BLAST RECORDS',
    creator: '@conjureruk',
    card: 'summary_large_image',
    siteId: '85074832',
    images: ['https://www.conjureruk.com/static/img/banner.png']
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://www.conjureruk.com')
}
