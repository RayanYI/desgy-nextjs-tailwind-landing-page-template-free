'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const faqData = [
  {
    question: "Combien ça coûte réellement ?",
    answer: "Tout est affiché : 490€ pour une page ou 890€ pour un site complet. Pas d'abonnement mensuel caché pour la création. Seul l'hébergement (environ 50€/an) reste à votre charge après la première année offerte."
  },
  {
    question: "Combien de temps avant d'être en ligne ?",
    answer: "Une fois que nous avons vos contenus (textes, photos), nous nous engageons à livrer une première version en 5 jours ouvrés. La mise en ligne définitive se fait sous 7 jours maximum."
  },
  {
    question: "Est-ce que je suis propriétaire de mon site ?",
    answer: "OUI. À 100%. Contrairement à certaines plateformes, vous possédez votre nom de domaine et tous les fichiers de votre site. Vous êtes libre de partir quand vous voulez."
  },
  {
    question: "Qui s'occupe de la maintenance ?",
    answer: "Nous offrons 1 mois de maintenance pour s'assurer que tout roule. Ensuite, le site est conçu pour être stable et sécurisé sans intervention constante. Si vous avez besoin de modifications, nous proposons des forfaits d'intervention à la demande."
  }
]

const FAQ = () => {
  return (
    <section id='faq' className='relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center mb-16'>
          <p className='text-lg font-bold text-blue-600 dark:text-blue-400 mb-2'>Questions Fréquentes</p>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white max-w-3xl mx-auto'>
            On lève tous vos doutes.
          </h2>
        </div>

        <div className='max-w-4xl mx-auto space-y-4'>
          {faqData.map((item, index) => (
            <div key={index} className='mx-auto w-full rounded-2xl bg-white dark:bg-gray-700 p-6 shadow-sm border border-gray-100 dark:border-gray-600'>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className='flex w-full justify-between items-center text-left text-lg font-bold text-gray-900 dark:text-white focus:outline-none'>
                      <span>{item.question}</span>
                      <Icon
                        icon='lucide:chevron-up'
                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-blue-500`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className='pt-4 text-base text-gray-600 dark:text-gray-300'>
                      {item.answer}
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
