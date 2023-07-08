interface HeadingProps {
  children: string
  subtext?: string
  className?: string
}

export default function HeadingText({
  children,
  subtext,
  className,
}: HeadingProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h1 className="text-3xl lg:text-4xl font-bold">{children}</h1>
      {subtext && (
        <h2 className="lg:text-lg font-light text-zinc-500 dark:text-zinc-400">
          {subtext}
        </h2>
      )}
    </div>
  )
}
