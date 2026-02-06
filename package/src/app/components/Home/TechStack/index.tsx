'use client'
import React from 'react'
import { Icon } from '@iconify/react'

const TechStack = () => {
    const techs = [
        { name: 'Stripe', icon: 'logos:stripe', label: 'Paiements Sécurisés' },
        { name: 'Clerk', icon: 'simple-icons:clerk', label: 'Authentification' },
        { name: 'AWS', icon: 'logos:aws', label: 'Cloud Infrastructure' },
        { name: 'Scaleway', icon: 'simple-icons:scaleway', label: 'Hébergement EU' },
    ]

    return (
        <section className='py-12 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800'>
            <div className='container mx-auto px-4'>
                <p className='text-center text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-10'>
                    Technologies Premium Intégrées
                </p>
                <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16'>
                    {techs.map((tech) => (
                        <div key={tech.name} className='flex flex-col items-center gap-3 group'>
                            <Icon
                                icon={tech.icon}
                                className='w-12 h-6 md:w-16 md:h-8 opacity-60 group-hover:opacity-100 transition-all duration-300'
                            />
                            <span className='text-[10px] font-bold text-gray-400 dark:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider'>
                                {tech.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack
