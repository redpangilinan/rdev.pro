"use client"

import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { DiscordActivity } from "./discord-activity"

export function DiscordCard() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Discord activity</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <DiscordActivity />
      </CardContent>
    </Card>
  )
}
