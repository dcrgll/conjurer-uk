import Image from 'next/image'
import Link from 'next/link'

export default function Releases() {
  const albums = [
    {
      id: 0,
      name: 'Páthos',
      href: '/releases/pathos',
      price: '$48',
      imageSrc: 'https://f4.bcbits.com/img/a1861033443_10.jpg',
      imageAlt:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
    },
    {
      id: 1,
      name: 'Mire',
      href: '/releases/mire',
      price: '$48',
      imageSrc: 'https://f4.bcbits.com/img/a1293951597_16.jpg',
      imageAlt:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
    },
    {
      id: 2,
      name: 'Conjurer x Palm Reader Split | PWYW ',
      href: '/releases/conjurer-x-palm-reader-split',
      price: '$89',
      imageSrc: 'https://f4.bcbits.com/img/a0442713678_16.jpg',
      imageAlt:
        'Person using a pen to cross a task off a productivity paper card.'
    },
    {
      id: 3,
      name: 'Curse These Metal Hands | PWYW ',
      href: '/releases/curse-these-metal-hands',
      price: '$89',
      imageSrc: 'https://f4.bcbits.com/img/a2153892266_16.jpg',
      imageAlt:
        'Person using a pen to cross a task off a productivity paper card.'
    },
    {
      id: 4,
      name: 'I',
      href: '/releases/i',
      price: '$35',
      imageSrc: 'https://f4.bcbits.com/img/a1344113010_16.jpg',
      imageAlt:
        'Hand holding black machined steel mechanical pencil with brass tip and top.'
    }
  ]

  return (
    <>
      <div className="mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {albums.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover object-center group-hover:opacity-90"
                />
              </div>
              <p className="mt-2 text-white">{product.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export const metadata = {
  title: 'Releases'
}
