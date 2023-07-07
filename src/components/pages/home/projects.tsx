"use client"

import { siteConfig } from "../../../../config/site"
import { useQuery } from "@tanstack/react-query"
import { AiOutlineStar } from "react-icons/ai"
import { AiOutlineLink } from "react-icons/ai"
import { getRepo } from "@/lib/api/github"
import { Badge } from "@/components/ui/badge"
import { getTextColor } from "@/lib/get-text-color"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Projects() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: getRepo,
  })

  const repoData = data as Repo[]

  if (isLoading || isError) {
    return (
      <section className="py-16 px-8 md:px-0 lg:py-32">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Projects</h1>
        <div className="flex flex-col items-end">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="flex-grow">
                <CardHeader>
                  <Skeleton className="h-4 w-[50%] mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[10rem]" />
                </CardHeader>
                <CardFooter className="flex justify-between mt-2">
                  <Skeleton className="h-4 w-[5rem]" />
                  <Skeleton className="h-4 w-[2rem]" />
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

  return (
    <section className="py-16 px-8 md:px-0 lg:py-32">
      <h1 className="text-3xl lg:text-4xl font-bold mb-4">Projects</h1>
      <div className="flex flex-col items-end">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          {repoData.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between">
                  <a
                    target="_blank"
                    href={project.link}
                    rel="noopener noreferrer"
                    aria-label={project.description}
                  >
                    <CardTitle className="text-lg hover:underline">
                      {project.repo}
                    </CardTitle>
                  </a>
                  <a
                    target="_blank"
                    href={project.website || project.link}
                    rel="noopener noreferrer"
                    aria-label="Visit the project's live url/repo"
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
          href={`${siteConfig.links.github}?tab=repositories`}
          className="text-sm underline"
        >
          See More...
        </a>
      </div>
    </section>
  )
}
