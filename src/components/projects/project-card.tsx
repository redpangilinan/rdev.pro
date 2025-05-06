import Link from "next/link"
import { Repo } from "@/types"
import { Star } from "lucide-react"

import { CardDescription, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  project: Repo
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    repo = "Unknown Project",
    description = "No description available",
    stars = 0,
    link = "#",
  } = project || {}

  return (
    <Link
      target="_blank"
      href={link}
      rel="noopener noreferrer"
      aria-label={repo}
      className="flex flex-col justify-between gap-2 rounded p-4 hover:bg-muted"
    >
      <div className="flex flex-col gap-1">
        <CardTitle className="text-base">{repo}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm font-light">
          {description}
        </CardDescription>
      </div>
      <CardDescription className="flex items-center gap-1">
        <Star className="h-4 w-4" />
        {stars}
      </CardDescription>
    </Link>
  )
}
