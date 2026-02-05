'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import toast from 'react-hot-toast'
import { sendEmail } from '@/app/actions/sendEmail'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Vitrine'
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedField, setFocusedField] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const data = new FormData()
            data.append('name', formData.name)
            data.append('email', formData.email)
            data.append('projectType', formData.projectType)

            const result = await sendEmail(data)

            if (result.success) {
                toast.success('Merci ! Nous avons bien reçu votre demande.')
                setFormData({
                    name: '',
                    email: '',
                    projectType: 'Vitrine'
                })
            } else {
                toast.error(result.message || "Erreur lors de l'envoi.")
            }
        } catch (error) {
            toast.error("Une erreur inattendue s'est produite.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id='contact' className='relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden'>
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className='container mx-auto px-4 max-w-6xl relative z-10'>
                {/* Header */}
                <div className='text-center mb-12'>
                    <span className='inline-block py-2 px-4 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-700 dark:text-blue-300 text-sm font-bold uppercase tracking-wider mb-4'>
                        🚀 Prêt à démarrer ?
                    </span>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
                        Lancez votre{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                            projet web
                        </span>
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
                        Votre site en ligne sous 7 jours. Remplissez le formulaire et recevez un rappel dans les 24h.
                    </p>
                </div>

                <div className='bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100 dark:border-gray-700'>

                    {/* Left Side: Info & Context (Dark Blue) */}
                    <div className='md:w-5/12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden'>
                        {/* Animated decoration */}
                        <div className='absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20 animate-pulse'></div>
                        <div className='absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -ml-20 -mb-20 animate-pulse' style={{ animationDelay: '1s' }}></div>
                        <div className='absolute top-1/2 right-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse' style={{ animationDelay: '0.5s' }}></div>

                        <div className='relative z-10'>
                            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6'>
                                <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
                                <span className='text-sm font-medium'>Disponible maintenant</span>
                            </div>

                            <h2 className='text-2xl lg:text-3xl font-bold mb-6'>
                                On lance votre projet ?
                            </h2>
                            <p className='text-blue-100 text-lg mb-10 leading-relaxed'>
                                Ne laissez pas votre idée dormir. Remplissez ce formulaire, et on s'occupe de tout. <strong className='text-white'>Lancement sous 7 jours garanti.</strong>
                            </p>

                            <div className='space-y-5'>
                                <a href="tel:0622412515" className='flex items-center gap-4 group cursor-pointer p-3 -ml-3 rounded-xl hover:bg-white/10 transition-all'>
                                    <div className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all'>
                                        <Icon icon='ph:phone-call-duotone' className='w-6 h-6 text-white' />
                                    </div>
                                    <div>
                                        <p className='text-blue-200 text-xs uppercase tracking-wider font-bold group-hover:text-white transition-colors'>Appelez-nous</p>
                                        <p className='font-bold text-xl group-hover:underline'>06 22 41 25 15</p>
                                    </div>
                                </a>
                                <a href="mailto:contact@gositepro.fr" className='flex items-center gap-4 group cursor-pointer p-3 -ml-3 rounded-xl hover:bg-white/10 transition-all'>
                                    <div className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all'>
                                        <Icon icon='ph:envelope-duotone' className='w-6 h-6 text-white' />
                                    </div>
                                    <div>
                                        <p className='text-blue-200 text-xs uppercase tracking-wider font-bold group-hover:text-white transition-colors'>Écrivez-nous</p>
                                        <p className='font-bold text-xl group-hover:underline'>contact@gositepro.fr</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Trust indicators */}
                        <div className='relative z-10 mt-10 pt-8 border-t border-white/10'>
                            <div className='flex flex-wrap gap-4'>
                                <div className='flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2'>
                                    <Icon icon="ph:shield-check-fill" className="w-4 h-4 text-green-300" />
                                    <span className='text-xs font-medium'>SSL Sécurisé</span>
                                </div>
                                <div className='flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2'>
                                    <Icon icon="ph:flag-fill" className="w-4 h-4 text-blue-300" />
                                    <span className='text-xs font-medium'>RGPD</span>
                                </div>
                                <div className='flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2'>
                                    <Icon icon="ph:check-circle-fill" className="w-4 h-4 text-yellow-300" />
                                    <span className='text-xs font-medium'>+50 clients</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form (White) */}
                    <div className='md:w-7/12 p-10 lg:p-12'>
                        <form onSubmit={handleSubmit} className='space-y-8'>
                            {/* Name Field */}
                            <div className='relative'>
                                <label
                                    htmlFor='name'
                                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name
                                            ? '-top-6 text-xs font-bold text-blue-600 dark:text-blue-400'
                                            : 'top-3 text-base text-gray-400'
                                        }`}
                                >
                                    Votre Nom
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    required
                                    className='w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-all text-gray-900 dark:text-white text-lg'
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    disabled={isSubmitting}
                                />
                                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`} />
                            </div>

                            {/* Email Field */}
                            <div className='relative'>
                                <label
                                    htmlFor='email'
                                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email
                                            ? '-top-6 text-xs font-bold text-blue-600 dark:text-blue-400'
                                            : 'top-3 text-base text-gray-400'
                                        }`}
                                >
                                    Votre Email
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    className='w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 outline-none transition-all text-gray-900 dark:text-white text-lg'
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    disabled={isSubmitting}
                                />
                                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`} />
                            </div>

                            {/* Project Type Field */}
                            <div className='relative'>
                                <label htmlFor='projectType' className='block text-xs font-bold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wider'>
                                    Type de Projet
                                </label>
                                <div className='relative'>
                                    <select
                                        name='projectType'
                                        id='projectType'
                                        className='w-full px-4 py-4 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 rounded-xl outline-none transition-all text-gray-900 dark:text-white appearance-none cursor-pointer text-lg font-medium'
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    >
                                        <option value='Start'>🚀 Offre Start — 490€</option>
                                        <option value='Vitrine'>⭐ Offre Vitrine — 890€</option>
                                        <option value='Custom'>💎 Projet Custom — Sur mesure</option>
                                    </select>
                                    <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500'>
                                        <Icon icon="ph:caret-down-bold" className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>

                            {/* Honeypot field - hidden from real users */}
                            <input type="text" name="_check_val" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                            <div className='pt-4'>
                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='group w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-5 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 active:translate-y-0 flex justify-center items-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
                                >
                                    <span className='text-lg'>{isSubmitting ? 'Envoi en cours...' : 'Lancer mon site maintenant'}</span>
                                    {!isSubmitting && (
                                        <Icon icon="ph:arrow-right-bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    )}
                                    {isSubmitting && (
                                        <Icon icon="ph:spinner" className="w-5 h-5 animate-spin" />
                                    )}
                                </button>

                                <div className='flex items-center justify-center gap-6 mt-6 text-xs text-gray-400'>
                                    <span className='flex items-center gap-1.5'>
                                        <Icon icon="ph:lock-simple-fill" className="w-4 h-4 text-green-500" />
                                        Données sécurisées
                                    </span>
                                    <span className='flex items-center gap-1.5'>
                                        <Icon icon="ph:clock-fill" className="w-4 h-4 text-blue-500" />
                                        Réponse sous 24h
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
