import Link from 'next/link'
import { ResponsiveNavbar } from './ResponsiveNavbar'
import ThemeSwitcher from './ThemeSwitcher'
import { buttonVariants } from './ui/button'
import { BiUserCircle } from 'react-icons/bi'


export const Navbar = ({className}: {className?: string}) => {
  return (
    <nav className={className}>
      <div className='container h-20 flex items-center justify-between'>
        <Link href={'/'} className='py-1 px-2 inline-flex items-center gap-1'>
          <BiUserCircle className='size-6'/>
          <span className='font-medium text-sm'>JEUNIH</span>
        </Link>
        <div className='flex items-center gap-4'>
          <ThemeSwitcher />
          <div className='hidden md:block'>
            <a href="#contact" className={buttonVariants({className: 'bg-gradient-to-br from-primary to-secondary py-6 px-8'})}>Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
