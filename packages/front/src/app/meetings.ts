import { CreatedMeeting, GetZoomMeetingsResult } from "@fleex/models"

const baseURL = 'http://localhost:3333'

export const getMeetings = () =>  fetch(`${baseURL}/meetings`).then(_ => _.json() as Promise<{ result: GetZoomMeetingsResult }>)

export const createMeeting = (title: string, startTime: Date, duration: number) =>
  fetch(`${baseURL}/meetings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      startTime,
      duration
    })
  }).then(_ => _.json() as Promise<{ result: CreatedMeeting }>)