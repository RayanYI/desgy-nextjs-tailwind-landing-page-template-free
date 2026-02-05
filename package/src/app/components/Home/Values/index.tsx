'use client'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

interface ValueData {
    title: string
    description: string
    icon: string
    color: string
}

const values: ValueData[] = [
    {
        title: 'Performance Google (SEO)',
        description: 'Score 99/100 sur PageSpeed Insights. Une vitesse de chargement instantanée qui plaît à Google et à vos clients.',
        icon: 'ph:rocket-launch-duotone',
        color: 'from-orange-500 to-red-500',
    },
    {
        title: 'Sécurité Maximale',
        description: 'Protection contre les attaques, certificat SSL inclus, et mises à jour de sécurité automatiques sans intervention de votre part.',
        icon: 'ph:shield-check-duotone',
        color: 'from-green-500 to-emerald-500',
    },
    {
        title: 'Compatible Mobile',
        description: 'Affichage parfait sur tous les écrans : smartphones, tablettes et ordinateurs. Ne perdez plus aucun visiteur mobile.',
        icon: 'ph:device-mobile-camera-duotone',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        title: '100% Clé en Main',
        description: 'Zéro technique pour vous. Nous gérons l\'installation, l\'hébergement et la maintenance. Concentrez-vous sur votre métier.',
        icon: 'ph:handshake-duotone',
        color: 'from-purple-500 to-pink-500',
    },
]

const Values = () => {
    return (
        <section id='values' className='relative bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 py-24 overflow-hidden'>
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl dark:bg-blue-900/20" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl dark:bg-purple-900/20" />
            </div>

            <div className='container mx-auto max-w-7xl px-4 relative z-10'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <span className='inline-block py-2 px-4 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-700 dark:text-blue-300 text-sm font-bold uppercase tracking-wider mb-4'>
                        Nos avantages
                    </span>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
                        Pourquoi choisir{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>
                            GoSitePro
                        </span> ?
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-400'>
                        Oubliez les "sites créatifs" lents et compliqués. Nous misons tout sur l'efficacité et les résultats business.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className='group relative'
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Gradient border effect */}
                            <div className={`absolute -inset-[1px] bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`} />

                            <div className='relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:border-transparent h-full'>
                                {/* Icon container with animation */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <Icon icon={item.icon} width='32' height='32' />
                                </div>

                                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all'>
                                    {item.title}
                                </h3>
                                <p className='text-gray-600 dark:text-gray-400 leading-relaxed text-sm'>
                                    {item.description}
                                </p>

                                {/* Hover indicator */}
                                <div className='mt-6 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300'>
                                    <span>En savoir plus</span>
                                    <Icon icon="ph:arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Values
