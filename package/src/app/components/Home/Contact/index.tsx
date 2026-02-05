'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Vitrine'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Placeholder for actual submission logic
        alert('Merci ! Nous avons bien reçu votre demande. (Démo)')
    }

    return (
        <section id='contact' className='py-20 bg-gray-50 dark:bg-gray-900'>
            <div className='container mx-auto px-4 max-w-6xl'>
                <div className='bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row'>

                    {/* Left Side: Info & Context (Dark Blue) */}
                    <div className='md:w-5/12 bg-blue-600 p-12 text-white flex flex-col justify-between relative overflow-hidden'>
                        {/* Decoration */}
                        <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16'></div>
                        <div className='absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -ml-16 -mb-16'></div>

                        <div className='relative z-10'>
                            <h2 className='text-3xl font-bold mb-6'>
                                On lance votre projet ?
                            </h2>
                            <p className='text-blue-100 text-lg mb-12 leading-relaxed'>
                                Ne laissez pas votre idée dormir. Remplissez ce formulaire, et on s'occupe de tout. Lancement sous 7 jours garanti.
                            </p>

                            <div className='space-y-6'>
                                <div className='flex items-center gap-4'>
                                    <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0'>
                                        <Icon icon='ph:phone-call' className='w-5 h-5 text-white' />
                                    </div>
                                    <div>
                                        <p className='text-blue-200 text-xs uppercase tracking-wide font-bold'>Appelez-nous</p>
                                        <p className='font-bold text-lg'>06 22 41 25 15</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0'>
                                        <Icon icon='ph:envelope' className='w-5 h-5 text-white' />
                                    </div>
                                    <div>
                                        <p className='text-blue-200 text-xs uppercase tracking-wide font-bold'>Écrivez-nous</p>
                                        <p className='font-bold text-lg'>contact@gositepro.fr</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative z-10 mt-12'>
                            <p className='text-xs text-blue-200 opacity-60'>GoSitePro - Agence Digitale</p>
                        </div>
                    </div>

                    {/* Right Side: Form (White) */}
                    <div className='md:w-7/12 p-12'>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide'>
                                    Votre Nom
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    required
                                    className='w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-blue-600 outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400'
                                    placeholder='Jean Dupont'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide'>
                                    Votre Email
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    className='w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-blue-600 outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400'
                                    placeholder='jean@exemple.com'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor='projectType' className='block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide'>
                                    Type de Projet
                                </label>
                                <div className='relative'>
                                    <select
                                        name='projectType'
                                        id='projectType'
                                        className='w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-blue-600 outline-none transition-colors text-gray-900 dark:text-white appearance-none cursor-pointer'
                                        value={formData.projectType}
                                        onChange={handleChange}
                                    >
                                        <option value='Start'>Offre Start (500€)</option>
                                        <option value='Vitrine'>Offre Vitrine (900€)</option>
                                        <option value='Custom'>Projet Custom (Devis)</option>
                                    </select>
                                    <div className='absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500'>
                                        <Icon icon="ph:caret-down-bold" />
                                    </div>
                                </div>
                            </div>

                            <div className='pt-6'>
                                <button type='submit' className='w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 flex justify-center items-center gap-2'>
                                    <span>Lancer mon site maintenant</span>
                                    <Icon icon="ph:arrow-right-bold" />
                                </button>
                                <p className='text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1'>
                                    <Icon icon="ph:lock-simple" />
                                    Vos informations restent confidentielles.
                                </p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
