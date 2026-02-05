'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  return (
    <section className='relative overflow-hidden z-1 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto pt-24 pb-16 max-w-7xl px-4'>
        <div className='grid grid-cols-12 justify-center items-center gap-8'>
          <div className='col-span-12 lg:col-span-6'>
            <div className='py-2 px-5 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mb-6'>
              <p className='text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-wider'>
                Performance & Rapidité
              </p>
            </div>
            <h1 className='text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6'>
              Votre activité mérite un vrai <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>site professionnel.</span>
            </h1>
            <p className='text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed'>
              Arrêtez de perdre des clients. GoSitePro lance votre site vitrine performant, sécurisé et visible en moins de 7 jours.
            </p>
            <Link href={'#contact'}>
              <button className='bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                Lancer mon site
              </button>
            </Link>
          </div>
          <div className='col-span-12 lg:col-span-6 relative'>
            {/* Visual Suggestion: Speed/Growth */}
            <div className='relative w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center group'>
                <div className="absolute inset-0 bg-[url('/images/hero/grid.svg')] opacity-20"></div>
                <div className="text-white text-center p-8">
                    <p className="text-2xl font-bold mb-2">🚀 Vitesse & Croissance</p>
                    <p className="opacity-80">Placeholder Visuel</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
