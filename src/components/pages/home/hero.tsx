import Link from "next/link"
import SocialMediaIcons from "../../common/social-media-icons"
import { Button } from "../../ui/button"

export default function Hero() {
  return (
    <header className="md:container">
      <div className="py-16 px-8 md:px-0 lg:py-32 flex flex-col items-center text-center gap-8">
        <h1 className="text-5xl lg:text-6xl font-bold">
          Hi, I'm Red Pangilinan
        </h1>
        <h2 className="text-lg lg:text-3xl font-light text-zinc-500 dark:text-zinc-400">
          A passionate and highly motivated full-stack developer, continuously
          exploring and learning cutting-edge technologies, with a focus on
          delivering performant applications
        </h2>
        <SocialMediaIcons />
        <Link href="/contact">
          <Button className="w-[12rem]">Contact Me</Button>
        </Link>
      </div>
    </header>
  )
}
