import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/#hero' className='flex items-center gap-3'>
      <Image
        src='/images/logo/gositeprologo.png'
        alt='GoSitePro Logo'
        width={40}
        height={40}
        className='object-contain h-10 w-auto'
        priority
      />
      <span className='text-2xl font-bold text-gray-900 dark:text-white'>GoSitePro</span>
    </Link>
  )
}

export default Logo
