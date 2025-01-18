import Image from 'next/image'

import Apple from '@/components/icons/apple'
import Bandcamp from '@/components/icons/bandcamp'
import Spotify from '@/components/icons/spotify'
import Vinyl from '@/components/icons/vinyl'

const album = {
  id: 1,
  name: 'Mire',
  href: '/releases/mire',
  imageSrc: 'https://f4.bcbits.com/img/a1293951597_16.jpg',
  imageAlt: 'Mire Album Cover',
  release: 'March 9, 2018'
}

const socials = [
  {
    href: 'https://conjureruk.bandcamp.com/album/mire',
    Icon: Vinyl,
    color: 'bg-gray-400'
  },
  {
    href: 'https://conjureruk.bandcamp.com/album/mire',
    Icon: Bandcamp,
    color: 'bg-gray-500'
  },
  {
    href: 'https://open.spotify.com/artist/38eUVFRyGFT6VnEbaFRScQ',
    Icon: Spotify,
    color: 'bg-green-500'
  },
  {
    href: 'https://music.apple.com/gb/album/mire/1548894869',
    Icon: Apple,
    color: 'bg-red-400'
  }
]
export default function Mire() {
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
            <a href="https://conjureruk.bandcamp.com/track/choke-2">1. Choke</a>
            <a className="ml-2 text-sm text-gray-500">06:00</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/hollow-2">
              2. Hollow
            </a>
            <a className="ml-2 text-sm text-gray-500">06:33</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/thankless-2">
              3. Thankless
            </a>
            <a className="ml-2 text-sm text-gray-500">08:32</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/retch-2">4. Retch</a>
            <a className="ml-2 text-sm text-gray-500">03:14</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/the-mire-2">
              5. The Mire
            </a>
            <a className="ml-2 text-sm text-gray-500">04:13</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/of-flesh-weaker-than-ash-2">
              6. Of Flesh Weaker Than Ash
            </a>
            <a className="ml-2 text-sm text-gray-500">07:13</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/hadal-2">7. Hadal</a>
            <a className="ml-2 text-sm text-gray-500">08:08</a>
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
