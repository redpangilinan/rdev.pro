import wretch from "wretch"

// Instantiate and configure wretch
const api = wretch("https://gh-pinned-repos.egoist.dev", { mode: "cors" })
  .errorType("json")
  .resolve((r) => r.json())

// Fetch my pinned repository
export const getRepo = () => {
  return api.get("/?username=redpangilinan")
}
