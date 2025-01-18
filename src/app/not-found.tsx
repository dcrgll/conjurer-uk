import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col gap-4 py-8">
      <h1 className="text-center text-4xl">404 - Page Not Found</h1>
      <p className="text-center">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="flex w-full justify-center text-center underline"
      >
        Home
      </Link>
    </main>
  )
}
