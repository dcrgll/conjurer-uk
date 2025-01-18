import { videos } from '@/lib/site'
import PageTitle from '@/components/page-title'
import Video from '@/components/video'

export default function ItDwellsWatchPage() {
  return (
    <main className="flex w-full flex-col py-8">
      <PageTitle className="text-center">{videos[0].label}</PageTitle>
      <Video id={videos[0].code} />
    </main>
  )
}
