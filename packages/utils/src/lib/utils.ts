export const differenceBetweenTwoDatesInMinutes = (d1: Date, d2: Date): number => {
  const diff = Math.abs(d1.getTime() - d2.getTime())
  return Math.floor(diff / 1000 / 60)
}

export const addMinutesToDate = (date: Date, minutes: number): Date =>
  new Date(date.getTime() + minutes * 60 * 1000)