'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const faqData = [
  {
    question: "Combien ça coûte réellement ?",
    answer: `Tout est transparent.

690€ pour une page professionnelle ou 1490€ pour un site complet.
Aucun abonnement caché pour la création.

Seul l’hébergement (environ 50€/an) reste à votre charge après la première année offerte.`,
    icon: "ph:currency-eur-duotone"
  },
  {
    question: "Combien de temps avant d’être en ligne ?",
    answer: `Dès réception de vos contenus (textes et photos), une première version de votre site est livrée sous 5 jours ouvrés.

La mise en ligne définitive intervient sous 7 jours maximum.

Rapide, clair, efficace.`,
    icon: "ph:clock-countdown-duotone"
  },
  {
    question: "Est-ce que je suis propriétaire de mon site ?",
    answer: `Oui. À 100%.

Vous êtes propriétaire de votre nom de domaine et de l’intégralité de votre site.
Aucune dépendance à une plateforme. Aucune contrainte.

Vous êtes libre, totalement.`,
    icon: "ph:key-duotone"
  },
  {
    question: "Qui s’occupe de la maintenance ?",
    answer: `Nous offrons de 1 à 3 mois de maintenance selon l’offre choisie, pour garantir un démarrage serein.

Ensuite, votre site est conçu pour être stable, sécurisé et autonome, sans intervention constante.

Et si vous souhaitez des évolutions, nous proposons des interventions à la demande.`,
    icon: "ph:wrench-duotone"
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id='faq' className='relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden'>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] translate-x-1/2 -translate-y-1/2 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
      </div>

      <div className='container mx-auto max-w-7xl px-4 relative z-10'>
        <div className='text-center mb-16'>
          <span className='inline-block py-2 px-4 bg-orange-100 dark:bg-orange-900/40 rounded-full text-orange-700 dark:text-orange-300 text-sm font-bold uppercase tracking-wider mb-4'>
            Questions Fréquentes
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white max-w-3xl mx-auto'>
            On lève{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600'>
              tous vos doutes
            </span>
          </h2>
        </div>

        <div className='max-w-3xl mx-auto space-y-4'>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`group rounded-2xl border-2 transition-colors duration-300 ${isOpen
                  ? 'bg-white dark:bg-gray-800 shadow-xl border-blue-500/20'
                  : 'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg border-gray-100 dark:border-gray-700'
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className='flex w-full items-center gap-4 p-6 text-left cursor-pointer'
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                    }`}>
                    <Icon icon={item.icon} className="w-6 h-6" />
                  </div>

                  {/* Question */}
                  <div className='flex-1 min-w-0'>
                    <span className={`block text-lg font-bold transition-colors ${isOpen
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-900 dark:text-white'
                      }`}>
                      {item.question}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                    ? 'bg-blue-100 dark:bg-blue-900/40 rotate-180'
                    : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                    <Icon
                      icon='ph:caret-down-bold'
                      className={`w-5 h-5 transition-colors ${isOpen
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-400'
                        }`}
                    />
                  </div>
                </button>

                {/* Answer - Simple toggle sans animation lourde */}
                {isOpen && (
                  <div className='px-6 pb-6 pl-[88px] animate-fadeIn'>
                    <p className='text-base text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line'>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>


        {/* CTA */}
        <div className='mt-12 text-center'>
          <p className='text-gray-500 dark:text-gray-400 mb-4'>
            Vous avez d'autres questions ?
          </p>
          <a
            href="#contact"
            className='inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline'
          >
            Contactez-nous directement
            <Icon icon="ph:arrow-right-bold" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
