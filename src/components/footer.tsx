import Link from 'next/link'

import { socials } from '@/lib/site'

import Logo from './logo'
import Newsletter from './newsletter'

export default function Footer() {
  return (
    <footer className="w-full pb-4 pt-24">
      <Newsletter />
      <div className="flex flex-col gap-24">
        <nav className="flex w-full items-center justify-around gap-4">
          {Object.entries(socials).map(([key, { icon, href }]) => (
            <Link key={key} href={href} className="h-8 w-8 hover:opacity-65">
              {icon}
            </Link>
          ))}
        </nav>

        <div className="mx-auto w-full max-w-sm md:max-w-lg">
          <Logo />
        </div>

        <div className="flex justify-center gap-1 text-xs opacity-45">
          site by{' '}
          <Link href="https://cargill.dev" className="underline">
            cargill.dev
          </Link>
        </div>
      </div>
    </footer>
  )
}
