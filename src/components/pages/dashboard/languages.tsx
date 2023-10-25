import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface LanguagesProps {
  languages: Languages[]
}

export default async function Languages({ languages }: LanguagesProps) {
  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle className="text-lg">Top Languages</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-4">
        {languages.slice(0, 16).map((language) => (
          <div className="p-3" key={language.name}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>{language.name}</TooltipTrigger>
                <CardDescription>{language.text}</CardDescription>
                <TooltipContent>
                  <p>{language.percent}%</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
