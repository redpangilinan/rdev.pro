import { Repo } from "@/types"

import { siteConfig } from "@/config/site"
import { getRepo } from "@/lib/api/github"
import { HeadingText } from "@/components/common/heading-text"
import { SocialMediaIcons } from "@/components/common/social-media-icons"
import { Introduction } from "@/components/introduction"
import { ProjectsSkeleton } from "@/components/loaders/projects-skeleton"
import { ProjectCard } from "@/components/projects/project-card"

interface RepoData {
  error?: string
  data?: Repo[]
}

export default async function Home() {
  let data: RepoData | Repo[] = []

  try {
    data = (await getRepo()) as Repo[] | RepoData
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error)
    data = { error: "Failed to fetch projects" }
  }

  const hasError = !data || "error" in data
  const hasValidProjects = !hasError && Array.isArray(data) && data.length > 0

  const introSection = (
    <section className="py-4">
      <Introduction />
      <SocialMediaIcons />
    </section>
  )

  const projectsSection = (
    <section className="space-y-4 py-4">
      <div className="px-4">
        <HeadingText>Projects</HeadingText>
      </div>
      <div className="flex flex-col items-end gap-4">
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          {hasValidProjects ? (
            (data as Repo[]).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          ) : (
            <>
              {hasError && (
                <div className="col-span-full rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                  <p className="text-sm text-muted-foreground">
                    {(data as RepoData).error ||
                      "Unable to load projects at this time. Please try again later."}
                  </p>
                </div>
              )}
              <ProjectsSkeleton />
            </>
          )}
        </div>
        <a
          target="_blank"
          href={`${siteConfig.links.github}?tab=repositories`}
          className="px-4 text-sm underline"
        >
          See More...
        </a>
      </div>
    </section>
  )

  return (
    <main className="py-2">
      {introSection}
      {projectsSection}
    </main>
  )
}
