import * as React from "react"
import { DiscordApiContent, DiscordApiResponse } from "@/types"
import useWebSocket, { ReadyState } from "react-use-websocket"

import { env } from "@/lib/utils"

interface MessageData {
  op: number
  t: string
  d: DiscordApiContent
}

export const useLanyard = () => {
  const [data, setData] = React.useState<DiscordApiResponse | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const userId = env.NEXT_PUBLIC_DISCORD_ID
  const socketUrl = "wss://api.lanyard.rest/socket"

  const initMessage = () => {
    sendMessage(JSON.stringify({ op: 2, d: { subscribe_to_ids: [userId] } }))
  }

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => {
      initMessage()
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
        setIsLoading(false)
        break
      case "PRESENCE_UPDATE":
        setData({ data: eventData })
        setIsLoading(false)
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

  return { data, isLoading, readyState }
}
