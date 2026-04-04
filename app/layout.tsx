import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Dee's Scents - Luxury Fragrances",
  description: 'Discover luxury, long-lasting fragrances that define you. Premium scents for every mood and moment.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/dee.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/dee.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/dee.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/dee.jpeg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1410' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
