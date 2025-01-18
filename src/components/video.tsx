export default function Video({ id }: { id: string }) {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col justify-center pt-16">
      <div className="flex items-center justify-center">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </section>
  )
}
