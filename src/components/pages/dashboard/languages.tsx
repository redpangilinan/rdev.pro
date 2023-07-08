import { getCodingStats } from "@/lib/api/wakatime"
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ResponseData {
  data: {
    languages: Languages[]
  }
}

export default async function Languages() {
  const data = (await getCodingStats()) as ResponseData
  const languages: Languages[] = data.data.languages

  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle>Most Used Languages</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {languages.slice(0, 10).map((language) => (
          <Card className="p-4 space-y-2" key={language.name}>
            <div>
              {language.name} ({language.percent}%)
            </div>
            <CardDescription>{language.text}</CardDescription>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
