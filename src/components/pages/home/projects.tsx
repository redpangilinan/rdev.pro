"use client"

import { useQuery } from "@tanstack/react-query"
import { getRepo } from "@/lib/api/discord"
import { Badge } from "@/components/ui/badge"
import { getTextColor } from "@/lib/getTextColor"
import { AiOutlineStar } from "react-icons/ai"
import { AiOutlineLink } from "react-icons/ai"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Repo = {
  repo: string
  description: string
  language: string
  languageColor: string
  stars: number
  link: string
  website: string
}

export default function Projects() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: getRepo,
  })

  const repoData = data as Repo[]

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error!</div>
  }

  return (
    <section>
      <h1 className="text-4xl mb-4">Projects</h1>
      <div className="flex flex-col items-end">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {repoData.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between">
                  <a
                    target="_blank"
                    href={project.link}
                    rel="noopener noreferrer"
                  >
                    <CardTitle className="text-lg hover:underline">
                      {project.repo}
                    </CardTitle>
                  </a>
                  <a
                    target="_blank"
                    href={project.website || project.link}
                    rel="noopener noreferrer"
                  >
                    <AiOutlineLink />
                  </a>
                </div>
                <CardDescription>{project.description}</CardDescription>
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
                <CardDescription className="flex gap-1">
                  <AiOutlineStar className="text-lg" />
                  {project.stars}
                </CardDescription>
              </CardFooter>
            </Card>
          ))}
        </div>
        <a
          target="_blank"
          href="https://github.com/redpangilinan?tab=repositories"
          className="text-sm underline"
        >
          See More
        </a>
      </div>
    </section>
  )
}
