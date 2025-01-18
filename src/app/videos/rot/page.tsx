import { videos } from '@/lib/site'
import PageTitle from '@/components/page-title'
import Video from '@/components/video'

export default function RotWatchPage() {
  return (
    <main className="flex w-full flex-col py-8">
      <PageTitle className="text-center">{videos[1].label}</PageTitle>
      <Video id={videos[1].code} />
    </main>
  )
}
