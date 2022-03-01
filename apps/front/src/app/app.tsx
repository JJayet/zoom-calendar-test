import { differenceInMinutes } from 'date-fns'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import fr from 'date-fns/locale/fr'
import parse from 'date-fns/parse'
import set from 'date-fns/set'
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
  title: meeting.topic,
  resource: meeting.join_url,
  start: new Date(meeting.start_time),
  end: addMinutesToDate(new Date(meeting.start_time), meeting.duration),
})

export const App: FC = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    getMeetings()
      .then((_) => {
        const newEvents = _.result.meetings.map(meetingToEvent)
        const eventsToAdd = newEvents.filter(
          (ne) => !events.find((_) => _.resource === ne.resource),
        )
        if (eventsToAdd.length > 0) {
          setEvents([...events, ...eventsToAdd])
        }
      })
      .catch(console.error)
  }, [events])

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
              title: _.result.topic,
              resource: _.result.join_url,
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

  const onSelectEvent = (event: Event) => alert(event.resource)

  return (
    <div>
      <DragAndDropCalendar
        selectable={'ignoreEvents'}
        min={set(new Date(), { hours: 9, minutes: 0 })}
        max={set(new Date(), { hours: 18, minutes: 0 })}
        culture={'fr'}
        tooltipAccessor={(event) => event.resource}
        toolbar={false}
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
