import Contact from "@/components/pages/contact"

export const metadata = {
  title: "Contact",
}

export default function Dashboard() {
  return (
    <main className="container py-4 sm:py-8 flex flex-col items-center">
      <Contact />
    </main>
  )
}
