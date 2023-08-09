import Link from "next/link"
import { siteConfig } from "@/../config/site"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold mb-2 sm:mb-0">
              /{siteConfig.name}
            </h1>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-zinc-500 dark:text-zinc-400 sm:mb-0">
            <li>
              <Link href="/" className="mr-4 hover:underline md:mr-6 ">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="mr-4 hover:underline md:mr-6 ">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/contact" className="mr-4 hover:underline md:mr-6">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-zinc-200 dark:border-zinc-800 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-zinc-500 dark:text-zinc-400 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href={siteConfig.links.github}
            className="hover:underline"
          >
            Red Pangilinan
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
