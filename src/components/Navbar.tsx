import Link from 'next/link'
import { ResponsiveNavbar } from './ResponsiveNavbar'

export const NAVLINKS = [
  {
    name: 'services',
    href: '/services'
  },
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
            <Link key={link.name} className='capitalize tracking-wider group inline-flex px-4 py-2 hover_underline' href={link.href}>
              {link.name}
            </Link>
          )}
         
          <Link className='capitalize tracking-wide group px-4 hover:bg-yellow-600 hover:shadow-xl font-medium transition-all py-4 bg-yellow-500 text-slate-50 rounded-md inline-flex justify-center' href={'contact'}>Get in touch</Link>
        </div>
        <div className='inline-block md:hidden'>
          <ResponsiveNavbar />
        </div>
      </div>
    </nav>
  )
}
