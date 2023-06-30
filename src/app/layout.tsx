import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "../components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Red Pangilinan",
  description: "My personal portfolio website built in Nextjs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-zinc-950 bg-white dark:text-zinc-300 dark:bg-zinc-950`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
