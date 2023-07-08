interface HeadingProps {
  children: string
  subtext?: string
}

export default function HeadingText({ children, subtext }: HeadingProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl lg:text-4xl font-bold">{children}</h1>
      {subtext && (
        <h2 className="lg:text-lg font-light text-zinc-500 dark:text-zinc-400">
          {subtext}
        </h2>
      )}
    </div>
  )
}
