export type EventStatus = 'waiting' | 'ongoing' | 'finished' | 'hidden'

export interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface MusicalEvent {
  id: number
  title: string
  start: string
  end: string
  location: string
  mapsQuery: string
}

export interface GalleryImage {
  src: string
  alt: string
  srcName?: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

export interface WhatsAppGroup {
  name: string
  url: string
}
