import Script from 'next/script'

import BandsInTown from '@/components/bands-in-town'
import PageTitle from '@/components/page-title'

export default function LivePage() {
  return (
    <main className="py-8">
      <Script src="https://widget.bandsintown.com/main.min.js" />

      <div>
        <PageTitle className="text-center">Live Shows</PageTitle>
      </div>

      <BandsInTown />
    </main>
  )
}
