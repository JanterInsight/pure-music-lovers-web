import { useEffect, useRef, useState } from 'react'

/**
 * Shared scroll manager - consolidates multiple scroll listeners into one.
 * Provides scroll progress (0-1) for elements via IntersectionObserver or scroll position.
 * Batches reads/writes to avoid layout thrashing.
 */

interface ScrollSubscriber {
  id: string
  element: HTMLElement | null
  onProgress: (progress: number) => void
  options?: {
    /** Viewport anchor (0-1): 0 = top, 0.5 = center, 1 = bottom */
    viewportAnchor?: number
    /** Start progress when element top reaches this anchor */
    startAt?: 'top' | 'center' | 'bottom'
    /** End progress when element bottom reaches this anchor */
    endAt?: 'top' | 'center' | 'bottom'
  }
}

const subscribers = new Map<string, ScrollSubscriber>()
let rafId: number | null = null
let isInitialized = false

function notifySubscribers() {
  const viewportHeight = window.innerHeight

  subscribers.forEach((sub) => {
    if (!sub.element) return

    const rect = sub.element.getBoundingClientRect()
    const { viewportAnchor = 0.75, startAt = 'top', endAt = 'bottom' } = sub.options || {}

    const anchorY = viewportHeight * viewportAnchor

    let startY: number, endY: number

    switch (startAt) {
      case 'top': startY = rect.top; break
      case 'center': startY = rect.top + rect.height / 2; break
      case 'bottom': startY = rect.bottom; break
    }

    switch (endAt) {
      case 'top': endY = rect.top; break
      case 'center': endY = rect.top + rect.height / 2; break
      case 'bottom': endY = rect.bottom; break
    }

    // Progress: 0 when startY >= anchorY, 1 when endY <= anchorY
    const totalDistance = Math.abs(startY - endY) || 1
    const currentDistance = Math.abs(anchorY - startY)
    const progress = Math.min(1, Math.max(0, 1 - currentDistance / totalDistance))

    sub.onProgress(progress)
  })

  rafId = requestAnimationFrame(notifySubscribers)
}

function ensureInitialized() {
  if (isInitialized) return
  isInitialized = true
  notifySubscribers()

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    if (rafId !== null) cancelAnimationFrame(rafId)
    subscribers.clear()
  })
}

export function useScrollManager() {
  const register = (id: string, element: HTMLElement | null, onProgress: (progress: number) => void, options?: ScrollSubscriber['options']) => {
    ensureInitialized()
    subscribers.set(id, { id, element, onProgress, options })
    return () => { subscribers.delete(id) }
  }

  const unregister = (id: string) => {
    subscribers.delete(id)
  }

  return { register, unregister }
}

/**
 * Hook for components that need scroll-driven progress.
 * Uses the shared manager to avoid multiple scroll listeners.
 */
export function useScrollProgress(
  elementRef: React.RefObject<HTMLElement | null>,
  options?: ScrollSubscriber['options']
): number {
  const [progress, setProgress] = useState(0)
  const idRef = useRef(`scroll-${Math.random().toString(36).slice(2)}`)

  useEffect(() => {
    const { register } = useScrollManager()
    const cleanup = register(idRef.current, elementRef.current, setProgress, options)
    return cleanup
  }, [elementRef, options?.viewportAnchor, options?.startAt, options?.endAt])

  return progress
}