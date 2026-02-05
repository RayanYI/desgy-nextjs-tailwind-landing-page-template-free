'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden z-1 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto pt-24 pb-16 max-w-7xl px-4'>
        <div className='grid grid-cols-12 justify-center items-center gap-8'>
          <div className='col-span-12 lg:col-span-6'>
            <div className='py-2 px-5 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mb-6 mx-auto lg:mx-0'>
              <p className='text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-wider'>
                Performance & Rapidité
              </p>
            </div>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-8 text-center lg:text-start'>
              Votre activité mérite un vrai <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>site professionnel.</span>
            </h1>
            <p className='text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed text-center lg:text-start mx-auto lg:mx-0'>
              Arrêtez de perdre des clients. GoSitePro lance votre site vitrine performant, sécurisé et visible en moins de 7 jours.
            </p>
            <div className='flex justify-center lg:justify-start'>
              <Link href={'#contact'}>
                <button className='bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer'>
                  Lancer mon site
                </button>
              </Link>
            </div>
          </div>
          <div className='col-span-12 lg:col-span-6 relative'>
            {/* Visual Suggestion: Speed/Growth */}
            <div className='relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group'>
              <Image
                src='/images/hero/hero-mockup.png'
                alt='GoSitePro - Site Web sur Laptop et Mobile'
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className='object-cover transform group-hover:scale-105 transition-transform duration-700'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
