import SocialMediaIcons from "../../common/social-media-icons"
import { Button } from "../../ui/button"

export default function Header() {
  return (
    <div className="flex items-center h-[calc(100vh-4.5em)]">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-medium mb-8">Hi, I'm Red Pangilinan</h1>
        <h2 className="text-3xl font-light text-zinc-500 dark:text-zinc-400 mb-8">
          A passionate and highly motivated full stack developer, driven by a
          strong desire to continuously explore and learn new technologies, with
          a focus on delivering performant applications.
        </h2>
        <SocialMediaIcons />
        <Button className="mt-8 w-[12rem]">Contact Me</Button>
      </div>
    </div>
  )
}
