'use client'
import React from 'react'
import Link from 'next/link'

const Contact = () => {
    return (
        <section id='contact' className='py-20 bg-blue-600 dark:bg-blue-900'>
            <div className='container mx-auto px-4 max-w-7xl text-center'>
                <h2 className='text-3xl md:text-5xl font-bold text-white mb-8'>
                    On discute de votre projet ?
                </h2>
                <p className='text-blue-100 text-xl mb-10 max-w-2xl mx-auto'>
                    Vous n'êtes qu'à un clic d'un site web qui rapporte. N'attendez plus.
                </p>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
                    <Link href='mailto:contact@gositepro.fr'>
                        <button className='bg-white text-blue-600 text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1'>
                            contact@gositepro.fr
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Contact
