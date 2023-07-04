import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "../components/layout/navbar"
import Footer from "../components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import QueryProvider from "./provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Red Pangilinan",
  description: "My personal portfolio website built in Nextjs.",
  icons: {
    icon: "./favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen text-zinc-950 bg-white dark:text-zinc-50 dark:bg-zinc-950`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            <Navbar />
            {children}
            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
