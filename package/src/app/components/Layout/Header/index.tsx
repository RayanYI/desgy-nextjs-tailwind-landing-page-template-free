'use client'
// ... imports
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { motion, AnimatePresence } from 'framer-motion'

// Workaround for framer-motion type issues with standard HTML attributes
const MotionDiv = motion.div as any

// Menu icons for each link
const menuIcons = {
  'Réalisations': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
  'Notre Mission': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  'Tarifs': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  ),
  'FAQ': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  ),
}

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(true)

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 40)
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  const drawerVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  }

  const linkVariants = {
    initial: { opacity: 0, x: 20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { opacity: 0, x: 20 }
  }

  const menuLinks = [
    { label: 'Réalisations', href: '/#portfolio' },
    { label: 'Notre Mission', href: '/#values' },
    { label: 'Tarifs', href: '/#pricing' },
    { label: 'FAQ', href: '/#faq' },
  ]

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 border-b border-black/10 ${sticky
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md'
        : 'bg-transparent shadow-none'
        }`}>
      <div className='py-4'>
        <div className='container mx-auto max-w-(--breakpoint-xl) flex items-center justify-between px-4'>
          <div
            className={`pr-16 lg:border-r border-black/10 duration-300 py-2`}>
            <Logo />
          </div>
          <nav className='hidden lg:flex grow items-center gap-8 justify-center'>
            <HeaderLink item={{ label: 'Réalisations', href: '/#portfolio' }} />
            <HeaderLink item={{ label: 'Notre Mission', href: '/#values' }} />
            <HeaderLink item={{ label: 'Tarifs', href: '/#pricing' }} />
            <HeaderLink item={{ label: 'FAQ', href: '/#faq' }} />
          </nav>
          <div
            className={`flex items-center gap-4 pl-16 lg:border-l border-black/10 duration-300 py-2`}>
            <Link href='/#contact' className='hidden lg:block group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-2.5 rounded-full font-bold transition-all cursor-pointer shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5'>
              <span className="relative z-10">Démarrer</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Premium Animated Hamburger Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className={`block lg:hidden relative w-12 h-12 rounded-xl cursor-pointer transition-all duration-300 z-50
                ${navbarOpen
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={navbarOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span
                    className={`block h-0.5 rounded-full origin-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${navbarOpen
                      ? 'bg-white rotate-45 translate-y-[9px]'
                      : 'bg-gray-700 dark:bg-white rotate-0 translate-y-0'
                      }`}
                    style={{ width: 24 }}
                  />
                  <span
                    className={`block h-0.5 w-4 rounded-full transition-all duration-200 ${navbarOpen
                      ? 'bg-white opacity-0 scale-x-0'
                      : 'bg-gray-700 dark:bg-white opacity-100 scale-x-100'
                      }`}
                  />
                  <span
                    className={`block h-0.5 rounded-full origin-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${navbarOpen
                      ? 'bg-white -rotate-45 -translate-y-[9px] w-6'
                      : 'bg-gray-700 dark:bg-white rotate-0 translate-y-0 w-4'
                      }`}
                  />
                </div>
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {navbarOpen && (
            <>
              {/* Premium Backdrop with blur */}
              <MotionDiv
                variants={backdropVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={() => setNavbarOpen(false)}
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
              />

              {/* Premium Drawer */}
              <MotionDiv
                ref={mobileMenuRef}
                variants={drawerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed top-0 right-0 z-50 h-[100dvh] w-80 max-w-[90vw] flex flex-col overflow-hidden"
              >
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl" />

                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-400/20 to-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Drawer Header */}
                  <MotionDiv
                    variants={linkVariants}
                    className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-800/50"
                  >
                    <div onClick={() => setNavbarOpen(false)} className="cursor-pointer">
                      <Logo />
                    </div>
                    <button
                      onClick={() => setNavbarOpen(false)}
                      className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer group"
                    >
                      <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </MotionDiv>

                  {/* Label */}
                  <MotionDiv variants={linkVariants} className="px-6 pt-6 pb-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500">
                      Navigation
                    </span>
                  </MotionDiv>

                  {/* Premium Drawer Links */}
                  <nav className='flex-1 overflow-y-auto px-4 py-2'>
                    {menuLinks.map((link, index) => (
                      <MotionDiv
                        key={link.href}
                        variants={linkVariants}
                        custom={index}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setNavbarOpen(false)}
                          className="group flex items-center gap-4 px-4 py-4 rounded-2xl text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 cursor-pointer"
                        >
                          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                            {menuIcons[link.label as keyof typeof menuIcons]}
                          </span>
                          <span className="text-base font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                            {link.label}
                          </span>
                          <svg className="w-4 h-4 ml-auto text-gray-300 dark:text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </MotionDiv>
                    ))}
                  </nav>

                  {/* Premium Drawer Footer / CTA */}
                  <MotionDiv
                    variants={linkVariants}
                    className="relative p-6 border-t border-gray-200/50 dark:border-gray-800/50"
                  >
                    <Link
                      href='/#contact'
                      onClick={() => setNavbarOpen(false)}
                      className='group relative block w-full overflow-hidden rounded-2xl cursor-pointer'
                    >
                      {/* Button background with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] group-hover:animate-shimmer transition-all" />

                      {/* Button content */}
                      <div className="relative flex items-center justify-center gap-2 px-6 py-4 text-white font-semibold text-base">
                        <span>Démarrer votre projet</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>

                    <p className="mt-4 text-xs text-center text-gray-400 dark:text-gray-500">
                      © 2026 GoSitePro. Tous droits réservés.
                    </p>
                  </MotionDiv>
                </div>
              </MotionDiv>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
