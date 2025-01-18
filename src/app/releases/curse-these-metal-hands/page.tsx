import Image from 'next/image'

import Apple from '@/components/icons/apple'
import Bandcamp from '@/components/icons/bandcamp'
import Spotify from '@/components/icons/spotify'
import Vinyl from '@/components/icons/vinyl'

export default function CurseTheseMetalHands() {
  const album = {
    id: 1,
    name: 'Curse These Metal Hands w/ Pijn',
    href: '/releases/curse-these-metal-hands',
    imageSrc: 'https://f4.bcbits.com/img/a2153892266_10.jpg',
    imageAlt: 'Curse these metal hands Album Cover',
    release: 'August 16, 2019'
  }

  const socials = [
    {
      href: 'https://conjureruk.bandcamp.com/album/curse-these-metal-hands',
      Icon: Vinyl,
      color: 'bg-gray-400'
    },
    {
      href: 'https://conjureruk.bandcamp.com/album/curse-these-metal-hands',
      Icon: Bandcamp,
      color: 'bg-gray-500'
    },
    {
      href: 'https://open.spotify.com/album/4HiyIPuABzTs9aAUDnj9N5',
      Icon: Spotify,
      color: 'bg-green-500'
    },
    {
      href: 'https://music.apple.com/us/album/curse-these-metal-hands/1538492304',
      Icon: Apple,
      color: 'bg-red-400'
    }
  ]

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
            <a href="https://conjureruk.bandcamp.com/track/high-spirits">
              1. High Spirits
            </a>
            <a className="ml-2 text-sm text-gray-500">09:12</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/the-pall">
              2. The Pall
            </a>
            <a className="ml-2 text-sm text-gray-500">08:52</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/endeavour">
              3. Endeavour
            </a>
            <a className="ml-2 text-sm text-gray-500">02:21</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/sundays">
              4. Sunday
            </a>
            <a className="ml-2 text-sm text-gray-500">10:16</a>
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
