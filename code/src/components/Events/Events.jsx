import { useState, useEffect } from 'react'
import './Events.module.css'

const eventsData = [
  {
    id: 1,
    title: "Trova",
    start: "2026-07-31T15:00:00",
    end: "2026-07-31T18:00:00",
    location: "Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez, Sala Superior",
    mapsQuery: "Cuba, Holguín, Banes, Radio Banes, Calle Máximo Gómez"
  },
  {
    id: 2,
    title: "Hip-Hop y Rap",
    start: "2026-08-14T20:00:00",
    end: "2026-08-14T23:00:00",
    location: "Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez, Sala Superior",
    mapsQuery: "Cuba, Holguín, Banes, Radio Banes, Calle Máximo Gómez"
  }
]

function getEventStatus(start, end) {
  const now = new Date()
  const startDate = new Date(start)
  const endDate = new Date(end)
  const oneDayAfterEnd = new Date(endDate.getTime() + 24 * 60 * 60 * 1000)

  if (now < startDate) {
    return 'waiting'
  } else if (now >= startDate && now < endDate) {
    return 'ongoing'
  } else if (now >= endDate && now <= oneDayAfterEnd) {
    return 'finished'
  } else {
    return 'hidden'
  }
}

function formatTimeRemaining(targetDate) {
  const now = new Date()
  const target = new Date(targetDate)
  const diff = target - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

function EventCard({ event }) {
  const [timeRemaining, setTimeRemaining] = useState(formatTimeRemaining(event.start))
  const [status, setStatus] = useState(getEventStatus(event.start, event.end))

  useEffect(() => {
    const timer = setInterval(() => {
      const newStatus = getEventStatus(event.start, event.end)
      setStatus(newStatus)
      
      if (newStatus !== 'hidden') {
        setTimeRemaining(formatTimeRemaining(event.start))
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [event.start, event.end])

  if (status === 'hidden') {
    return null
  }

  const statusLabels = {
    waiting: 'En espera',
    ongoing: 'En curso',
    finished: 'Finalizado'
  }

  const statusClass = `event-status-${status}`

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapsQuery)}`

  return (
    <div className={`event-card ${statusClass}`}>
      <h3 className="event-title">{event.title}</h3>
      
      <div className="event-counter">
        <div className="time-block">
          <span className="time-value">{String(timeRemaining.days).padStart(2, '0')}</span>
          <span className="time-label">días</span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-block">
          <span className="time-value">{String(timeRemaining.hours).padStart(2, '0')}</span>
          <span className="time-label">horas</span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-block">
          <span className="time-value">{String(timeRemaining.minutes).padStart(2, '0')}</span>
          <span className="time-label">minutos</span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-block">
          <span className="time-value">{String(timeRemaining.seconds).padStart(2, '0')}</span>
          <span className="time-label">segundos</span>
        </div>
      </div>

      <div className="event-status">
        <span className="status-indicator"></span>
        <span className="status-text">{statusLabels[status]}</span>
      </div>

      <a 
        href={mapsUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="event-location"
      >
        📍 {event.location}
      </a>
    </div>
  )
}

function Events() {
  const activeEvents = eventsData.filter(event => {
    const status = getEventStatus(event.start, event.end)
    return status !== 'hidden'
  })

  if (activeEvents.length === 0) {
    return null
  }

  return (
    <section className="events" id="eventos">
      <div className="container">
        <h2 className="events-title">Próximos Eventos</h2>
        <div className="events-grid">
          {activeEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events