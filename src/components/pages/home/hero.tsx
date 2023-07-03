import SocialMediaIcons from "../../common/social-media-icons"
import { Button } from "../../ui/button"

export default function Hero() {
  return (
    <header>
      <div className="container pt-16 pb-20 md:p-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Hi, I'm Red Pangilinan
        </h1>
        <h2 className="text-lg md:text-3xl font-light text-zinc-500 dark:text-zinc-400 mb-8">
          A passionate and highly motivated full-stack developer, continuously
          exploring and learning cutting-edge technologies, with a focus on
          delivering performant applications
        </h2>
        <SocialMediaIcons />
        <Button className="mt-8 w-[12rem]">Contact Me</Button>
      </div>
    </header>
  )
}
