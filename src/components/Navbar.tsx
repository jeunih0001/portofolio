import Link from 'next/link'
import { ResponsiveNavbar } from './ResponsiveNavbar'
import ThemeSwitcher from './ThemeSwitcher'
import { buttonVariants } from './ui/button'


export const Navbar = ({className}: {className?: string}) => {
  return (
    <nav className={className}>
      <div className='container h-20 flex items-center justify-between'>
        <Link href={'/'}>
          <span className='text-4xl font-extrabold tracking-wider font-special'>JEUNIH</span>
        </Link>
        <div className='flex items-center gap-4'>
          <ThemeSwitcher />
          <a href="#contact" className={buttonVariants({className: 'bg-gradient-to-br from-primary to-secondary py-4 px-6'})}>Contact Me</a>
          <div className='inline-block md:hidden'>
            <ResponsiveNavbar />
          </div>
        </div>
      </div>
    </nav>
  )
}
