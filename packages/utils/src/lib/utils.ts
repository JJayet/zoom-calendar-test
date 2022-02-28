export const addMinutesToDate = (date: Date, minutes: number): Date =>
  new Date(date.getTime() + minutes * 60 * 1000)