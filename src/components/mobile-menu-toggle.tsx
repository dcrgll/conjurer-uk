'use client'

import { Menu, X } from 'lucide-react'

interface MobileMenuToggleProps {
  isOpen: boolean
  onClick: () => void
}

export function MobileMenuToggle({ isOpen, onClick }: MobileMenuToggleProps) {
  return (
    <button
      className="rounded-md p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
      onClick={onClick}
    >
      <span className="sr-only">
        {isOpen ? 'Close main menu' : 'Open main menu'}
      </span>
      {isOpen ? (
        <X className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Menu className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  )
}
