import Link from 'next/link'
import { ResponsiveNavbar } from './ResponsiveNavbar'
import ThemeSwitcher from './ThemeSwitcher'
import { buttonVariants } from './ui/button'

export const NAVLINKS = [
  {
    name: 'Projects',
    href: '/projects'
  },
  {
    name: 'Blogs',
    href: '/blogs'
  },
  {
    name: 'Contact Me',
    href: '/contact'
  },
]

export const Navbar = ({className}: {className?: string}) => {
  return (
    <nav className={className}>
      <div className='container h-20 flex items-center justify-between'>
        <Link href={'/'}>
          <span className='text-4xl font-extrabold tracking-wider font-special'>JEUNIH</span>
        </Link>
        <div className='flex items-center gap-4'>
          <div className='hidden md:flex items-center gap-6'>
            {NAVLINKS.map(link => 
              <Link key={link.name} className='capitalize tracking-wider group font-medium inline-flex px-4 py-2 hover_underline' href={link.href}>
                {link.name}
              </Link>
            )}
          </div>
          <ThemeSwitcher />
          <div className='inline-block md:hidden'>
            <ResponsiveNavbar />
          </div>
        </div>
      </div>
    </nav>
  )
}
