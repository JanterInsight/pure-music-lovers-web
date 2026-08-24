import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'

const defaultOptions: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px',
}

export function useRevealOnScroll<T extends HTMLElement>(
  options: IntersectionObserverInit = defaultOptions,
): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (typeof IntersectionObserver === 'undefined') {
      element.classList.add('is-revealed')
      return
    }

    let observer: IntersectionObserver | undefined

    const rafId = requestAnimationFrame(() => {
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer?.unobserve(entry.target)
          }
        }
      }, options)

      observer.observe(element)
    })

    return () => {
      cancelAnimationFrame(rafId)
      observer?.disconnect()
    }
  }, [])

  return ref
}
