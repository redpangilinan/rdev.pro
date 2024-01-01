import { env } from "@/env.mjs"
import wretch from "wretch"

const apiUrl = env.GH_API_URL

// Instantiate and configure wretch
const api = wretch(apiUrl, {
  cache: "no-store",
  mode: "cors",
})
  .errorType("json")
  .resolve((r) => r.json())

// Fetch my pinned repository
export const getRepo = async () => {
  return await api.get("/?username=redpangilinan")
}
