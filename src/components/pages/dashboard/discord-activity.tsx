"use client"

import * as React from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { DiscordStatus } from "@/components/common/discord-status"
import { Skeleton } from "@/components/ui/skeleton"
import { ElapsedTime } from "@/components/timer/elapsed-time"
import { ProgressBar } from "@/components/timer/progress-bar"
import { BsDiscord } from "react-icons/bs"

import { env } from "@/lib/utils"
import { DiscordApiResponse, DiscordApiContent } from "@/types"
import { Activity } from "@/types"
import useWebSocket, { ReadyState } from "react-use-websocket"

interface MessageData {
  op: number
  t: string
  d: DiscordApiContent
}

export function DiscordActivity() {
  const [data, setData] = React.useState<DiscordApiResponse | null>(null)
  const userId = env.NEXT_PUBLIC_DISCORD_ID
  const defaultInterval = 30000
  const socketUrl = "wss://api.lanyard.rest/socket"

  const initMessage = () => {
    sendMessage(JSON.stringify({ op: 2, d: { subscribe_to_ids: [userId] } }))
  }

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => {
      initMessage()
      handleHello()
    },
    shouldReconnect: () => true,
  })

  React.useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      initMessage()
    }
  }, [readyState, userId, sendMessage])

  const handleEvent = (messageData: MessageData) => {
    const eventData = messageData.d
    switch (messageData.t) {
      case "INIT_STATE":
        setData({ data: eventData && eventData[userId] })
        break
      case "PRESENCE_UPDATE":
        setData({ data: eventData })
        break
      default:
        break
    }
  }

  React.useEffect(() => {
    if (lastMessage) {
      const messageData = JSON.parse(lastMessage.data)
      handleEvent(messageData)
    }
  }, [lastMessage])

  const handleHello = () => {
    const heartbeatInterval = defaultInterval

    const heartbeatIntervalId = setInterval(() => {
      sendMessage(JSON.stringify({ op: 3 }))
    }, heartbeatInterval)

    return () => clearInterval(heartbeatIntervalId)
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Discord activity</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {!data ? (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-[14rem]" />
            </div>
            <Skeleton className="h-8 w-full" />
          </div>
        ) : (
          <>
            {data.data ? (
              <>
                <DiscordStatus data={data.data} />
                <div className="flex flex-grow flex-col gap-2">
                  {!data ||
                  !data.data ||
                  !data.data.activities ||
                  data.data.activities.length === 0 ? (
                    <Alert className="bg-muted">
                      <AlertDescription>
                        No activities currently.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    data?.data?.activities?.map(
                      (activity: Activity, index: number) => (
                        <Alert
                          key={index}
                          className="flex flex-col items-center gap-3 bg-muted text-center sm:flex-row sm:text-left"
                        >
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                {activity.assets &&
                                activity.assets.large_image &&
                                activity.assets.large_image.startsWith(
                                  "spotify:"
                                ) ? (
                                  <img
                                    src={data.data.spotify.album_art_url}
                                    width={90}
                                    height={90}
                                    alt="Activity image"
                                    className="rounded"
                                  />
                                ) : activity.assets &&
                                  activity.application_id ? (
                                  <img
                                    src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp?size=512`}
                                    width={90}
                                    height={90}
                                    alt="Activity image"
                                    className="rounded"
                                  />
                                ) : activity.application_id ? (
                                  <img
                                    src={`https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=512`}
                                    width={90}
                                    height={90}
                                    alt="Activity image"
                                    className="rounded"
                                  />
                                ) : (
                                  <div
                                    className="flex items-center justify-center"
                                    style={{
                                      width: 90,
                                      height: 90,
                                      backgroundColor: "gray",
                                      borderRadius: "0.25rem",
                                    }}
                                  >
                                    <BsDiscord className="h-12 w-12" />
                                  </div>
                                )}
                              </TooltipTrigger>
                              <TooltipContent>
                                {activity.assets
                                  ? activity.assets.large_text || activity.name
                                  : activity.name}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <div>
                            <AlertTitle className="line-clamp-1">
                              {activity.name}
                            </AlertTitle>
                            <AlertDescription className="line-clamp-1">
                              {activity.details || null}
                            </AlertDescription>
                            <AlertDescription className="line-clamp-1">
                              {activity.state || null}
                            </AlertDescription>
                            <AlertDescription className="flex justify-center sm:block">
                              {activity.timestamps &&
                              activity.timestamps.start &&
                              activity.timestamps.end ? (
                                <ProgressBar
                                  start={activity.timestamps.start}
                                  end={activity.timestamps.end}
                                />
                              ) : null}
                            </AlertDescription>
                            <AlertDescription className="line-clamp-1">
                              {activity.timestamps &&
                              activity.timestamps.start ? (
                                <ElapsedTime
                                  unixTimestamp={activity.timestamps.start}
                                />
                              ) : null}
                            </AlertDescription>
                          </div>
                        </Alert>
                      )
                    )
                  )}
                </div>
              </>
            ) : (
              <div className="flex gap-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-10 w-[14rem]" />
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
