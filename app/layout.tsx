import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Two Free - Open Source Robot Survival Game',
  description: 'Play Two Free, an open-source survival game where you control one of the last free robots. Collect energy diamonds underground while avoiding missile strikes. Available on web and mobile.',
  keywords: 'Two Free, robot game, survival game, open source game, browser game, HTML5 game, free game, indie game, underground game, missile dodge game',
  authors: [{ name: 'Tuhaj' }],
  openGraph: {
    title: 'Two Free - Open Source Robot Survival Game',
    description: 'Control one of the last free robots. Collect energy diamonds underground while avoiding missile strikes in this open-source survival game.',
    url: 'http://twofree.pl/',
    siteName: 'Two Free',
    images: [
      {
        url: 'http://twofree.pl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Two Free Game Screenshot',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Two Free - Open Source Robot Survival Game',
    description: 'Control one of the last free robots. Collect energy diamonds underground while avoiding missile strikes.',
    images: ['http://twofree.pl/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('http://twofree.pl'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0891b2" />
      </head>
      <body>{children}</body>
    </html>
  )
}
