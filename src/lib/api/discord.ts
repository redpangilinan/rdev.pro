import wretch from "wretch"

import { env } from "../utils"

// Instantiate and configure wretch
const api = wretch("https://api.lanyard.rest", { cache: "no-store" })
  .errorType("json")
  .resolve((r) => r.json())

// Fetch my discord activity
export const getDiscordActivity = async () => {
  try {
    return await api.get(`/v1/users/${env.DISCORD_ID}`)
  } catch (error) {
    console.error("Error fetching data:", error)
    return { error: "Failed fetching data" }
  }
}
