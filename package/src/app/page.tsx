import React from 'react'
import { Metadata } from 'next'
import Hero from '@/app/components/Home/Hero'
import TechStack from '@/app/components/Home/TechStack'
import Portfolio from '@/app/components/Home/Portfolio'
import Values from '@/app/components/Home/Values'
import Pricing from '@/app/components/Home/Pricing'
import FAQ from '@/app/components/Home/FAQ'
import Contact from '@/app/components/Home/Contact'

export const metadata: Metadata = {
  title: 'GoSitePro - Sites Web Performants pour Pros',
  description: 'Votre activité mérite un vrai site professionnel. GoSitePro lance votre site vitrine performant, sécurisé et visible en moins de 7 jours.',
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GoSitePro',
    image: 'https://gositepro.fr/images/logo/gositeprologo.png',
    description: 'Agence web spécialisée dans la création de sites vitrines performants pour professionnels.',
    url: 'https://gositepro.fr',
    telephone: '+33622412515',
    email: 'contact@gositepro.fr',
    priceRange: '690€ - 1490€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/gositepro', // Adjust if known
    ],
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TechStack />
      <Portfolio />
      <Values />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  )
}
