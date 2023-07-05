import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import { siteConfig } from "../../../config/site"

export default function SocialMediaIcons() {
  return (
    <div className="flex gap-3">
      <a
        target="_blank"
        href={siteConfig.links.github}
        rel="noopener noreferrer"
        aria-label="Github"
        className="text-4xl text-github dark:text-zinc-300 hover:scale-125 duration-200"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        href={siteConfig.links.facebook}
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-4xl text-facebook hover:scale-125 duration-200"
      >
        <FaFacebook />
      </a>
      <a
        target="_blank"
        href={siteConfig.links.twitter}
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="text-4xl text-twitter hover:scale-125 duration-200"
      >
        <FaTwitter />
      </a>
      <a
        target="_blank"
        href={siteConfig.links.linkedin}
        rel="noopener noreferrer"
        aria-label="Linkedin"
        className="text-4xl text-linkedin hover:scale-125 duration-200"
      >
        <FaLinkedin />
      </a>
    </div>
  )
}
