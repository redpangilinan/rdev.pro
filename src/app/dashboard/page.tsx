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
  data?: {
    human_readable_range?: string
    human_readable_total_including_other_language?: string
    languages?: LanguagesType[]
  }
  error?: string
}

export default async function Dashboard() {
  let data: ResponseData | null = null

  try {
    data = (await getCodingStats()) as ResponseData
  } catch (error) {
    console.error("Failed to fetch coding stats:", error)
    data = { error: "Failed to fetch coding stats" }
  }

  const hasError = !data || data.error || !data.data
  const missingRequiredData =
    !hasError &&
    (!data.data?.human_readable_range ||
      !data.data?.human_readable_total_including_other_language ||
      !Array.isArray(data.data?.languages) ||
      data.data.languages.length === 0)

  if (hasError || missingRequiredData) {
    return (
      <main className="items-center px-4 py-8">
        <div className="space-y-4">
          <HeadingText subtext="Statistics about my activities">
            Dashboard
          </HeadingText>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
              <p className="text-muted-foreground">
                {data?.error ||
                  "Unable to load dashboard data at this time. Please try again later."}
              </p>
            </div>
            <DashboardSkeleton />
          </div>
        </div>
      </main>
    )
  }

  const started = data.data!.human_readable_range || "Unknown time range"
  const totalTime =
    data.data!.human_readable_total_including_other_language || "Unknown"
  const languages: LanguagesType[] = data.data!.languages || []

  const hasValidLanguages = languages.length > 0

  return (
    <main className="items-center px-4 py-8">
      <div className="space-y-4">
        <HeadingText subtext="Statistics about my activities">
          Dashboard
        </HeadingText>
        <div className="flex flex-wrap gap-2">
          {hasValidLanguages ? (
            <>
              <CodeTime
                started={started}
                totalTime={totalTime}
                languages={languages}
              />
              <Languages languages={languages} />
            </>
          ) : (
            <>
              <div className="w-full rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                <p className="text-muted-foreground">
                  No language data available at this time.
                </p>
              </div>
              <DashboardSkeleton />
            </>
          )}
        </div>
      </div>
    </main>
  )
}
