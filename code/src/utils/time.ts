import type { EventStatus, TimeRemaining } from '../types'

const ONE_DAY_MS = 24 * 60 * 60 * 1000

export function getEventStatus(start: string, end: string): EventStatus {
  const now = Date.now()
  const startDate = new Date(start).getTime()
  const endDate = new Date(end).getTime()
  const oneDayAfterEnd = endDate + ONE_DAY_MS

  if (now < startDate) return 'waiting'
  if (now < endDate) return 'ongoing'
  if (now <= oneDayAfterEnd) return 'finished'
  return 'hidden'
}

export function formatTimeRemaining(targetDate: string): TimeRemaining {
  const diff = new Date(targetDate).getTime() - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / ONE_DAY_MS),
    hours: Math.floor((diff % ONE_DAY_MS) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

export function buildMapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
