'use client'
import React from 'react'

const Pricing = () => {
    return (
        <section className='py-24 relative overflow-hidden' id='pricing'>
            <div className='container mx-auto px-4 max-w-7xl relative z-10'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
                        Des Offres Claires et Sans Surprise
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-400'>
                        Pas de coûts cachés. Choisissez la formule adaptée à votre stade de développement.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
                    {/* Offer 1: Start */}
                    <div className='bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 relative'>
                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>Start</h3>
                        <p className='text-gray-500 mb-6'>Carte de visite digitale</p>
                        <div className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
                            500€ <span className='text-base font-normal text-gray-500'>/ one shot</span>
                        </div>
                        <ul className='space-y-4 mb-8 text-gray-600 dark:text-gray-300'>
                            <li className='flex items-center'><span className='text-green-500 mr-2'>✓</span> Site One-Page</li>
                            <li className='flex items-center'><span className='text-green-500 mr-2'>✓</span> Design Pro & Rapide</li>
                            <li className='flex items-center'><span className='text-green-500 mr-2'>✓</span> Formulaire de contact</li>
                            <li className='flex items-center'><span className='text-green-500 mr-2'>✓</span> Optimisé Mobile</li>
                        </ul>
                        <button className='w-full py-3 px-6 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors'>
                            Choisir Start
                        </button>
                    </div>

                    {/* Offer 2: Vitrine (Featured) */}
                    <div className='bg-gradient-to-b from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl relative transform md:-translate-y-4 border border-blue-500'>
                        <div className='absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl'>
                            POPULAIRE
                        </div>
                        <h3 className='text-2xl font-bold text-white mb-2'>Vitrine</h3>
                        <p className='text-blue-100 mb-6'>L'offre standard pour convaincre</p>
                        <div className='text-4xl font-bold text-white mb-6'>
                            900€ <span className='text-base font-normal text-blue-200'>/ one shot</span>
                        </div>
                        <ul className='space-y-4 mb-8 text-white'>
                            <li className='flex items-center'><span className='text-yellow-400 mr-2'>✓</span> <strong>Site Multi-pages (jusqu'à 5)</strong></li>
                            <li className='flex items-center'><span className='text-yellow-400 mr-2'>✓</span> Blog / Actualités inclus</li>
                            <li className='flex items-center'><span className='text-yellow-400 mr-2'>✓</span> Optimisation SEO avancée</li>
                            <li className='flex items-center'><span className='text-yellow-400 mr-2'>✓</span> Intégration Google Analytics</li>
                            <li className='flex items-center'><span className='text-yellow-400 mr-2'>✓</span> 1 mois de maintenance offert</li>
                        </ul>
                        <button className='w-full py-3 px-6 rounded-full bg-white text-blue-700 font-bold hover:bg-gray-100 transition-colors shadow-lg'>
                            Choisir Vitrine
                        </button>
                    </div>

                    {/* Offer 3: Custom */}
                    <div className='bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 relative'>
                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>Custom</h3>
                        <p className='text-gray-500 mb-6'>Pour les projets ambitieux</p>
                        <div className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
                            Sur Devis
                        </div>
                        <ul className='space-y-4 mb-8 text-gray-600 dark:text-gray-300'>
                            <li className='flex items-center'><span className='text-green-500 mr-2'>✓</span> <strong>Application Web / SaaS</strong></li>
                            <li className='flex items-center'><span className='text-green-500 mr-2'>✓</span> E-commerce Complexe</li>
                            <li className='flex items-center'><span className='text-green-500 mr-2'>✓</span> Espace Membre / Connexion</li>
                            <li className='flex items-center'><span className='text-green-500 mr-2'>✓</span> Intégrations API spécifiques</li>
                        </ul>
                        <button className='w-full py-3 px-6 rounded-full border-2 border-gray-300 text-gray-700 dark:text-white dark:border-gray-600 font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors'>
                            Demander un Devis
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
