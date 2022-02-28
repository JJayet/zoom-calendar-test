import { format } from "date-fns"

import { CreatedMeeting, GetZoomMeetingsResult } from "@fleex/models"

const baseURL = 'http://localhost:3333'

export const getMeetings = () => fetch(`${baseURL}/meetings`).then(_ => _.json() as Promise<{ result: GetZoomMeetingsResult }>)

export const createMeeting = (title: string, startTime: Date, duration: number) =>
  fetch(`${baseURL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      topic: title,
      startTime: format(startTime, "yyyy-MM-dd'T'HH:mm:ss"),
      duration: Math.abs(duration)
    })
  }).then(_ => _.json() as Promise<{ result: CreatedMeeting }>)