'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

interface Project {
    title: string
    category: string
    description: string
    image: string
    videoId: string // Kept for later
    color: string
    link?: string
}

const projects: Project[] = [
    {
        title: 'Koda',
        category: 'Succès Commercial',
        description: 'La marketplace de données révolutionnaire. Une interface ultra-rapide permettant de vendre et d\'acheter des automatisations en quelques clics.',
        image: '/images/portfolio/koda.png',
        videoId: 'dQw4w9WgXcQ',
        color: 'bg-emerald-500',
        link: 'https://www.kodas.works/fr'
    },
    {
        title: 'Al Jabeerah',
        category: 'Prêt à Lancer',
        description: 'L\'excellence mathématique au bout des doigts. Une plateforme pédagogique innovante avec gestion de contenu dynamique et parcours personnalisés.',
        image: '/images/portfolio/aljabeerah.png',
        videoId: 'dQw4w9WgXcQ',
        color: 'bg-blue-500',
    },
    {
        title: 'Faunapedia',
        category: 'Concept Innovant',
        description: 'L\'encyclopédie interactive de la faune sauvage. Une expérience immersive pour explorer les espèces du monde entier avec une navigation fluide.',
        image: '/images/portfolio/faunapedia.png',
        videoId: 'dQw4w9WgXcQ',
        color: 'bg-purple-500',
    },
]

const Portfolio = () => {
    // const [activeVideo, setActiveVideo] = useState<number | null>(null) // Commented out for now

    return (
        <section id='portfolio' className='py-24 bg-white dark:bg-gray-900 overflow-hidden'>
            <div className='container mx-auto max-w-7xl px-4 relative'>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

                <div className='text-center mb-16 relative z-10'>
                    <span className='inline-block py-2 px-4 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-700 dark:text-blue-300 text-sm font-bold uppercase tracking-wider mb-4'>
                        La Preuve par l'Exemple
                    </span>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
                        Des Projets <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>Concrets & Fonctionnels</span>
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
                        Pas de promesses en l'air. Explorez nos dernières réalisations propulsées par nos technologies de pointe.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
                    {projects.map((project, index) => {
                        const CardContent = () => (
                            <>
                                {/* Media Area */}
                                <div className='relative h-64 w-full overflow-hidden'>
                                    {/* Image Version */}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className='object-cover transition-transform duration-700 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                                    {/* External Link Icon Overlay if link exists */}
                                    {project.link && (
                                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <Icon icon="ph:arrow-square-out-bold" className="w-5 h-5 text-gray-900 dark:text-white" />
                                        </div>
                                    )}

                                    {/* Video Logic Kept in Comment
                                    <div className='relative h-full w-full cursor-pointer' onClick={() => setActiveVideo(index)}>
                                        {activeVideo === index ? (
                                            <iframe
                                                width='100%'
                                                height='100%'
                                                src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                                                title={project.title}
                                                frameBorder='0'
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                className='absolute inset-0 w-full h-full'
                                            ></iframe>
                                        ) : (
                                            <>
                                                <div className={`absolute inset-0 ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                                                <div className='absolute inset-0 flex items-center justify-center'>
                                                    <div className='w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
                                                        <svg className='w-6 h-6 text-gray-900 ml-1' fill='currentColor' viewBox='0 0 24 24'>
                                                            <path d='M8 5v14l11-7z' />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    */}
                                </div>

                                {/* Content Area */}
                                <div className='p-8 flex-1 flex flex-col'>
                                    <div className='mb-4'>
                                        <span className={`text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full text-white ${project.color}`}>
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <h3 className='text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors'>{project.title}</h3>
                                        {project.link && (
                                            <Icon icon="ph:arrow-right-bold" className="w-5 h-5 text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        )}
                                    </div>
                                    <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                                        {project.description}
                                    </p>
                                </div>
                            </>
                        )

                        if (project.link) {
                            return (
                                <a
                                    key={index}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 flex flex-col cursor-pointer'
                                >
                                    <CardContent />
                                </a>
                            )
                        }

                        return (
                            <div key={index} className='group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 flex flex-col'>
                                <CardContent />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
