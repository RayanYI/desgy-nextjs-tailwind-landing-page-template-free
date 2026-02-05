'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface Project {
    title: string
    category: string
    description: string
    videoId: string // YouTube Video ID
    color: string
}

const projects: Project[] = [
    {
        title: 'Marketplace E-commerce',
        category: 'En Production',
        description: 'Une solution complète multivendeurs avec dashboard unifié, paiements sécurisés et gestion de stock en temps réel. Stack MERN.',
        videoId: 'dQw4w9WgXcQ', // Placeholder ID
        color: 'bg-emerald-500',
    },
    {
        title: 'Plateforme Éducative',
        category: 'Démo Locale',
        description: 'Système LMS interactif avec suivi de progression, quiz en temps réel et certification automatique.',
        videoId: 'dQw4w9WgXcQ', // Placeholder ID
        color: 'bg-blue-500',
    },
    {
        title: 'Wiki & Réseau Social',
        category: 'Démo Locale',
        description: 'Espace communautaire hybride avec édition collaborative de contenu et fils d\'actualité temps réel.',
        videoId: 'dQw4w9WgXcQ', // Placeholder ID
        color: 'bg-purple-500',
    },
]

const Portfolio = () => {
    const [activeVideo, setActiveVideo] = useState<number | null>(null)

    return (
        <section id='portfolio' className='py-20 bg-white dark:bg-darkmode'>
            <div className='container mx-auto max-w-7xl px-4'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white'>
                        La Preuve par l'Exemple
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
                        Pas de promesses en l'air. Voici des projets concrets et fonctionnels propulsés par nos technologies.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <div key={index} className='bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700'>
                            {/* Media Area */}
                            <div className='relative h-64 w-full group cursor-pointer' onClick={() => setActiveVideo(index)}>
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
                                        {/* Placeholder content since we don't have real screenshots yet */}
                                        <div className='flex items-center justify-center h-full'>
                                            <span className='text-gray-500 font-semibold px-4 text-center'>Cliquez pour voir la démo ({project.category})</span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Content Area */}
                            <div className='p-8'>
                                <div className='flex items-center justify-between mb-4'>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${project.color}`}>
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>{project.title}</h3>
                                <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
