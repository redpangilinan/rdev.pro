import { env } from "../utils"
import wretch from "wretch"

// Instantiate and configure wretch
const api = wretch("https://wakatime.com", { cache: "no-store" })
  .errorType("json")
  .resolve((r) => r.json())

// Fetch stats from wakatime
export const getCodingStats = async () => {
  return await api
    .headers({
      Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
        "base64"
      )}`,
    })
    .get("/api/v1/users/current/stats")
}
