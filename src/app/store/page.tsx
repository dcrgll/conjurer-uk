import Link from 'next/link'

import PageTitle from '@/components/page-title'

const stores = [
  {
    name: 'UK Store',
    href: 'https://conjureruk.bandcamp.com/merch',
    image: '/static/img/flags/uk.svg'
  },
  {
    name: 'EU Store',
    href: 'https://evilgreed.net/collections/conjurer',
    image: '/static/img/flags/eu.svg'
  },
  {
    name: 'US Store',
    href: 'https://www.nightshiftmerch.com/collections/conjurer',
    image: '/static/img/flags/us.svg'
  },
  {
    name: 'AU Store',
    href: 'https://imprintmerch.com.au/collections/conjurer',
    image: '/static/img/flags/au.svg'
  }
]

export default function StorePage() {
  return (
    <main className="py-8">
      <PageTitle className="text-center">Store</PageTitle>

      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {stores.map((store) => (
          <Link
            key={store.name}
            href={store.href}
            className="group relative block aspect-video overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${store.image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
            <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
              {store.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  )
}
