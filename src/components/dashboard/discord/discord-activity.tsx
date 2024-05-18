"use client"

import * as React from "react"
import { useLanyard } from "@/hooks/use-lanyard"
import { Activity } from "@/types"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"

import { DiscordActivityCard } from "./discord-activity-card"

export function DiscordActivity() {
  const { data } = useLanyard()

  return (
    <>
      {!data ? (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-28 md:w-[14rem]" />
          </div>
          <Skeleton className="h-8 w-full" />
        </div>
      ) : (
        <>
          {data.data ? (
            <>
              {/* Display no activities */}
              <div className="flex flex-grow flex-col gap-2">
                {!data ||
                !data.data ||
                !data.data.activities ||
                data.data.activities.length === 0 ? (
                  <Alert className="border-none bg-muted">
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
                        <Alert className="border-none bg-muted">
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
              <Skeleton className="h-10 w-28 md:w-[14rem]" />
            </div>
          )}
        </>
      )}
    </>
  )
}
