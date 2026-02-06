import { Manrope } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import Aoscompo from '@/utils/aos'
const font = Manrope({ subsets: ['latin'] })


export const metadata: Metadata = {
  metadataBase: new URL('https://gositepro.fr'),
  title: {
    default: 'GoSitePro - Sites Web Performants pour Pros',
    template: '%s | GoSitePro'
  },
  description: 'Votre activité mérite un vrai site professionnel. GoSitePro lance votre site vitrine performant, sécurisé et visible en moins de 7 jours.',
  keywords: ['création site web', 'site vitrine', 'agence web', 'site internet professionnel', 'création site internet', 'développeur web', 'nextjs', 'seo'],
  authors: [{ name: 'GoSitePro' }],
  creator: 'GoSitePro',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://gositepro.fr',
    title: 'GoSitePro - Sites Web Performants pour Pros',
    description: 'Votre activité mérite un vrai site professionnel. GoSitePro lance votre site vitrine performant, sécurisé et visible en moins de 7 jours.',
    siteName: 'GoSitePro',
    images: [
      {
        url: '/images/hero/hero-mockup.png',
        width: 1200,
        height: 630,
        alt: 'GoSitePro - Agence Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoSitePro - Sites Web Performants pour Pros',
    description: 'Votre activité mérite un vrai site professionnel. GoSitePro lance votre site vitrine performant, sécurisé et visible en moins de 7 jours.',
    images: ['/images/hero/hero-mockup.png'],
    creator: '@gositepro',
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
}

import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-pt-[20px] scroll-smooth'>
      <body className={`${font.className}`}>
        <Aoscompo>
          <Header />
          {children}
          <Footer />
        </Aoscompo>
        <Toaster position='bottom-right' />
      </body>
    </html>
  )
}
