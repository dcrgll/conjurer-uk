import { videos } from '@/lib/site'
import PageTitle from '@/components/page-title'
import Video from '@/components/video'

export default function CracksInThePyreWatchPage() {
  return (
    <main className="flex w-full flex-col py-8">
      <PageTitle className="text-center">{videos[2].label}</PageTitle>
      <Video id={videos[2].code} />
    </main>
  )
}
