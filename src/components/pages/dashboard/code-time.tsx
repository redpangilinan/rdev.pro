import { getCodingStats } from "@/lib/api/wakatime"
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ResponseData {
  data: {
    human_readable_range: string
    human_readable_total_including_other_language: string
  }
}

export default async function CodeTime() {
  const data = (await getCodingStats()) as ResponseData
  const started = data.data.human_readable_range
  const totalTime = data.data.human_readable_total_including_other_language

  return (
    <Card className="flex-grow h-full">
      <CardHeader>
        <CardTitle>My Coding Hours</CardTitle>
        <CardDescription>{started}</CardDescription>
      </CardHeader>
      <CardContent className="text-xl font-medium">{totalTime}</CardContent>
    </Card>
  )
}
