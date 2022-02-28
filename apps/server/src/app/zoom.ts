import axios from 'axios'
import * as jwt from 'jsonwebtoken'

import { CreatedMeeting, GetZoomMeetingsResult } from '@fleex/models'

const zoomEmail = process.env.ZOOM_EMAIL
const zoomBaseUrl = 'https://api.zoom.us/v2'

const getZoomJWT = () =>
  jwt.sign(
    {
      iss: process.env.ZOOM_API_KEY,
      exp: new Date().getTime() + 5000,
    },
    process.env.ZOOM_API_SECRET,
  )

export const getMeetings = () =>
  axios
    .get<GetZoomMeetingsResult>(`${zoomBaseUrl}/users/${zoomEmail}/meetings`, {
      headers: {
        Authorization: `Bearer ${getZoomJWT()}`,
      },
    })
    .then((_) => _.data)

export const createMeeting = (
  topic: string,
  startTime: Date,
  duration: number,
) =>
  axios
    .post<CreatedMeeting>(
      `${zoomBaseUrl}/users/${zoomEmail}/meetings`,
      {
        topic,
        start_time: startTime,
        duration,
        timezone: process.env.TZ ?? 'Europe/Paris',
        settings: {
          host_video: 'true',
          participant_video: 'true',
        },
      },
      {
        headers: {
          Authorization: `Bearer ${getZoomJWT()}`,
        },
      },
    )
    .then((_) => _.data)
