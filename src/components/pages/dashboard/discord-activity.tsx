"use client"

import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { DiscordStatus } from "@/components/common/discord-status"
import { Skeleton } from "@/components/ui/skeleton"
import { DiscordActivityCard } from "./discord-activity-card"

import { env } from "@/lib/utils"
import { DiscordApiResponse, DiscordApiContent, Activity } from "@/types"
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
                {/* Display no activities */}
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
                    <>
                      {/* Render custom status with no other activities */}
                      {data.data.activities.length === 1 &&
                      data.data.activities[0].name === "Custom Status" ? (
                        <>
                          {data?.data?.activities?.map(
                            (activity: Activity) =>
                              activity.name === "Custom Status" && (
                                <p className="text-sm text-muted-foreground">
                                  {activity.state}
                                </p>
                              )
                          )}
                          <Alert className="bg-muted">
                            <AlertDescription>
                              No activities currently.
                            </AlertDescription>
                          </Alert>
                        </>
                      ) : (
                        <>
                          {/* Render custom status including other activities */}
                          {data?.data?.activities?.map(
                            (activity: Activity) =>
                              activity.name === "Custom Status" && (
                                <p className="text-sm text-muted-foreground">
                                  {activity.state}
                                </p>
                              )
                          )}
                          {data?.data?.activities?.map(
                            (activity: Activity, index: number) =>
                              activity.name !== "Custom Status" && (
                                <DiscordActivityCard
                                  key={index}
                                  activity={activity}
                                  data={data}
                                />
                              )
                          )}
                        </>
                      )}
                    </>
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
