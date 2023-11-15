import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    WAKATIME_API_KEY: z.string().startsWith("waka_"),
    GH_API_URL: z.string().startsWith("https://"),
    DISCORD_ID: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_DISCORD_ID: z.string().min(1),
  },
  runtimeEnv: {
    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
    GH_API_URL: process.env.GH_API_URL,
    DISCORD_ID: process.env.DISCORD_ID,
    NEXT_PUBLIC_DISCORD_ID: process.env.NEXT_PUBLIC_DISCORD_ID,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
})
