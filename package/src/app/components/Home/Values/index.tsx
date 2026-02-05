'use client'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'

interface ValueData {
    title: string
    description: string
    icon: string
}

const values: ValueData[] = [
    {
        title: 'Performance Google (SEO)',
        description: 'Score 99/100 sur PageSpeed Insights. Une vitesse de chargement instantanée qui plaît à Google et à vos clients.',
        icon: 'ph:rocket-launch-duotone',
    },
    {
        title: 'Sécurité Maximale',
        description: 'Protection contre les attaques, certificat SSL inclus, et mises à jour de sécurité automatiques sans intervention de votre part.',
        icon: 'ph:shield-check-duotone',
    },
    {
        title: 'Compatible Mobile',
        description: 'Affichage parfait sur tous les écrans : smartphones, tablettes et ordinateurs. Ne perdez plus aucun visiteur mobile.',
        icon: 'ph:device-mobile-camera-duotone',
    },
    {
        title: '100% Clé en Main',
        description: 'Zéro technique pour vous. Nous gérons l\'installation, l\'hébergement et la maintenance. Concentrez-vous sur votre métier.',
        icon: 'ph:handshake-duotone',
    },
]

const Values = () => {
    return (
        <section id='values' className='bg-blue-50/50 dark:bg-gray-900/50 py-24'>
            <div className='container mx-auto max-w-7xl px-4'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
                        Pourquoi choisir GoSitePro ?
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-400'>
                        Oubliez les "sites créatifs" lents et compliqués. Nous misons tout sur l'efficacité et les résultats business.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {values.map((item, index) => (
                        <div key={index} className='bg-white dark:bg-darkHeroBg p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
                            <div className='w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400'>
                                <Icon icon={item.icon} width='32' height='32' />
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                                {item.title}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-400 leading-relaxed text-sm'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Values
