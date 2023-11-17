"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { calculateProgress } from "@/lib/time"

interface SpotifyBarProps {
  start: number
  end: number
}

export function ProgressBar({ start, end }: SpotifyBarProps) {
  const [progress, setProgress] = React.useState(calculateProgress(start, end))

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(calculateProgress(start, end))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [start, end])

  return (
    <div className="py-1">
      <Progress value={progress} className="w-[200px]" />
    </div>
  )
}
