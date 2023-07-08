import Languages from "@/components/pages/dashboard/languages"
import CodeTime from "@/components/pages/dashboard/code-time"
import HeadingText from "@/components/common/heading-text"

export const metadata = {
  title: "Dashboard",
}

export default function Dashboard() {
  return (
    <main className="container py-4 sm:py-8 flex flex-col items-center">
      <div className="space-y-4">
        <HeadingText subtext="Statistics about my coding hours">
          Dashboard
        </HeadingText>
        <div className="flex flex-wrap gap-2">
          <CodeTime />
          <Languages />
        </div>
      </div>
    </main>
  )
}
