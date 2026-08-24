import { useEffect, useState } from 'react'
import type { MusicalEvent, EventStatus, TimeRemaining } from '../../types'
import { getEventStatus, formatTimeRemaining, buildMapsUrl } from '../../utils/time'
import { eventsData } from '../../data/events'
import './Events.css'

const statusLabels: Record<Exclude<EventStatus, 'hidden'>, string> = {
  waiting: 'En espera',
  ongoing: 'En curso',
  finished: 'Finalizado',
}

const ZERO_TIME: TimeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 }

interface EventCardProps {
  event: MusicalEvent
}

function EventCard({ event }: EventCardProps) {
  const [status, setStatus] = useState<EventStatus>(() => getEventStatus(event.start, event.end))
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    formatTimeRemaining(status === 'ongoing' ? event.end : event.start),
  )

  useEffect(() => {
    const timer = setInterval(() => {
      const newStatus = getEventStatus(event.start, event.end)
      setStatus(newStatus)

      if (newStatus === 'waiting') {
        setTimeRemaining(formatTimeRemaining(event.start))
      } else if (newStatus === 'ongoing') {
        setTimeRemaining(formatTimeRemaining(event.end))
      } else if (newStatus === 'finished') {
        setTimeRemaining(ZERO_TIME)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [event.start, event.end])

  if (status === 'hidden') return null

  return (
    <div className={`event-card event-status-${status}`}>
      <h3 className="event-title">{event.title}</h3>

      <div className="event-counter">
        <TimeBlock value={timeRemaining.days} label="días" />
        <span className="time-separator">:</span>
        <TimeBlock value={timeRemaining.hours} label="horas" />
        <span className="time-separator">:</span>
        <TimeBlock value={timeRemaining.minutes} label="minutos" />
        <span className="time-separator">:</span>
        <TimeBlock value={timeRemaining.seconds} label="segundos" />
      </div>

      <div className="event-status">
        <span className="status-indicator"></span>
        <span className="status-text">{statusLabels[status]}</span>
      </div>

      <a href={buildMapsUrl(event.mapsQuery)} target="_blank" rel="noopener noreferrer" className="event-location">
        📍 {event.location}
      </a>
    </div>
  )
}

interface TimeBlockProps {
  value: number
  label: string
}

function TimeBlock({ value, label }: TimeBlockProps) {
  return (
    <div className="time-block">
      <span className="time-value">{String(value).padStart(2, '0')}</span>
      <span className="time-label">{label}</span>
    </div>
  )
}

function Events() {
  const activeEvents = eventsData.filter((event) => getEventStatus(event.start, event.end) !== 'hidden')

  if (activeEvents.length === 0) return null

  return (
    <section className="events" id="eventos">
      <div className="container">
        <h2 className="events-title">Próximos Eventos</h2>
        <div className="events-grid">
          {activeEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
