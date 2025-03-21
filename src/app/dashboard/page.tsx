import { Languages as LanguagesType } from "@/types"

import { getCodingStats } from "@/lib/api/wakatime"
import { HeadingText } from "@/components/common/heading-text"
import { CodeTime } from "@/components/dashboard/code-time"
import { Languages } from "@/components/dashboard/languages"
import { DashboardSkeleton } from "@/components/loaders/dashboard-skeleton"

export const metadata = {
  title: "Dashboard",
  description: "Statistics about my activities",
}

interface ResponseData {
  data: {
    human_readable_range: string
    human_readable_total_including_other_language: string
    languages: LanguagesType[]
  }
  error?: string
}

export default async function Dashboard() {
  const data = (await getCodingStats()) as ResponseData

  if (!data || data.error) {
    return (
      <main className="items-center px-4 py-8">
        <div className="space-y-4">
          <HeadingText subtext="Statistics about my activities">
            Dashboard
          </HeadingText>
          <div className="flex flex-wrap gap-2">
            <DashboardSkeleton />
          </div>
        </div>
      </main>
    )
  }

  const started = data.data.human_readable_range
  const totalTime = data.data.human_readable_total_including_other_language
  const languages: LanguagesType[] = data.data.languages

  return (
    <main className="items-center px-4 py-8">
      <div className="space-y-4">
        <HeadingText subtext="Statistics about my activities">
          Dashboard
        </HeadingText>
        <div className="flex flex-wrap gap-2">
          <CodeTime
            started={started}
            totalTime={totalTime}
            languages={languages}
          />
          <Languages languages={languages} />
        </div>
      </div>
    </main>
  )
}
