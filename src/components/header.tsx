'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NavLink } from '@/types'

import Logo from './logo'
import { MobileMenu } from './mobile-menu'
import { MobileMenuToggle } from './mobile-menu-toggle'
import { Button } from './ui/button'

const links: NavLink[] = [
  {
    label: 'Live Shows',
    href: '/live'
  },
  {
    label: 'Releases',
    href: '/releases'
  },
  {
    label: 'Store',
    href: '/store'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  return (
    <header className="flex items-center justify-between py-2 md:py-6">
      <Link href="/">
        <Logo className="w-[200px] pl-2 text-white" />
      </Link>

      <div className="pr-2">
        <MobileMenuToggle isOpen={isMobileMenuOpen} onClick={toggleMenu} />

        <nav className="hidden gap-4 md:flex">
          {links.map(({ label, href }) => (
            <Button asChild key={label} variant="ghost">
              <Link href={href} className="font-semibold">
                {label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={toggleMenu}
            links={links}
          />
        </div>
      </div>
    </header>
  )
}
