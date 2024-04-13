import { Repo } from "@/types"

import { siteConfig } from "@/config/site"
import { getRepo } from "@/lib/api/github"
import { HeadingText } from "@/components/common/heading-text"
import { SocialMediaIcons } from "@/components/common/social-media-icons"
import { ProjectCard } from "@/components/projects/project-card"

export default async function Home() {
  const data = (await getRepo()) as Repo[]

  return (
    <main className="py-2">
      <section className="py-4">
        <div className="space-y-4 p-4">
          <p className="font-light text-muted-foreground">Welcome to /rdev!</p>
          <p className="font-light">
            I'm a full-stack developer and I love open-source, I enjoy building
            apps in the JavaScript ecosystem and I like learning new
            technologies.
          </p>
          <p className="font-light">
            My favorite tech stack for building apps is{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">React</span>, and{" "}
            <span className="font-semibold">TypeScript</span> for the frontend
            and <span className="font-semibold">Django</span> and for the
            backend.
          </p>
        </div>
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
