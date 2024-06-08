import Link from 'next/link'
import { ResponsiveNavbar } from './ResponsiveNavbar'
import ThemeSwitcher from './ThemeSwitcher'
import { buttonVariants } from './ui/button'

export const NAVLINKS = [
  {
    name: 'Projects',
    href: '/services'
  },
  {
    name: 'Blogs',
    href: '/blogs'
  },
]

export const Navbar = ({className}: {className?: string}) => {
  return (
    <nav className={className}>
      <div className='container h-20 flex items-center justify-between'>
        <Link href={'/'}>
          <span className='text-4xl font-extrabold tracking-wider font-special'>JEUNIH</span>
        </Link>
        <div className='hidden md:flex items-center gap-6'>
          {NAVLINKS.map(link => 
            <Link key={link.name} className='capitalize tracking-wider group font-medium inline-flex px-4 py-2 hover_underline' href={link.href}>
              {link.name}
            </Link>
          )}
         
          <ThemeSwitcher />
          <Link className={buttonVariants({variant: 'default' , size: 'lg', className: 'h-12'})} href={'contact'}>Get in touch</Link>
        </div>
        <div className='inline-block md:hidden'>
          <ResponsiveNavbar />
        </div>
      </div>
    </nav>
  )
}
