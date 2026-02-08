import type { ReactNode } from 'react'

import { Inter, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

import { cn } from '@/lib/utils'

import './globals.css'

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: '%s | Craft Agency',
    default: 'Craft - End-to-End AI Product Agency'
  },
  description:
    'Craft is an end-to-end AI agency that handles UX design, front-end, back-end, data pipelines, product strategy, and design strategy for ambitious companies.',
  robots: 'index,follow',
  keywords: [
    'AI agency',
    'product development',
    'UX design',
    'front-end development',
    'back-end development',
    'data pipelines',
    'product strategy',
    'design strategy',
    'AI integration',
    'full-stack agency',
    'digital product studio',
    'end-to-end development'
  ],
  icons: {
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: '/favicon/android-chrome-192x192.png',
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`),
  openGraph: {
    title: {
      template: '%s | Craft Agency',
      default: 'Craft - End-to-End AI Product Agency'
    },
    description:
      'Craft is an end-to-end AI agency offering UX design, front-end, back-end, data pipelines, product strategy, and design strategy for ambitious companies.',
    type: 'website',
    siteName: 'Craft Agency',
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`,
    images: [
      {
        url: '/images/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Craft - End-to-End AI Product Agency'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | Craft Agency',
      default: 'Craft - End-to-End AI Product Agency'
    },
    description:
      'Craft is an end-to-end AI agency offering UX design, front-end, back-end, data pipelines, product strategy, and design strategy for ambitious companies.'
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(
        interSans.variable,
        geistMono.variable,
        'relative flex min-h-full w-full scroll-smooth antialiased'
      )}
      suppressHydrationWarning
    >
      <body className='relative flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
