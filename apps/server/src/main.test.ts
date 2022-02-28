import * as request from 'supertest'

import { CreatedMeeting, GetZoomMeetingsResult } from '@fleex/models'

const mockedCreatedMeeting = {
  uuid: 'ZFKVX0OaQdiulCwS7pLEEw==',
  id: 91328446714,
  host_id: '0ZMYB_cNQ6izkK3duUAwxA',
  host_email: 'heavy.luck5449@fastmail.com',
  topic: 'test',
  type: 2,
  status: 'waiting',
  start_time: '2022-02-28T13:56:16Z',
  duration: 90,
  timezone: 'Europe/Paris',
  created_at: '2022-02-28T13:56:16Z',
  start_url:
    'https://zoom.us/s/91328446714?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IjBaTVlCX2NOUTZpemtLM2R1VUF3eEEiLCJpc3MiOiJ3ZWIiLCJzayI6IjAiLCJzdHkiOjEwMCwid2NkIjoiYXcxIiwiY2x0IjowLCJtbnVtIjoiOTEzMjg0NDY3MTQiLCJleHAiOjE2NDYwNjM3NzcsImlhdCI6MTY0NjA1NjU3NywiYWlkIjoiUEQwWGdyVG5SX21uV2dJQVhEanFWdyIsImNpZCI6IiJ9.a55lGZvpkIlu0LKbUd7zLkj9xoIczfdgfqJRKhhAjD4',
  join_url:
    'https://zoom.us/j/91328446714?pwd=a0VORktlVnE2d0E4YkhUbFpjZUhzQT09',
  password: '7VtFPX',
  h323_password: '870881',
  pstn_password: '870881',
  encrypted_password: 'a0VORktlVnE2d0E4YkhUbFpjZUhzQT09',
  settings: {
    host_video: true,
    participant_video: true,
    cn_meeting: false,
    in_meeting: false,
    join_before_host: false,
    jbh_time: 0,
    mute_upon_entry: false,
    watermark: false,
    use_pmi: false,
    approval_type: 2,
    audio: 'voip',
    auto_recording: 'none',
    enforce_login: false,
    enforce_login_domains: '',
    alternative_hosts: '',
    close_registration: false,
    show_share_button: false,
    allow_multiple_devices: false,
    registrants_confirmation_email: true,
    waiting_room: false,
    request_permission_to_unmute_participants: false,
    registrants_email_notification: true,
    meeting_authentication: false,
    encryption_type: 'enhanced_encryption',
    approved_or_denied_countries_or_regions: {
      enable: false,
    },
    breakout_room: {
      enable: false,
    },
    alternative_hosts_email_notification: true,
    device_testing: false,
    focus_mode: false,
    private_meeting: false,
    email_notification: true,
  },
  pre_schedule: false,
}

