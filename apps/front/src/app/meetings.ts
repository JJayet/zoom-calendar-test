import { format } from 'date-fns'

import { CreatedMeeting, GetZoomMeetingsResult } from '@fleex/models'

const baseURL = 'http://localhost:3333'

export const getMeetings = (): Promise<{ result: GetZoomMeetingsResult }> =>
  fetch(`${baseURL}/meetings`).then((_) => _.json())

export const createMeeting = (
  title: string,
  startTime: Date,
  duration: number,
): Promise<{ result: CreatedMeeting }> =>
  fetch(`${baseURL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      topic: title,
      startTime: format(startTime, "yyyy-MM-dd'T'HH:mm:ss"),
      duration: Math.abs(duration),
    }),
  }).then((_) => _.json())
