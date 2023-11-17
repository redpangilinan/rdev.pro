import * as React from "react"
import { discordTimestamp } from "@/lib/utils"

interface TimestampProps {
  unixTimestamp: number
}

export function Timestamp({ unixTimestamp }: TimestampProps) {
  const [timeAgo, setTimeAgo] = React.useState(discordTimestamp(unixTimestamp))

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeAgo(discordTimestamp(unixTimestamp))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [unixTimestamp])

  return <>{timeAgo}</>
}
