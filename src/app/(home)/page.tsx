import { Repo } from "@/types"

import { siteConfig } from "@/config/site"
import { getRepo } from "@/lib/api/github"
import { HeadingText } from "@/components/common/heading-text"
import { SocialMediaIcons } from "@/components/common/social-media-icons"
import { Introduction } from "@/components/introduction"
import { ProjectCard } from "@/components/projects/project-card"

export default async function Home() {
  const data = (await getRepo()) as Repo[]

  return (
    <main className="py-2">
      <section className="py-4">
        <Introduction />
        <SocialMediaIcons />
      </section>
      <section className="space-y-4 py-4">
        <div className="px-4">
          <HeadingText>Projects</HeadingText>
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            {data.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
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
    </main>
  )
}
