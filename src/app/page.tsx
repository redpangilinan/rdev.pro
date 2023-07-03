import Hero from "../components/pages/home/hero"
import Projects from "../components/pages/home/projects"
import Skills from "../components/pages/home/skills"

export default function Home() {
  return (
    <>
      <Hero />
      <main className="container">
        <Skills />
        <Projects />
      </main>
    </>
  )
}
