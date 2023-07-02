import Hero from "../components/pages/home/hero"
import Projects from "../components/pages/home/projects"

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Projects />
      <div className="p-16"></div>
    </main>
  )
}
