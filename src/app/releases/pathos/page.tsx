import Image from 'next/image'

import Apple from '@/components/icons/apple'
import Bandcamp from '@/components/icons/bandcamp'
import Spotify from '@/components/icons/spotify'
import Vinyl from '@/components/icons/vinyl'

const album = {
  id: 1,
  name: 'Páthos',
  href: '/releases/pathos',
  imageSrc: 'https://f4.bcbits.com/img/a1861033443_10.jpg',
  imageAlt: 'Pathos album cover',
  release: 'July 1, 2022'
}

const socials = [
  {
    href: 'https://conjureruk.bandcamp.com/album/pathos',
    Icon: Vinyl,
    color: 'bg-gray-400'
  },
  {
    href: 'https://conjureruk.bandcamp.com/album/pathos',
    Icon: Bandcamp,
    color: 'bg-gray-500'
  },
  {
    href: 'https://open.spotify.com/album/602wn38YItSknzxdpiXl69?si=a_rhB9YLRfSulVOjy7YekA',
    Icon: Spotify,
    color: 'bg-green-500'
  },
  {
    href: 'https://music.apple.com/us/album/p%C3%A1thos/1609626384',
    Icon: Apple,
    color: 'bg-red-400'
  }
]
export default function Pathos() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col py-16 md:flex-row">
      <div className="flex flex-col items-center">
        <Image
          src={album.imageSrc}
          alt={album.imageAlt}
          className="w-2/3 object-contain"
          height={400}
          width={400}
        />
        <div className="mt-2 flex w-2/3 flex-col items-center justify-between text-white">
          <h1 className="text-center font-serif text-2xl text-white">
            {album.name}
          </h1>
          <h4>released: {album.release} </h4>
        </div>
      </div>
      <div className="text-white md:w-1/2">
        <h4 className="mt-4 text-4xl">Tracklist</h4>
        <ol className="mt-4 text-2xl">
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/it-dwells">
              1. It Dwells
            </a>
            <a className="ml-2 text-sm text-gray-500">07:05</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/rot">2. Rot</a>
            <a className="ml-2 text-sm text-gray-500">06:19</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/all-you-will-remember">
              3. All You Will Remember
            </a>
            <a className="ml-2 text-sm text-gray-500">07:25</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/basilisk">
              4. Basilisk
            </a>
            <a className="ml-2 text-sm text-gray-500">05:14</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/those-years-condemned">
              5. Those Years, Condemned
            </a>
            <a className="ml-2 text-sm text-gray-500">07:38</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/suffer-alone">
              6. Suffer Alone
            </a>
            <a className="ml-2 text-sm text-gray-500">02:23</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/in-your-wake">
              7. In Your Wake
            </a>
            <a className="ml-2 text-sm text-gray-500">06:39</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/cracks-in-the-pyre">
              8. Cracks In The Pyre
            </a>
            <a className="ml-2 text-sm text-gray-500">07:22</a>
          </li>
        </ol>
        <hr className="border-1 my-8 w-full border-gray-800" />
        <div className="px-4">
          <h4 className="mt-8 text-4xl">Listen</h4>
          <div className="mt-4 grid grid-cols-4 space-x-4">
            {socials.map((social, i) => {
              return (
                <div className="mt-1" key={i}>
                  <a
                    className={`relative flex w-full items-center justify-center rounded-md py-2 text-white ${social.color}`}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <social.Icon className="h-6 w-6" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
