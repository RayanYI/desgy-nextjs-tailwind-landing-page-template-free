'use client'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black overflow-hidden' id='footer'>
      <div className='mx-auto max-w-7xl pt-24 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-y-12 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>
          {/* COLUMN-1 */}
          <div className='col-span-12 lg:col-span-4 min-w-0'>
            <h4 className='text-white text-3xl font-bold leading-9 mb-4'>
              GoSitePro
            </h4>
            <p className='text-gray-400 mb-8 break-words text-base leading-relaxed max-w-[85vw] sm:max-w-none'>
              Experts en création de sites web performants pour les professionnels exigeants.
            </p>
            <div className='flex items-center gap-4'>
              {/* Social icons removed as requested */}
            </div>
          </div>

          {/* LINKS */}
          <div className='col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 min-w-0'>
            <div>
              <h5 className='text-white text-xl font-bold mb-6'>Liens Rapides</h5>
              <ul className='space-y-4 max-w-[85vw] sm:max-w-none'>
                <li><Link href='/#hero' className='text-gray-400 hover:text-white cursor-pointer'>Accueil</Link></li>
                <li><Link href='/#pricing' className='text-gray-400 hover:text-white cursor-pointer'>Tarifs</Link></li>
                <li><Link href='/#contact' className='text-gray-400 hover:text-white cursor-pointer'>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className='text-white text-xl font-bold mb-6'>Légal</h5>
              <ul className='space-y-4 max-w-[85vw] sm:max-w-none'>
                <li><Link href='/mentions-legales' className='text-gray-400 hover:text-white'>Mentions Légales</Link></li>
                <li><Link href='/politique-de-confidentialite' className='text-gray-400 hover:text-white block break-words'>Politique de confidentialité</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='pt-5 pb-5 border-t border-white/30'>
          <div className='mt-4 flex flex-col md:flex-row justify-center md:justify-between items-center'>
            <p className='text-center md:text-start text-white text-base max-w-[85vw] sm:max-w-none mx-auto md:mx-0'>
              @2026 - GoSitePro. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
