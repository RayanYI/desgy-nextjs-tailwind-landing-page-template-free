import React from 'react'
import { Metadata } from 'next'
import Hero from '@/app/components/Home/Hero'
import Portfolio from '@/app/components/Home/Portfolio'
import Values from '@/app/components/Home/Values'
import Pricing from '@/app/components/Home/Pricing'
import Contact from '@/app/components/Home/Contact'

export const metadata: Metadata = {
  title: 'GoSitePro - Sites Web Performants pour Pros',
  description: 'Votre activité mérite un vrai site professionnel. GoSitePro lance votre site vitrine performant, sécurisé et visible en moins de 7 jours.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <Values />
      <Pricing />
      <Contact />
    </main>
  )
}
