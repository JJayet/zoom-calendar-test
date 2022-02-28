import { FC, useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer, Event, SlotInfo } from 'react-big-calendar'
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import fr from 'date-fns/locale/fr'
import Popup from 'reactjs-popup'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { createMeeting, getMeetings } from './meetings'
import { Meeting } from '@fleex/models'
import { addMinutesToDate } from '@fleex/utils'
import { differenceInMinutes } from 'date-fns'

const DragAndDropCalendar = withDragAndDrop(Calendar as unknown as FC)

const locales = {
  'fr': fr,
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
  start: new Date(meeting.start_time),
  end: addMinutesToDate(new Date(meeting.start_time), meeting.duration),
})

const App: FC = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [endTime, setEndTime] = useState<Date | null>(null)
  
  const closeModal = () => {
    setOpen(false)
    if (title !== '' && startTime && endTime) {
      createMeeting(title, startTime, differenceInMinutes(endTime, startTime)).then(_ => {
        setEvents(currentEvents => {
            const firstEvent: Event = {
              title: _.result.topic,
              start: new Date(_.result.start_time),
              end: addMinutesToDate(new Date(_.result.start_time), _.result.duration),
            }
            return [...currentEvents, firstEvent]
          })
        })
    }
  }

  useEffect(() => {
    getMeetings().then(_ => {
      setEvents([...events, ..._.result.meetings.map(meetingToEvent)])
    })
  }, [])

  const onSelectSlot = (data: SlotInfo) => {
    setStartTime(data.start as Date)
    setEndTime(data.end as Date)
    setOpen(true)
  }

  const onEventResize: withDragAndDropProps['onEventResize'] = data => {
    const { start, end } = data

    setEvents(currentEvents => {
      const firstEvent = {
        start: new Date(start),
        end: new Date(end),
      }
      return [...currentEvents, firstEvent]
    })
  }

  const onEventDrop: withDragAndDropProps['onEventDrop'] = data => {
    console.log(data)
  }

  return (
    <div>
      <DragAndDropCalendar
        selectable
        popup={true}
        defaultView='week'
        events={events}
        localizer={localizer}
        onSelectSlot={onSelectSlot}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        style={{ height: '100vh' }}
      />
      <Popup open={open}>
        <div className="modal">
          <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
          <button onClick={closeModal}>Close</button>
        </div>
      </Popup>
    </div>
  )
}

export default App