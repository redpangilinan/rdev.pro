import { Star } from "lucide-react"
import { ExternalLink } from "lucide-react"

import { getRepo } from "@/lib/api/github"
import { getTextColor } from "@/lib/get-text-color"
import { Repo } from "@/types"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export async function Projects() {
  const data = (await getRepo()) as Repo[]

  return (
    <>
      {data.map((project, index) => (
        <Card key={index} className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex justify-between">
              <a
                target="_blank"
                href={project.link}
                rel="noopener noreferrer"
                aria-label={project.repo}
              >
                <CardTitle className="text-base hover:underline">
                  {project.repo}
                </CardTitle>
              </a>
              <a
                target="_blank"
                href={project.website || project.link}
                rel="noopener noreferrer"
                aria-label="Visit the project's live url/repo"
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
            <CardDescription className="line-clamp-2 text-sm font-light">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Badge
              style={{
                backgroundColor: `${project.languageColor}`,
                color: `${getTextColor(project.languageColor)}`,
              }}
            >
              {project.language}
            </Badge>
            <CardDescription className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {project.stars}
            </CardDescription>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
