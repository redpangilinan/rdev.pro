import { getDiscordActivity } from "@/lib/api/discord"
import { discordTimestamp } from "@/lib/utils"
import { DiscordApiResponse } from "@/types"
import { Activity } from "@/types"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { DiscordStatus } from "@/components/common/discord-status"

export async function DiscordActivity() {
  const data = (await getDiscordActivity()) as DiscordApiResponse

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Discord activity</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <DiscordStatus data={data.data} />
        <div className="flex flex-grow flex-col gap-2">
          {data.data.activities.length === 0 ? (
            <Alert>
              <AlertDescription>No activities currently.</AlertDescription>
            </Alert>
          ) : (
            data.data.activities.map((activity: Activity, index: number) => (
              <Alert key={index} className="flex items-center gap-3 bg-muted">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {activity.assets.large_image.startsWith("spotify:") ? (
                        <img
                          src={data.data.spotify.album_art_url}
                          width={90}
                          height={90}
                          alt="Activity image"
                          className="rounded"
                        />
                      ) : (
                        <img
                          src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}`}
                          width={90}
                          height={90}
                          alt="Activity image"
                          className="rounded"
                        />
                      )}
                    </TooltipTrigger>
                    <TooltipContent>
                      {activity.assets.large_text}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <div>
                  <AlertTitle>{activity.name}</AlertTitle>
                  <AlertDescription>{activity.details}</AlertDescription>
                  <AlertDescription>{activity.state}</AlertDescription>
                  <AlertDescription>
                    {discordTimestamp(activity.timestamps.start)}
                  </AlertDescription>
                </div>
              </Alert>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
