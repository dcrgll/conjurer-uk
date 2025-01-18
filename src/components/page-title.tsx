import clsx from 'clsx'

export default function PageTitle({
  children,
  className
}: {
  children: string
  className?: string
}) {
  return (
    <h1 className={clsx('text-4xl font-bold underline', className)}>
      {children}
    </h1>
  )
}
