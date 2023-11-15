"use client"

import { useEffect, useState } from "react"

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
import { BsDiscord } from "react-icons/bs"

import { env } from "@/lib/utils"
import { discordTimestamp } from "@/lib/utils"
import { DiscordApiResponse } from "@/types"
import { Activity } from "@/types"
import useWebSocket, { ReadyState } from "react-use-websocket"

// TODO: messageData.d type safety
interface MessageData {
  op: number
  t: string
  d: Record<string, any>
}

export function DiscordActivity() {
  const [data, setData] = useState<DiscordApiResponse | null>(null)
  const userId = env.NEXT_PUBLIC_DISCORD_ID
  const socketUrl = "wss://api.lanyard.rest/socket"
  const heartbeat = {
    timeout: 60000,
    interval: 5000,
  }

  const initMessage = () => {
    sendMessage(JSON.stringify({ op: 2, d: { subscribe_to_ids: [userId] } }))
  }

  const { sendMessage, readyState } = useWebSocket(socketUrl, {
    heartbeat: {
      timeout: heartbeat.timeout,
      interval: heartbeat.interval,
    },
    onOpen: () => {
      initMessage()
    },
    onMessage: (event) => {
      const message = JSON.parse(event.data)

      if (message.op === 0) {
        handleEvent(message)
      } else if (message.op === 1) {
        handleHello()
      }
    },
    shouldReconnect: () => true,
  })

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      initMessage()
    }
  }, [readyState, userId, sendMessage])

  const handleEvent = (messageData: MessageData) => {
    const eventData = messageData.d
    switch (messageData.t) {
      case "INIT_STATE":
      case "PRESENCE_UPDATE":
        setData({ data: eventData && eventData[userId] })
        break
      default:
        break
    }
  }

  const handleHello = () => {
    const heartbeatInterval = 5000

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
                            <AlertTitle>{activity.name}</AlertTitle>
                            <AlertDescription>
                              {activity.details || null}
                            </AlertDescription>
                            <AlertDescription>
                              {activity.state || null}
                            </AlertDescription>
                            <AlertDescription>
                              {activity.timestamps && activity.timestamps.start
                                ? discordTimestamp(activity.timestamps.start)
                                : null}
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
