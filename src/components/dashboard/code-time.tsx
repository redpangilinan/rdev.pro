import { Languages } from "@/types"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CodeTimeProps {
  started: string
  totalTime: string
  languages: Languages[]
}

export function CodeTime({ started, totalTime, languages }: CodeTimeProps) {
  const hasLanguages = languages && languages.length > 0
  const topLanguage = hasLanguages ? languages[0] : null

  return (
    <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Coding hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">{totalTime}</div>
          <p className="text-xs text-muted-foreground">{started}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Most used language
          </CardTitle>
        </CardHeader>
        <CardContent>
          {topLanguage ? (
            <>
              <div className="text-lg font-bold">{topLanguage.name}</div>
              <p className="text-xs text-muted-foreground">
                {topLanguage.text}
              </p>
            </>
          ) : (
            <div className="text-sm text-muted-foreground">
              No data available
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
