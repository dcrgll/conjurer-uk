'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { NavLink } from '@/types'

import { socials } from '@/lib/site'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: NavLink[]
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      menuRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto bg-background"
      tabIndex={-1}
    >
      <div className="flex h-full flex-col">
        <nav className="flex-grow p-4">
          <ul className="mt-4 space-y-12 px-4">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-5xl font-bold text-foreground hover:underline"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="mb-4 flex w-full">
          {Object.entries(socials).map(([key, { icon, href }]) => (
            <Link key={key} href={href} className="w-full">
              {icon}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
