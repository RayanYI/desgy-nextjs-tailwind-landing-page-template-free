'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  // Default to sticky (opaque) to prevent flash of transparency on reload
  // It will adjust to transparent if at the top after hydration
  const [sticky, setSticky] = useState(true)

  const navbarRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 40)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

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
            <Link href='/#contact' className='hidden lg:block bg-black text-white px-6 py-2.5 rounded-full font-bold hover:bg-gray-800 transition-colors cursor-pointer'>
              Démarrer
            </Link>

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg cursor-pointer text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
              aria-label='Toggle mobile menu'>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' onClick={() => setNavbarOpen(false)} />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-screen w-full bg-white dark:bg-gray-950 shadow-2xl transform transition-transform duration-300 ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}>
          <div className='flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800'>
            <div onClick={() => setNavbarOpen(false)}>
              <Logo />
            </div>

            <button
              onClick={() => setNavbarOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer text-gray-900 dark:text-white"
              aria-label='Close menu Modal'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            <MobileHeaderLink item={{ label: 'Réalisations', href: '/#portfolio' }} closeMenu={() => setNavbarOpen(false)} />
            <MobileHeaderLink item={{ label: 'Notre Mission', href: '/#values' }} closeMenu={() => setNavbarOpen(false)} />
            <MobileHeaderLink item={{ label: 'Tarifs', href: '/#pricing' }} closeMenu={() => setNavbarOpen(false)} />
            <MobileHeaderLink item={{ label: 'FAQ', href: '/#faq' }} closeMenu={() => setNavbarOpen(false)} />
            <Link href='/#contact' onClick={() => setNavbarOpen(false)} className='bg-black dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer w-full text-center mt-6 shadow-lg transform active:scale-95 duration-200'>
              Démarrer mon projet
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