const mockedMeetings = {
  page_size: 30,
  total_records: 9,
  next_page_token: '',
  meetings: [
    {
      uuid: 'ZcwfgiQBQeGAr1oqwJF+vA==',
      id: 94243285098,
      host_id: '0ZMYB_cNQ6izkK3duUAwxA',
      topic: 'test',
      type: 2,
      start_time: '2022-02-28T10:22:58Z',
      duration: 90,
      timezone: 'Europe/Paris',
      created_at: '2022-02-28T10:22:58Z',
      join_url:
        'https://zoom.us/j/94243285098?pwd=b1BDbEVRSURlMkRXeHlWQVVjbkI1Zz09',
    },
    {
      uuid: '7veI/RNdQgS3yEOj4NSPuQ==',
      id: 99402597921,
      host_id: '0ZMYB_cNQ6izkK3duUAwxA',
      topic: 'test',
      type: 2,
      start_time: '2022-02-28T12:00:00Z',
      duration: 90,
      timezone: 'Europe/Paris',
      created_at: '2022-02-28T10:23:34Z',
      join_url:
        'https://zoom.us/j/99402597921?pwd=eDUvek93bkFmQWc3ZXluZS9hVTh2UT09',
    },
    {
      uuid: 'ZFKVX0OaQdiulCwS7pLEEw==',
      id: 91328446714,
      host_id: '0ZMYB_cNQ6izkK3duUAwxA',
      topic: 'test',
      type: 2,
      start_time: '2022-02-28T13:56:16Z',
      duration: 90,
      timezone: 'Europe/Paris',
      created_at: '2022-02-28T13:56:16Z',
      join_url:
        'https://zoom.us/j/91328446714?pwd=a0VORktlVnE2d0E4YkhUbFpjZUhzQT09',
    },
    {
      uuid: 'LREIdUWwQTuXaPOh5Hzv6Q==',
      id: 97063165293,
      host_id: '0ZMYB_cNQ6izkK3duUAwxA',
      topic: 'test',
      type: 2,
      start_time: '2022-02-28T13:59:38Z',
      duration: 90,
      timezone: 'Europe/Paris',
      created_at: '2022-02-28T13:59:38Z',
      join_url:
        'https://zoom.us/j/97063165293?pwd=clV6RGtWM3BpVENsNFAyalFKT0JHZz09',
    },
    {
      uuid: '/CVIK1/eQViPl2AcZ2Czmg==',
      id: 98561466451,
      host_id: '0ZMYB_cNQ6izkK3duUAwxA',
      topic: 'Testmldkf',
      type: 2,
      start_time: '2022-02-28T14:47:48Z',
      duration: 90,
      timezone: 'Europe/Paris',
      created_at: '2022-02-28T14:47:48Z',
      join_url:
        'https://zoom.us/j/98561466451?pwd=VGxoS0cyL2Z0RXp5ZzRPcnNseENLUT09',
    },
    {
      uuid: 'bNUjG5qrS02puKk0bgc89w==',
      id: 97975733739,
      host_id: '0ZMYB_cNQ6izkK3duUAwxA',
      topic: 'testdlmsfk',
      type: 2,
      start_time: '2022-02-28T16:30:00Z',
      duration: 90,
      timezone: 'Europe/Paris',
      created_at: '2022-02-28T13:59:59Z',
      join_url:
        'https://zoom.us/j/97975733739?pwd=TlZ6aFlhb3B3d3VDR0ljRi9JQWhCZz09',
    },
    {
      uuid: 'h2QoxNnIRZyiLbivIhdjgw==',
      id: 92820812989,
      host_id: '0ZMYB_cNQ6izkK3duUAwxA',
      topic: 'Test meeting',
      type: 2,
      start_time: '2022-03-01T09:30:00Z',
      duration: 90,
      timezone: 'Europe/Paris',
      created_at: '2022-02-28T14:38:12Z',
      join_url:
        'https://zoom.us/j/92820812989?pwd=R0x0Z1ByU1FmMklFMWNKZFMwVEJmdz09',
    },
    {
      uuid: 'vFEoIHb1T6S3SK8zVtxWtA==',
      id: 94581201277,
      host_id: '0ZMYB_cNQ6izkK3duUAwxA',
      topic: 'Test meeting with prompt',
      type: 2,
      start_time: '2022-03-01T12:00:00Z',
      duration: 0,
      timezone: 'Europe/Paris',
      created_at: '2022-02-28T18:41:28Z',
      join_url:
        'https://zoom.us/j/94581201277?pwd=NkxvOTFPMnB3aE1QNXh1V0s3RGVKdz09',
    },
    {
      uuid: '9YBIvPMeQ+SZ0RW4xEFBsg==',
      id: 96838749031,
      host_id: '0ZMYB_cNQ6izkK3duUAwxA',
      topic: 'Test struff',
      type: 2,
      start_time: '2022-03-01T12:30:00Z',
      duration: 120,
      timezone: 'Europe/Paris',
      created_at: '2022-02-28T18:42:01Z',
      join_url:
        'https://zoom.us/j/96838749031?pwd=Z2VqMlFoVGRRbTZoYUdxYW5PMTczUT09',
    },
  ],
}

jest.mock('./app/zoom.ts', () => {
  return {
    getMeetings: jest.fn(() =>
      Promise.resolve<GetZoomMeetingsResult>(mockedMeetings),
    ),
    createMeeting: jest.fn(() =>
      Promise.resolve<CreatedMeeting>(mockedCreatedMeeting),
    ),
  }
})

import { server } from './main'

describe('server', () => {
  afterAll(() => {
    server.close()
  })

  it('should return meetings', async () => {
    const response = await request(server).get('/meetings')
    expect(response.status).toEqual(200)
    expect(response.body).toEqual({
      result: mockedMeetings,
    })
  })

  it('should return created meeting', async () => {
    const response = await request(server).post('/create')
    expect(response.status).toEqual(200)
    expect(response.body).toEqual({
      result: mockedCreatedMeeting,
    })
  })
})
