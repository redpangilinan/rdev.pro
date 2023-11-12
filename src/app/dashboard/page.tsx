import { getCodingStats } from "@/lib/api/wakatime"
import { Languages as LanguagesType } from "@/types"

import { HeadingText } from "@/components/common/heading-text"
import { Languages } from "@/components/pages/dashboard/languages"
import { CodeTime } from "@/components/pages/dashboard/code-time"
import { DiscordActivity } from "@/components/pages/dashboard/discord-activity"

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
}

export default async function Dashboard() {
  const data = (await getCodingStats()) as ResponseData

  const started = data.data.human_readable_range
  const totalTime = data.data.human_readable_total_including_other_language
  const languages: LanguagesType[] = data.data.languages

  return (
    <main className="flex flex-col items-center py-8">
      <div className="space-y-4">
        <HeadingText subtext="Statistics about my activities">
          Dashboard
        </HeadingText>
        <div className="flex flex-wrap gap-2">
          <DiscordActivity />
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
