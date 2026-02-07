import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/#hero' className='flex items-center gap-3'>
      <Image
        src='/images/logo/gositeprologo.webp'
        alt='GoSitePro Logo'
        width={80}
        height={80}
        className='object-contain h-10 w-auto'
        priority
      />
      <span className='text-2xl font-bold text-gray-900 dark:text-white'>
        GoSite<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Pro</span>
      </span>
    </Link>
  )
}

export default Logo
