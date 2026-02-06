import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='relative overflow-hidden' id='footer'>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl pt-20 pb-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8'>

          {/* Brand Column */}
          <div className='lg:col-span-5'>
            <Link href="/#hero" className="inline-flex items-center gap-2 group">
              <span className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors overflow-hidden">
                <Image
                  src="/images/logo/icon.png"
                  alt="GoSitePro Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </span>
              <span className='text-2xl font-bold text-white'>
                GoSite<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pro</span>
              </span>
            </Link>

            <p className='text-gray-400 mt-6 max-w-md leading-relaxed'>
              Experts en création de sites web performants pour les professionnels exigeants. Votre présence en ligne, notre expertise.
            </p>

            {/* Social Links 

            <div className='flex items-center gap-3 mt-8'>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1'>
                <Icon icon="ph:linkedin-logo-fill" className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-blue-400 hover:to-cyan-400 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25 hover:-translate-y-1'>
                <Icon icon="ph:x-logo-fill" className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 hover:-translate-y-1'>
                <Icon icon="ph:instagram-logo-fill" className="w-5 h-5" />
              </a>
            </div>
            */}
          </div>


          {/* Links Columns */}
          <div className='lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8'>
            {/* Navigation */}
            <div>
              <h5 className='text-sm font-bold text-white mb-6 uppercase tracking-wider'>Navigation</h5>
              <ul className='space-y-4'>
                <li>
                  <Link href='/#hero' className='text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group'>
                    <Icon icon="ph:house" className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>Accueil</span>
                  </Link>
                </li>
                <li>
                  <Link href='/#portfolio' className='text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group'>
                    <Icon icon="ph:images" className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>Réalisations</span>
                  </Link>
                </li>
                <li>
                  <Link href='/#pricing' className='text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group'>
                    <Icon icon="ph:tag" className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>Tarifs</span>
                  </Link>
                </li>
                <li>
                  <Link href='/#contact' className='text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group'>
                    <Icon icon="ph:envelope" className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className='text-sm font-bold text-white mb-6 uppercase tracking-wider'>Légal</h5>
              <ul className='space-y-4'>
                <li>
                  <Link href='/mentions-legales' className='text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group'>
                    <Icon icon="ph:file-text" className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>Mentions Légales</span>
                  </Link>
                </li>
                <li>
                  <Link href='/politique-de-confidentialite' className='text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group'>
                    <Icon icon="ph:shield-check" className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>Confidentialité</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className='text-sm font-bold text-white mb-6 uppercase tracking-wider'>Contact</h5>
              <ul className='space-y-4'>
                <li>
                  <a href="tel:0622412515" className='text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group'>
                    <Icon icon="ph:phone" className="w-4 h-4 text-blue-400" />
                    <span>06 22 41 25 15</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@gositepro.fr" className='text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group'>
                    <Icon icon="ph:envelope-simple" className="w-4 h-4 text-purple-400" />
                    <span>contact@gositepro.fr</span>
                  </a>
                </li>
              </ul>

              {/* Trust badges */}
              <div className='flex items-center gap-2 mt-6'>
                <div className='py-1 px-2 bg-green-500/10 border border-green-500/20 rounded-md flex items-center gap-1.5'>
                  <Icon icon="ph:shield-check-fill" className="w-3.5 h-3.5 text-green-400" />
                  <span className='text-xs text-green-400 font-medium'>SSL</span>
                </div>
                <div className='py-1 px-2 bg-blue-500/10 border border-blue-500/20 rounded-md flex items-center gap-1.5'>
                  <Icon icon="ph:flag-fill" className="w-3.5 h-3.5 text-blue-400" />
                  <span className='text-xs text-blue-400 font-medium'>RGPD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-16 pt-8 border-t border-white/10'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-gray-500 text-center md:text-left'>
              © {currentYear} GoSitePro. Tous droits réservés.
            </p>
            <p className='text-sm text-gray-500 flex items-center gap-1'>
              Fait avec <Icon icon="ph:heart-fill" className="w-4 h-4 text-red-500 animate-pulse" /> en France
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

