import Image from 'next/image'
import Link from 'next/link'

import Apple from './icons/apple'
import Spotify from './icons/spotify'
import Tidal from './icons/tidal'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="flex w-full flex-col justify-around gap-8 py-8 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <h1 className="text-center font-serif text-6xl text-white">PÁTHOS</h1>
        <h4 className="text-center text-xl text-white">
          The sophomore album by Conjurer
        </h4>
        <h4 className="text-center text-xl text-white">
          out now via Nuclear Blast Records
        </h4>
        <div className="mt-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            {socials.map((social) => (
              <Button
                className={`mt-1 rounded-lg ${social.color} mx-auto w-full max-w-[400px] py-2`}
                asChild
                key={social.text}
                size="lg"
              >
                <Link
                  className={`relative w-full ${
                    social.color === 'bg-white' ? 'text-black' : 'text-white'
                  }`}
                  href={social.href}
                >
                  <social.Icon className="absolute left-5 h-6 w-6" />
                  <span className="block w-full text-center">
                    {social.text}
                  </span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center lg:w-1/2">
        <Image
          className=""
          src="/static/img/pathos-cover.webp"
          alt="Pathos album cover"
          priority
          width={410}
          height={410}
        />
      </div>
    </section>
  )
}

const socials = [
  {
    href: 'https://conjureruk.bandcamp.com/merch',
    Icon: () => <>🇬🇧</>,
    text: 'UK STORE',
    color: 'bg-gray-800'
  },
  {
    href: 'https://evilgreed.net/collections/conjurer',
    Icon: () => <>🇪🇺</>,
    text: 'EU STORE',
    color: 'bg-gray-800'
  },
  {
    href: 'https://www.nightshiftmerch.com/collections/conjurer',
    Icon: () => <>🇺🇸</>,
    text: 'USA STORE',
    color: 'bg-gray-800'
  },
  {
    href: 'https://imprintmerch.com.au/collections/conjurer',
    Icon: () => <>🇦🇺</>,
    text: 'Australia Store',
    color: 'bg-gray-800'
  },
  {
    href: 'https://open.spotify.com/artist/38eUVFRyGFT6VnEbaFRScQ',
    Icon: Spotify,
    text: 'Spotify',
    color: 'bg-green-700'
  },
  {
    href: 'https://music.apple.com/gb/artist/conjurer/1313801006',
    Icon: Apple,
    text: 'Apple Music',
    color: 'bg-red-400'
  },
  {
    href: 'https://tidal.com/browse/artist/7185952',
    Icon: Tidal,
    text: 'Tidal',
    color: 'bg-white'
  }
]

{
  /* // <section className="flex min-h-screen flex-col-reverse lg:flex-row">
    //   <div className="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    //     <div className="mx-auto w-full max-w-sm">
    //       <div className="mt-8">
    //         <h4 className="text-center font-serif text-6xl text-white">
    //           PÁTHOS
    //         </h4>
    //         <h4 className="text-center text-xl text-white">
    //           The sophomore album by Conjurer
    //         </h4>
    //         <h4 className="text-center text-xl text-white">
    //           out now via Nuclear Blast Records
    //         </h4>
    //         <div className="mt-6 w-full">
    //           <div className="space-y-4">
    //             {socials.map((social) => ( */
}
//               <Button
//                 className={`mt-1 rounded-lg ${social.color} py-2`}
//                 asChild
//                 key={social.text}
//               >
//                 <Link
//                   className={`relative w-full ${
//                     social.color === 'bg-white'
//                       ? 'text-black'
//                       : 'text-white'
//                   }`}
//                   href={social.href}
//                 >
//                   <social.Icon className="absolute left-5 h-6 w-6" />
//                   <span className="block w-full text-center">
//                     {social.text}
//                   </span>
//                 </Link>
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="relative w-full flex-1 items-center justify-center lg:flex">
//     <Image
//       className="inset-0 h-auto object-cover lg:w-4/5"
//       src="/static/img/pathos-cover.webp"
//       alt="Pathos album cover"
//       priority
//       width={820}
//       height={820}
//     />
//   </div>
// </section>
