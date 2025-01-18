import Image from 'next/image'

import Apple from '@/components/icons/apple'
import Bandcamp from '@/components/icons/bandcamp'
import Spotify from '@/components/icons/spotify'
import Vinyl from '@/components/icons/vinyl'

const album = {
  id: 1,
  name: 'I',
  href: '/releases/i',
  imageSrc: 'https://f4.bcbits.com/img/a1344113010_10.jpg',
  imageAlt: 'I album cover',
  release: 'July 16, 2016'
}

const socials = [
  {
    href: 'https://conjureruk.bandcamp.com/album/i',
    Icon: Vinyl,
    color: 'bg-gray-400'
  },
  {
    href: 'https://conjureruk.bandcamp.com/album/i',
    Icon: Bandcamp,
    color: 'bg-gray-500'
  },
  {
    href: 'https://open.spotify.com/album/7lbH1GGgp3n3cg9pn3kueP',
    Icon: Spotify,
    color: 'bg-green-500'
  },
  {
    href: 'https://music.apple.com/us/album/1548894570',
    Icon: Apple,
    color: 'bg-red-400'
  }
]

export default function I() {
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
            <a href="https://conjureruk.bandcamp.com/track/behold-the-swine">
              1. Behold The Swine
            </a>
            <a className="ml-2 text-sm text-gray-500">06:18</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/scorn">2. Scorn</a>
            <a className="ml-2 text-sm text-gray-500">03:43</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/a-chasm-forged-in-dread-and-disarray">
              3. A Chasm Forged In Dread And Disarray
            </a>
            <a className="ml-2 text-sm text-gray-500">05:41</a>
          </li>
          <li className="flex items-center">
            <a href="https://conjureruk.bandcamp.com/track/frail">4. Frail</a>
            <a className="ml-2 text-sm text-gray-500">07:20</a>
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
