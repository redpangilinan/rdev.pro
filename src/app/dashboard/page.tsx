import { Suspense } from "react"
import { getCodingStats } from "@/lib/api/wakatime"
import DashboardSkeleton from "@/components/loaders/dashboard-skeleton"
import Languages from "@/components/pages/dashboard/languages"
import CodeTime from "@/components/pages/dashboard/code-time"
import HeadingText from "@/components/common/heading-text"

export const metadata = {
  title: "Dashboard",
}

interface ResponseData {
  data: {
    human_readable_range: string
    human_readable_total_including_other_language: string
    languages: Languages[]
  }
}

export default async function Dashboard() {
  const data = (await getCodingStats()) as ResponseData

  const started = data.data.human_readable_range
  const totalTime = data.data.human_readable_total_including_other_language
  const languages: Languages[] = data.data.languages

  return (
    <main className="flex flex-col items-center py-8">
      <div className="space-y-4">
        <HeadingText subtext="Statistics about my coding hours">
          Dashboard
        </HeadingText>
        <div className="flex flex-wrap gap-2">
          <Suspense fallback={<DashboardSkeleton />}>
            <CodeTime
              started={started}
              totalTime={totalTime}
              languages={languages}
            />
            <Languages languages={languages} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
