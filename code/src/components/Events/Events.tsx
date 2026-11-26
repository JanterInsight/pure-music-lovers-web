import { useEffect, useRef, useState } from 'react'
import type { MusicalEvent, EventStatus, TimeRemaining } from '../../types'
import { getEventStatus, formatTimeRemaining, buildMapsUrl } from '../../utils/time'
import { eventsData } from '../../data/events'
import Reveal from '../Reveal/Reveal'
import './Events.css'

const statusLabels: Record<Exclude<EventStatus, 'hidden'>, string> = {
  waiting: 'En espera',
  ongoing: 'En curso',
  finished: 'Finalizado',
}

const ZERO_TIME: TimeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 }

interface EventCardProps {
  event: MusicalEvent
  index: number
  side: 'left' | 'right'
}

function EventCard({ event, index, side }: EventCardProps) {
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
    <div className="time-block">
      <span className="time-value">{String(value).padStart(2, '0')}</span>
      <span className="time-label">{label}</span>
    </div>
  )
}

function Events() {
  const activeEvents = eventsData.filter((event) => getEventStatus(event.start, event.end) !== 'hidden')
  const timelineRef = useRef<HTMLDivElement>(null)
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const [fillProgress, setFillProgress] = useState(reduceMotion ? 1 : 0)

  if (activeEvents.length === 0) return null

  // Scroll-driven gold line fill — draws the timeline as the user descends
  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    // Reduced motion: show the complete rail, skip scroll-driven drawing
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setFillProgress(1)
      return
    }

    const updateFill = () => {
      const rect = timeline.getBoundingClientRect()
      const viewportAnchor = window.innerHeight * 0.7

      if (rect.top >= viewportAnchor) {
        setFillProgress(0)
        return
      }

      const scrolled = viewportAnchor - rect.top
      const progress = Math.min(1, Math.max(0, scrolled / rect.height))
      setFillProgress(progress)
    }

    updateFill()
    window.addEventListener('scroll', updateFill, { passive: true })
    window.addEventListener('resize', updateFill)

    return () => {
      window.removeEventListener('scroll', updateFill)
      window.removeEventListener('resize', updateFill)
    }
  }, [])

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
                ...(reduceMotion ? {} : { transition: 'transform 200ms linear' }),
              }}
            />
          </div>

          {activeEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              side={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events