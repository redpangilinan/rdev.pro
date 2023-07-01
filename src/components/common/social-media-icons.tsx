import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

export default function SocialMediaIcons() {
  return (
    <div className="flex gap-3">
      <a
        target="_blank"
        href="https://github.com/redpangilinan"
        rel="noopener noreferrer"
        className="text-4xl text-github dark:text-zinc-300 hover:scale-125 duration-200"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        href="https://facebook.com/redpangilinan15"
        rel="noopener noreferrer"
        className="text-4xl text-facebook hover:scale-125 duration-200"
      >
        <FaFacebook />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/_rdev7"
        rel="noopener noreferrer"
        className="text-4xl text-twitter hover:scale-125 duration-200"
      >
        <FaTwitter />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/jan-reynald-pangilinan/"
        rel="noopener noreferrer"
        className="text-4xl text-linkedin hover:scale-125 duration-200"
      >
        <FaLinkedin />
      </a>
    </div>
  )
}
