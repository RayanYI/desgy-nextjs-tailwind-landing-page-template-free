'use client'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Pricing = () => {
    return (
        <section className='relative py-24 overflow-hidden' id='pricing'>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900" />

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] translate-x-1/2 -translate-y-1/2 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
            </div>

            <div className='container mx-auto px-4 max-w-7xl relative z-10'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <span className='inline-block py-2 px-4 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-700 dark:text-blue-300 text-sm font-bold uppercase tracking-wider mb-4'>
                        Investissement Stratégique
                    </span>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
                        Des Solutions{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                            Premium
                        </span>{' '}
                        pour votre Croissance
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-400'>
                        Choisissez l'excellence. Des offres conçues pour maximiser votre impact et votre retour sur investissement.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-8'>
                    {/* Offer 1: Start (Clean & Pro) */}
                    <div className='group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-500'>
                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>Start</h3>
                        <p className='text-gray-500 text-sm min-h-[40px] mb-6'>Idéal pour lancer votre présence en ligne rapidement.</p>
                        <div className='text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2'>
                            690€
                        </div>
                        <p className='text-sm text-gray-500 mb-8'>Paiement unique</p>

                        <ul className='space-y-4 mb-8 text-gray-600 dark:text-gray-300'>
                            <li className='flex items-center gap-3'>
                                <Icon icon="ph:check-circle-fill" className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                <span className='text-sm'>Site One-Page professionnel</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <Icon icon="ph:check-circle-fill" className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                <span className='text-sm'>Design sur-mesure moderne</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <Icon icon="ph:check-circle-fill" className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                <span className='text-sm'>Formulaire de contact sécurisé</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <Icon icon="ph:check-circle-fill" className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                <span className='text-sm'>Optimisation mobile (Responsive)</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <Icon icon="ph:check-circle-fill" className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                <span className='text-sm'>Mise en ligne incluse</span>
                            </li>
                        </ul>

                        <Link href="#contact">
                            <button className='w-full py-3.5 px-6 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-semibold hover:border-gray-400 dark:hover:border-gray-400 hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700/50'>
                                Lancer ma présence
                            </button>
                        </Link>
                    </div>

                    {/* Offer 2: Croissance (The Star) */}
                    <div className='group relative md:-mt-8 md:mb-4 transform hover:scale-[1.02] transition-transform duration-500 z-10'>
                        {/* Shadow & Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />

                        <div className='relative bg-blue-600 rounded-[2rem] p-8 shadow-2xl h-full flex flex-col'>
                            {/* Badger */}
                            <div className='absolute -top-5 left-1/2 transform -translate-x-1/2'>
                                <span className='bg-white text-blue-700 text-xs font-black uppercase tracking-widest py-2 px-6 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap'>
                                    <Icon icon="ph:star-fill" className="w-3.5 h-3.5 text-yellow-500" />
                                    Le choix des pros
                                </span>
                            </div>

                            <h3 className='text-3xl font-bold text-white mb-2 mt-4'>Croissance</h3>
                            <p className='text-blue-100 text-sm min-h-[40px] mb-6'>L'arme absolue pour convaincre et signer de nouveaux clients.</p>
                            <div className='text-5xl lg:text-6xl font-bold text-white mb-2'>
                                1490€
                            </div>
                            <p className='text-sm text-blue-200 mb-8'>Paiement unique</p>

                            <div className='flex-grow'>
                                <ul className='space-y-4 mb-8 text-white'>
                                    <li className='flex items-start gap-3'>
                                        <div className='mt-0.5 bg-white/20 p-1 rounded-full'>
                                            <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <span className='font-medium'>Site Multi-pages complet (Accueil + 4 pages)</span>
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <div className='mt-0.5 bg-white/20 p-1 rounded-full'>
                                            <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <span className='font-medium'>Optimisation SEO avancée (Visibilité Google)</span>
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <div className='mt-0.5 bg-white/20 p-1 rounded-full'>
                                            <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <span className='font-medium'>Blog / Actualités administrable</span>
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <div className='mt-0.5 bg-white/20 p-1 rounded-full'>
                                            <Icon icon="ph:rocket-launch-bold" className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <span className='font-medium'>Vitesse Extrême (Chargement {'<'} 1s)</span>
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <div className='mt-0.5 bg-white/20 p-1 rounded-full'>
                                            <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <span className='font-medium'>Intégration Google Analytics & Maps</span>
                                    </li>

                                    <div className='my-4 border-t border-white/20'></div>

                                    <li className='flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10'>
                                        <Icon icon="ph:gift-fill" className="w-5 h-5 text-yellow-300" />
                                        <span className='font-bold text-yellow-100 text-sm'>
                                            BONUS : 3 Mois Maintenance Offerts
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <Link href="#contact" className='mt-auto'>
                                <button className='w-full py-4 px-6 rounded-xl bg-white text-blue-700 font-bold hover:bg-gray-50 transition-all shadow-lg cursor-pointer hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2'>
                                    Choisir l'offre Croissance
                                    <Icon icon="ph:arrow-right-bold" className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Offer 3: Sur-Mesure (High End) */}
                    <div className='group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-500'>
                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>Sur-Mesure</h3>
                        <p className='text-gray-500 text-sm min-h-[40px] mb-6'>Pour les projets ambitieux et spécifiques.</p>
                        <div className='text-4xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 pt-2 md:pt-3 lg:pt-5 pb-1'>
                            Sur Devis
                        </div>
                        <p className='text-sm text-gray-500 mb-8'>Estimation gratuite</p>

                        <ul className='space-y-4 mb-8 text-gray-600 dark:text-gray-300'>
                            <li className='flex items-center gap-3'>
                                <Icon icon="ph:check-circle-fill" className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                <span className='text-sm'>Application Web / SaaS</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <Icon icon="ph:check-circle-fill" className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                <span className='text-sm'>E-commerce complexe</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <Icon icon="ph:check-circle-fill" className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                <span className='text-sm'>Espace Membre / Connexion</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <Icon icon="ph:check-circle-fill" className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                <span className='text-sm'>Intégrations API spécifiques</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <Icon icon="ph:check-circle-fill" className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                <span className='text-sm'>Architecture Cloud personnalisée</span>
                            </li>
                        </ul>

                        <Link href="#contact">
                            <button className='w-full py-3.5 px-6 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-semibold hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all cursor-pointer bg-transparent hover:bg-purple-50 dark:hover:bg-purple-900/20'>
                                Demander une étude
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Trust/Reassurance */}
                <div className='mt-20 text-center opacity-60 hover:opacity-100 transition-opacity duration-500'>
                    <p className='text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6'>
                        Inclus dans chaque projet
                    </p>
                    <div className='flex flex-wrap justify-center gap-8 md:gap-16'>
                        <div className='flex flex-col items-center gap-2'>
                            <Icon icon="ph:shield-check-fill" className="w-6 h-6 text-gray-400" />
                            <span className='text-xs font-medium text-gray-500'>Sécurité SSL</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <Icon icon="ph:lightning-fill" className="w-6 h-6 text-gray-400" />
                            <span className='text-xs font-medium text-gray-500'>Performance Max</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <Icon icon="ph:device-mobile-camera-fill" className="w-6 h-6 text-gray-400" />
                            <span className='text-xs font-medium text-gray-500'>100% Responsive</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <Icon icon="ph:headset-fill" className="w-6 h-6 text-gray-400" />
                            <span className='text-xs font-medium text-gray-500'>Support Réactif</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
