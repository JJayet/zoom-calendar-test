import { differenceInMinutes } from 'date-fns'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import fr from 'date-fns/locale/fr'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import { FC, useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer, Event, SlotInfo } from 'react-big-calendar'
import withDragAndDrop, {
  withDragAndDropProps,
} from 'react-big-calendar/lib/addons/dragAndDrop'
import { Store } from 'react-notifications-component'

import { Meeting } from '@fleex/models'
import { addMinutesToDate } from '@fleex/utils'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './app.css'

import { createMeeting, getMeetings } from './meetings'

const DragAndDropCalendar = withDragAndDrop(Calendar as unknown as FC)

const locales = {
  fr: fr,
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const meetingToEvent = (meeting: Meeting): Event => ({
  title: `${meeting.topic} - ${meeting.join_url}`,
  start: new Date(meeting.start_time),
  end: addMinutesToDate(new Date(meeting.start_time), meeting.duration),
})

export const App: FC = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    getMeetings()
      .then((_) => {
        setEvents([...events, ..._.result.meetings.map(meetingToEvent)])
      })
      .catch(console.error)
  }, [])

  const onSelectSlot = (data: SlotInfo) => {
    const startDate = data.start as Date
    const endDate = data.end as Date
    const title = window.prompt(
      `Enter a title for this event starting ${format(
        startDate,
        'dd-MM-yyyy hh:mm',
      )} and ending ${format(endDate, 'dd-MM-yyyy hh:mm')}`,
    )
    if (title) {
      createMeeting(title, startDate, differenceInMinutes(startDate, endDate))
        .then((_) => {
          setEvents((currentEvents) => {
            const firstEvent: Event = {
              title: `${_.result.topic} - ${_.result.join_url}`,
              start: new Date(_.result.start_time),
              end: addMinutesToDate(
                new Date(_.result.start_time),
                _.result.duration,
              ),
            }
            return [...currentEvents, firstEvent]
          })
          Store.addNotification({
            title: 'Success!',
            message: 'Your meeting have been created',
            type: 'success',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          })
        })
        .catch(console.log)
    }
  }

  const onEventDrop: withDragAndDropProps['onEventDrop'] = (data) => {
    console.log(data)
  }

  const onSelectEvent = (event: Event) => {
    const url = event.title ? event.title.toString().split(' - ')[1] : ''
    alert(url)
  }

  return (
    <div>
      <DragAndDropCalendar
        selectable
        popup={true}
        defaultView="week"
        events={events}
        localizer={localizer}
        onSelectSlot={onSelectSlot}
        onEventDrop={onEventDrop}
        onSelectEvent={onSelectEvent}
        style={{ height: '100vh' }}
      />
    </div>
  )
}
