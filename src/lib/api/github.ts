import wretch from "wretch"

// Instantiate and configure wretch
const api = wretch("https://gh-pinned-repos.egoist.dev", {
  cache: "no-store",
  mode: "cors",
})
  .errorType("json")
  .resolve((r) => r.json())

// Fetch my pinned repository
export const getRepo = async () => {
  return await api.get("/?username=redpangilinan")
}
