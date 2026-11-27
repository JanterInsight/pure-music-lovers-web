import { useEffect, useRef, useState, useMemo } from 'react'
import type { MusicalEvent, EventStatus, TimeRemaining } from '../../types'
import { getEventStatus, formatTimeRemaining, buildMapsUrl } from '../../utils/time'
import { eventsData } from '../../data/events'
import Reveal from '../Reveal/Reveal'
import { useScrollProgress } from '../../hooks/useScrollManager'
import './Events.css'

const statusLabels: Record<Exclude<EventStatus, 'hidden'>, string> = {
  waiting: 'En espera',
  ongoing: 'En curso',
  finished: 'Finalizado',
}

interface EventCardProps {
  event: MusicalEvent
  index: number
  side: 'left' | 'right'
  status: EventStatus
  timeRemaining: TimeRemaining
}

function EventCard({ event, index, side, status, timeRemaining }: EventCardProps) {
  if (status === 'hidden') return null

  const counterLabel =
    status === 'waiting'
      ? 'Cuenta regresiva para el inicio del evento'
      : status === 'ongoing'
        ? 'Tiempo restante del evento'
        : 'Evento finalizado'

  return (
    <Reveal
      variant={side === 'left' ? 'right' : 'left'}
      delay={index * 120}
      className={`event-card event-side-${side} event-status-${status}`}
    >
      {/* Gold timeline node */}
      <div className="timeline-node" aria-hidden="true">
        <span className="timeline-node-dot" />
      </div>

      <div className="event-card-inner">
        <h3 className="event-title">{event.title}</h3>

        {/* Oversized counter — stage-light mono digits */}
        <div
          className="event-counter"
          role="timer"
          aria-live="polite"
          aria-atomic="true"
          aria-label={counterLabel}
        >
          <TimeBlock value={timeRemaining.days} label="días" />
          <span className="time-separator" aria-hidden="true">
            :
          </span>
          <TimeBlock value={timeRemaining.hours} label="horas" />
          <span className="time-separator" aria-hidden="true">
            :
          </span>
          <TimeBlock value={timeRemaining.minutes} label="minutos" />
          <span className="time-separator" aria-hidden="true">
            :
          </span>
          <TimeBlock value={timeRemaining.seconds} label="segundos" />
        </div>

        {/* Status badge */}
        <div className="event-status">
          <span className={`status-badge status-${status}`}>
            <span className="status-dot" aria-hidden="true" />
            {statusLabels[status]}
          </span>
        </div>

        <a
          href={buildMapsUrl(event.mapsQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="event-location"
          aria-label={`Ver ubicación en Google Maps: ${event.location}`}
        >
          <span aria-hidden="true">📍</span> {event.location}
        </a>
      </div>
    </Reveal>
  )
}

interface TimeBlockProps {
  value: number
  label: string
}

function TimeBlock({ value, label }: TimeBlockProps) {
  return (
    <div className="time-block" aria-live="polite" aria-atomic="true">
      <span className="time-value">{String(value).padStart(2, '0')}</span>
      <span className="time-label">{label}</span>
    </div>
  )
}

function Events() {
  const timelineRef = useRef<HTMLDivElement>(null)

  // Scroll-driven gold line fill — draws the timeline as the user descends.
  // Uses shared scroll manager to avoid layout thrash.
  const fillProgress = useScrollProgress(timelineRef, {
    viewportAnchor: 0.7,
    startAt: 'top',
    endAt: 'bottom',
  })

  // Shared timer: compute all statuses once per second, not per card.
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])

  const activeEvents = useMemo(() => {
    return eventsData
      .map((event) => ({
        ...event,
        status: getEventStatus(event.start, event.end),
        timeRemaining: formatTimeRemaining(
          getEventStatus(event.start, event.end) === 'ongoing' ? event.end : event.start,
        ),
      }))
      .filter((e) => e.status !== 'hidden')
  }, [now])

  if (activeEvents.length === 0) return null

  return (
    <section className="events" id="eventos">
      <div className="stage-glow events-stage-glow" aria-hidden="true" />
      <div className="container">
        <Reveal as="h2" className="events-title">
          Próximos Eventos
        </Reveal>

        <div className="events-timeline" ref={timelineRef} role="list" aria-label="Lista de eventos próximos">
          {/* Gold timeline rail */}
          <div className="timeline-rail" aria-hidden="true">
            <div
              className="timeline-rail-fill"
              style={{
                transform: `scaleY(${fillProgress})`,
                transition: 'transform 200ms linear',
              }}
            />
          </div>

          {activeEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              side={index % 2 === 0 ? 'left' : 'right'}
              status={event.status}
              timeRemaining={event.timeRemaining}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events