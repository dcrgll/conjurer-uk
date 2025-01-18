import Script from 'next/script'

import { videos } from '@/lib/site'
import PageTitle from '@/components/page-title'
import Video from '@/components/video'

export default function LivePage() {
  return (
    <main className="py-8">
      <Script src="https://widget.bandsintown.com/main.min.js" />

      <div>
        <PageTitle className="text-center">Videos</PageTitle>
      </div>

      {Object.entries(videos).map(([key, url]) => (
        <Video key={key} id={url} />
      ))}
    </main>
  )
}
