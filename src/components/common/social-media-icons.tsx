import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import { siteConfig } from "@/../config/site"

export function SocialMediaIcons() {
  return (
    <div className="flex gap-2">
      <a
        target="_blank"
        href={siteConfig.links.github}
        rel="noopener noreferrer"
        aria-label="Github"
        className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        href={siteConfig.links.facebook}
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <FaFacebook />
      </a>
      <a
        target="_blank"
        href={siteConfig.links.twitter}
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <FaTwitter />
      </a>
      <a
        target="_blank"
        href={siteConfig.links.linkedin}
        rel="noopener noreferrer"
        aria-label="Linkedin"
        className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <FaLinkedin />
      </a>
    </div>
  )
}
