"use client"

import { useState } from "react"
import Link from "next/link"
import { ModeToggle } from "../mode-toggle"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)

  const handleClick = async () => {
    setNavbar(false)
  }

  return (
    <nav className="w-full dark:bg-zinc-950 mb-4 md:mb-0 select-none">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" onClick={handleClick}>
              <h2 className="text-2xl font-bold hover:scale-[1.10] duration-200">
                Red Pangilinan
              </h2>
            </Link>
            <div className="md:hidden flex gap-1">
              <button
                className="p-2 text-zinc-700 rounded-md outline-none focus:border-zinc-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
              <ModeToggle />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center border p-4 rounded-md md:block md:p-0 md:mt-0 md:border-none ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="hover:text-blue-300">
                <Link href="/" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-300">
                <Link href="/about" onClick={handleClick}>
                  About
                </Link>
              </li>
              <li className="hover:text-blue-300">
                <Link href="/contact" onClick={handleClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
