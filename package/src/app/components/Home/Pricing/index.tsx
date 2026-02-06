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
                    <span className='inline-block py-2 px-4 bg-green-100 dark:bg-green-900/40 rounded-full text-green-700 dark:text-green-300 text-sm font-bold uppercase tracking-wider mb-4'>
                        Tarifs transparents
                    </span>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
                        Des Offres Claires et{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600'>
                            Sans Surprise
                        </span>
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-400'>
                        Pas de coûts cachés. Choisissez la formule adaptée à votre stade de développement.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch'>
                    {/* Offer 1: Start (Clean & Pro) */}
                    <div className='group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-500'>
                        <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-700 rounded-bl-[100px] -z-10 group-hover:scale-150 transition-transform duration-500' />

                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>Start</h3>
                        <p className='text-gray-500 mb-6'>Idéal pour lancer votre présence en ligne rapidement.</p>
                        <div className='text-5xl font-bold text-gray-900 dark:text-white mb-2'>
                            690€
                        </div>
                        <p className='text-sm text-gray-500 mb-8'>Paiement unique</p>

                        <ul className='space-y-4 mb-8 text-gray-600 dark:text-gray-300'>
                            <li className='flex items-center gap-3'>
                                <div className='w-6 h-6 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center flex-shrink-0'>
                                    <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                                </div>
                                Site One-Page professionnel
                            </li>
                            <li className='flex items-center gap-3'>
                                <div className='w-6 h-6 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center flex-shrink-0'>
                                    <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                                </div>
                                Design sur-mesure moderne
                            </li>
                            <li className='flex items-center gap-3'>
                                <div className='w-6 h-6 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center flex-shrink-0'>
                                    <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                                </div>
                                Formulaire de contact sécurisé
                            </li>
                            <li className='flex items-center gap-3'>
                                <div className='w-6 h-6 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center flex-shrink-0'>
                                    <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                                </div>
                                Optimisation mobile (Responsive)
                            </li>
                            <li className='flex items-center gap-3'>
                                <div className='w-6 h-6 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center flex-shrink-0'>
                                    <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                                </div>
                                Mise en ligne incluse
                            </li>
                        </ul>

                        <Link href="#contact">
                            <button className='w-full py-4 px-6 rounded-full border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-white font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all cursor-pointer group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20'>
                                Lancer ma présence
                            </button>
                        </Link>
                    </div>

                    {/* Offer 2: Croissance (Featured - formerly Vitrine) */}
                    <div className='group relative md:-mt-4 md:mb-4'>
                        {/* Shine effect */}
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl opacity-80 blur-sm group-hover:blur-md transition-all duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                        </div>

                        <div className='relative bg-gradient-to-b from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl h-full'>
                            <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold px-6 py-2 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-2 whitespace-nowrap'>
                                <Icon icon="ph:star-fill" className="w-4 h-4" />
                                LE CHOIX DES PROS
                            </div>

                            <h3 className='text-2xl font-bold text-white mb-2 mt-4'>Croissance</h3>
                            <p className='text-blue-100 mb-6'>L'arme absolue pour convaincre et signer de nouveaux clients.</p>
                            <div className='text-5xl font-bold text-white mb-2'>
                                1490€
                            </div>
                            <p className='text-sm text-blue-200 mb-8'>Paiement unique</p>

                            <ul className='space-y-4 mb-8 text-white'>
                                <li className='flex items-center gap-3'>
                                    <div className='w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0'>
                                        <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-yellow-400" />
                                    </div>
                                    <strong>Site Multi-pages (Accueil + 4)</strong>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0'>
                                        <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-yellow-400" />
                                    </div>
                                    Optimisation SEO avancée
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0'>
                                        <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-yellow-400" />
                                    </div>
                                    Blog / Actualités administrable
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0'>
                                        <Icon icon="ph:rocket-launch-bold" className="w-3.5 h-3.5 text-yellow-400" />
                                    </div>
                                    Vitesse Extrême ({'<'} 1s)
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0'>
                                        <Icon icon="ph:gift-fill" className="w-3.5 h-3.5 text-yellow-400" />
                                    </div>
                                    <span>Google Map & Analytics</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0'>
                                        <Icon icon="ph:gift-fill" className="w-3.5 h-3.5 text-yellow-400" />
                                    </div>
                                    <strong className="text-yellow-300">BONUS : 3 Mois Maintenance</strong>
                                </li>
                            </ul>

                            <Link href="#contact">
                                <button className='w-full py-4 px-6 rounded-full bg-white text-blue-700 font-bold hover:bg-gray-100 transition-all shadow-lg cursor-pointer hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2'>
                                    Choisir l'offre Croissance
                                    <Icon icon="ph:arrow-right-bold" className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Offer 3: Sur-Mesure (High End - formerly Custom) */}
                    <div className='group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-500'>
                        <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent dark:from-purple-900/30 rounded-bl-[100px] -z-10 group-hover:scale-150 transition-transform duration-500' />

                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>Sur-Mesure</h3>
                        <p className='text-gray-500 mb-6'>Pour les projets ambitieux et spécifiques.</p>
                        <div className='text-4xl font-bold text-gray-900 dark:text-white mb-2'>
                            Sur Devis
                        </div>
                        <p className='text-sm text-gray-500 mb-8'>Estimation gratuite</p>

                        <ul className='space-y-4 mb-8 text-gray-600 dark:text-gray-300'>
                            <li className='flex items-center gap-3'>
                                <div className='w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center flex-shrink-0'>
                                    <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                                </div>
                                Application Web / SaaS
                            </li>
                            <li className='flex items-center gap-3'>
                                <div className='w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center flex-shrink-0'>
                                    <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                                </div>
                                E-commerce Complexe
                            </li>
                            <li className='flex items-center gap-3'>
                                <div className='w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center flex-shrink-0'>
                                    <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                                </div>
                                Espace Membre / Connexion
                            </li>
                            <li className='flex items-center gap-3'>
                                <div className='w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center flex-shrink-0'>
                                    <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                                </div>
                                Intégrations API spécifiques
                            </li>
                            <li className='flex items-center gap-3'>
                                <div className='w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center flex-shrink-0'>
                                    <Icon icon="ph:check-bold" className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                                </div>
                                Architecture Cloud personnalisée
                            </li>
                        </ul>

                        <Link href="#contact">
                            <button className='w-full py-4 px-6 rounded-full border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-white font-semibold hover:border-purple-600 hover:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-400 transition-all cursor-pointer group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20'>
                                Demander une étude
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Trust badges */}
                <div className='mt-16 text-center'>
                    <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>Ils nous font confiance</p>
                    <div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
                        <div className='flex items-center gap-2'>
                            <Icon icon="ph:shield-check-fill" className="w-6 h-6 text-green-600" />
                            <span className='text-sm font-medium text-gray-600 dark:text-gray-300'>Paiement sécurisé</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Icon icon="ph:lock-fill" className="w-6 h-6 text-blue-600" />
                            <span className='text-sm font-medium text-gray-600 dark:text-gray-300'>SSL inclus</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Icon icon="ph:handshake-fill" className="w-6 h-6 text-purple-600" />
                            <span className='text-sm font-medium text-gray-600 dark:text-gray-300'>Satisfait ou remboursé</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
