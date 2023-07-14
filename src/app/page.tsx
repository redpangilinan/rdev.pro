import { Suspense } from "react"
import { siteConfig } from "@/../config/site"
import Hero from "@/components/pages/home/hero"
import Projects from "@/components/pages/home/projects"
import Skills from "@/components/pages/home/skills"
import HeadingText from "@/components/common/heading-text"
import ProjectsSkeleton from "@/components/loaders/projects-skeleton"

export const runtime = "edge"

export default function Home() {
  return (
    <>
      <Hero />
      <main className="md:container">
        <Skills />
        <section className="py-16 px-8 md:px-0 lg:py-32 space-y-4">
          <HeadingText>Projects</HeadingText>
          <div className="flex flex-col items-end gap-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <Suspense fallback={<ProjectsSkeleton />}>
                <Projects />
              </Suspense>
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
      </main>
    </>
  )
}
