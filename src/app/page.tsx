import Script from 'next/script'

import BandsInTown from '@/components/bands-in-town'
import Hero from '@/components/hero'
import PageTitle from '@/components/page-title'
import Video from '@/components/video'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Script src="https://widget.bandsintown.com/main.min.js" />

      <Hero />
      <section className="flex w-full flex-col py-8">
        <PageTitle className="text-center">Live Shows</PageTitle>

        <BandsInTown />
      </section>

      <section className="flex w-full flex-col py-8">
        <PageTitle className="text-center">Videos</PageTitle>
        <Video id="mjzFuNeAwNQ" />
        <Video id="nQy90xn-zvE" />
        <Video id="ZPl3qgZuCv8" />
      </section>
    </main>
  )
}
