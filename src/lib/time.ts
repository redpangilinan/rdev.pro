export function discordTimestamp(unixTimestamp: number): string {
  const durationInMilliseconds = Date.now() - unixTimestamp
  const seconds = Math.floor(durationInMilliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) {
    const remainingHours = hours % 24
    return `${days} day${days > 1 ? "s" : ""}${
      remainingHours > 0
        ? `, ${remainingHours} hour${remainingHours > 1 ? "s" : ""}`
        : ""
    }`
  } else if (hours > 0) {
    const remainingMinutes = minutes % 60
    return `${hours} hour${hours > 1 ? "s" : ""}${
      remainingMinutes > 0
        ? `, ${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`
        : ""
    }`
  } else if (minutes > 0) {
    const remainingSeconds = seconds % 60
    return `${minutes} minute${minutes > 1 ? "s" : ""}${
      remainingSeconds > 0
        ? `, ${remainingSeconds} second${remainingSeconds > 1 ? "s" : ""}`
        : ""
    }`
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""}`
  }
}

export function calculateProgress(
  startTimestamp: number,
  endTimestamp: number
): number {
  const currentDateTimestamp: number = new Date().getTime()

  if (startTimestamp > endTimestamp) {
    throw new Error(
      "Invalid timestamps: startTimestamp should be less than endTimestamp."
    )
  }

  const totalDuration: number = endTimestamp - startTimestamp
  const elapsedTime: number = currentDateTimestamp - startTimestamp
  let progress: number = (elapsedTime / totalDuration) * 100
  progress = Math.min(100, Math.max(0, progress))

  return parseFloat(progress.toFixed(2))
}
