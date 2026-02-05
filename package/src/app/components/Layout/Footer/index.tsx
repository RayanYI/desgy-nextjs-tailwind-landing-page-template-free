'use client'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black' id='footer'>
      <div className='container mx-auto max-w-2xl pt-24 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>
          {/* COLUMN-1 */}
          <div className='col-span-12 lg:col-span-4'>
            <h4 className='text-white text-3xl font-bold leading-9 mb-4'>
              GoSitePro
            </h4>
            <p className='text-gray-400 mb-8'>
              Experts en création de sites web performants pour les professionnels exigeants.
            </p>
            <div className='flex items-center gap-4'>
              {/* Social icons can remain or be removed. Keeping them for visual consistency with template */}
              <div className='footer-icons'>
                <Link href='#'>
                  <Image
                    src={'/images/footer/vec.svg'}
                    alt='facebook'
                    width={15}
                    height={20}
                  />
                </Link>
              </div>
              <div className='footer-icons'>
                <Link href='#'>
                  <Image
                    src={'/images/footer/twitter.svg'}
                    alt='twitter'
                    width={25}
                    height={20}
                  />
                </Link>
              </div>
              <div className='footer-icons'>
                <Link href='#'>
                  <Image
                    src={'/images/footer/instagram.svg'}
                    alt='instagram'
                    width={25}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className='col-span-12 lg:col-span-8 grid grid-cols-2 gap-8'>
            <div>
              <h5 className='text-white text-xl font-bold mb-6'>Liens Rapides</h5>
              <ul className='space-y-4'>
                <li><Link href='#' className='text-gray-400 hover:text-white'>Accueil</Link></li>
                <li><Link href='#pricing' className='text-gray-400 hover:text-white'>Tarifs</Link></li>
                <li><Link href='mailto:contact@gositepro.fr' className='text-gray-400 hover:text-white'>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className='text-white text-xl font-bold mb-6'>Légal</h5>
              <ul className='space-y-4'>
                <li><Link href='#' className='text-gray-400 hover:text-white'>Mentions Légales</Link></li>
                <li><Link href='#' className='text-gray-400 hover:text-white'>Politique de confidentialité</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className='mx-auto max-w-2xl lg:max-w-7xl'>
        <div className='pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-t border-white/30'>
          <div className='mt-4 flex flex-col md:flex-row justify-center md:justify-between items-center'>
            <p className='text-center md:text-start text-white text-base'>
              @2025 - GoSitePro. Tous droits réservés.
            </p>
            <p className='text-center md:text-end text-gray-500 text-sm mt-2 md:mt-0'>
              Design inspired by Desgy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
