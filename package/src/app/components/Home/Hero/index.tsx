'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

// Animated counter hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * (end - startValue) + startValue))
      if (progress < 1) requestAnimationFrame(animate)
    }

    const timeout = setTimeout(() => requestAnimationFrame(animate), 500)
    return () => clearTimeout(timeout)
  }, [end, duration])

  return count
}

// Workaround for framer-motion type issues
const MotionDiv = motion.div as any
const MotionH1 = motion.h1 as any
const MotionP = motion.p as any
const MotionPath = motion.path as any

const Hero = () => {
  const satisfactionCount = useCounter(100, 2000)
  const daysCount = useCounter(7, 1500)
  const scoreCount = useCounter(99, 2500)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  }

  return (
    <section id='hero' className='relative overflow-hidden z-1 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/20 to-transparent rounded-full blur-3xl dark:from-blue-900/10" />
      </div>

      <div className='container mx-auto pt-28 pb-20 max-w-7xl px-4 relative z-10'>
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='grid grid-cols-12 justify-center items-center gap-8 lg:gap-12'
        >
          <div className='col-span-12 lg:col-span-6'>
            <MotionDiv variants={itemVariants} className='py-2 px-5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-full w-fit mb-6 mx-auto lg:mx-0 border border-blue-200/50 dark:border-blue-700/50'>
              <p className='text-blue-700 dark:text-blue-300 text-sm font-bold uppercase tracking-wider flex items-center gap-2'>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Performance & Rapidité
              </p>
            </MotionDiv>

            <MotionH1 variants={itemVariants} className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-8 text-center lg:text-start'>
              Votre activité mérite un vrai{' '}
              <span className='relative inline-block'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'>
                  site professionnel.
                </span>
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <MotionPath
                    d="M2 6C50 2 150 2 198 6"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </MotionH1>

            <MotionP variants={itemVariants} className='text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed text-center lg:text-start mx-auto lg:mx-0'>
              Arrêtez de perdre des clients. GoSitePro lance votre site vitrine performant, sécurisé et visible en moins de 7 jours.
            </MotionP>

            <MotionDiv variants={itemVariants} className='flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start mb-12'>
              <Link href='#contact'>
                <button className='group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base sm:text-lg font-semibold py-4 px-8 rounded-full transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 cursor-pointer overflow-hidden'>
                  <span className="relative z-10 flex items-center gap-2">
                    Lancer mon site
                    <Icon icon="ph:arrow-right-bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </Link>
              <Link href='#portfolio'>
                <button className='group bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-base sm:text-lg font-semibold py-4 px-8 rounded-full transition-all border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer flex items-center gap-2'>
                  <Icon icon="ph:play-circle-fill" className="w-5 h-5 text-blue-600" />
                  Voir nos réalisations
                </button>
              </Link>
            </MotionDiv>

            {/* Animated Stats */}
            <MotionDiv variants={itemVariants} className='grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0'>
              <div className='text-center lg:text-left'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap'>
                  {satisfactionCount}<span className='text-blue-600'>%</span>
                </div>
                <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>Satisfaction</p>
              </div>
              <div className='text-center lg:text-left border-l border-gray-200 dark:border-gray-700 pl-2 sm:pl-4'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap'>
                  {daysCount}<span className='text-blue-600'>j</span>
                </div>
                <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>Délai moyen</p>
              </div>
              <div className='text-center lg:text-left border-l border-gray-200 dark:border-gray-700 pl-2 sm:pl-4'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap'>
                  {scoreCount}<span className='text-blue-600'>/100</span>
                </div>
                <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>PageSpeed</p>
              </div>
            </MotionDiv>
          </div>

          <div className='col-span-12 lg:col-span-6 relative'>
            {/* Floating badges */}
            <MotionDiv
              variants={floatVariants}
              animate="animate"
              className='absolute -left-4 top-1/4 z-20 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 hidden lg:flex items-center gap-3'
            >
              <div className='w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center'>
                <Icon icon="ph:lightning-fill" className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className='text-sm font-bold text-gray-900 dark:text-white'>Ultra rapide</p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>Chargement &lt; 1s</p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={floatVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
              className='absolute -right-4 bottom-1/4 z-20 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 hidden lg:flex items-center gap-3'
            >
              <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center'>
                <Icon icon="ph:shield-check-fill" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className='text-sm font-bold text-gray-900 dark:text-white'>Sécurisé</p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>SSL + Protection DDoS</p>
              </div>
            </MotionDiv>

            <div
              className='relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group'
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl opacity-50 blur-sm group-hover:opacity-75 transition-opacity" />
              <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
                <Image
                  src='/images/hero/hero-mockup.webp'
                  alt='GoSitePro - Site Web sur Laptop et Mobile'
                  width={800}
                  height={800}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className='transform group-hover:scale-105 transition-transform duration-700'
                  priority
                />
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>


    </section>
  )
}

export default Hero
