import Image from 'next/image'
import Link from 'next/link'

import PageTitle from '@/components/page-title'

const contacts = [
  {
    href: 'james@atonal.agency',
    label: 'Bookings:'
  },

  {
    label: 'PR',
    href: 'matt@holdtightpr.com'
  }
]

export default function ContactPage() {
  return (
    <main className="container flex flex-col justify-between px-2 lg:flex-row">
      <div className="flex flex-col justify-center py-8">
        <PageTitle>Contact</PageTitle>

        <ul className="pt-8 text-xl font-bold lg:text-2xl">
          {contacts.map(({ href, label }) => (
            <li key={label} className="flex gap-1">
              <span>{label}</span>
              <Link href={`mailto:${href}`} className="underline">
                {href}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Image
          className="mx-auto"
          src="/static/img/pathos-cover.webp"
          alt="Pathos album cover"
          width={410}
          height={410}
          priority
        />
      </div>
    </main>
  )
}
