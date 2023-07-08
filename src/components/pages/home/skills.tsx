import { Badge } from "@/components/ui/badge"
import HeadingText from "@/components/common/heading-text"

export default function Skills() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "Tailwind",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "SCSS",
    "Jquery",
    "React",
    "Nextjs",
    "Nodejs",
    "Express",
    "PHP",
    "Python",
    "Java",
    "C#",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "Git",
  ]

  return (
    <section className="py-16 px-8 lg:p-32 bg-zinc-50 dark:bg-zinc-900 md:rounded-lg">
      <div className="flex flex-col lg:flex-row-reverse gap-16">
        <img
          className="hidden lg:block select-none"
          src="/pc-logo.svg"
          alt="PC Logo"
          width={400}
          height={400}
        />
        <div>
          <HeadingText className="mb-4">What I do</HeadingText>
          <p className="lg:text-lg text-zinc-500 dark:text-zinc-400 mb-6">
            I build full-stack web applications with responsive user interfaces
            using modern technologies to streamline the development as well as
            deliver robust applications that enhance user experience. I'm also
            proficient at integrating third-party services to improve the
            versatility of the applications I create, along with having
            expertise in building REST APIs. With a passion for delivering
            innovative and user-centric solutions, I'm committed to providing
            seamless experiences across all devices and platforms.
          </p>
          <HeadingText className="mb-4">Technologies I work with</HeadingText>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                className="lg:text-sm bg-zinc-500 dark:bg-zinc-300"
                key={skill}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
