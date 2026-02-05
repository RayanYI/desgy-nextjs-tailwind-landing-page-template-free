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
              className='block lg:hidden p-2 rounded-lg cursor-pointer'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-darkmode'></span>
              <span className='block w-6 h-0.5 bg-darkmode mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-darkmode mt-1.5'></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}>
          <div className='flex items-center justify-between p-4'>
            <h2 className='text-lg font-bold text-midnight_text dark:text-midnight_text text-white'>
              <Logo />
            </h2>

            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert cursor-pointer"
              aria-label='Close menu Modal'></button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            <MobileHeaderLink item={{ label: 'Réalisations', href: '/#portfolio' }} />
            <MobileHeaderLink item={{ label: 'Notre Mission', href: '/#values' }} />
            <MobileHeaderLink item={{ label: 'Tarifs', href: '/#pricing' }} />
            <MobileHeaderLink item={{ label: 'FAQ', href: '/#faq' }} />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
