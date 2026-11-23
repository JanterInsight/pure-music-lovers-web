import { createElement, useEffect, useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import './KineticText.css'

type RevealTag = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'

interface KineticTextProps {
  /** Text to animate. Supports '\n' for explicit line breaks. */
  children: string
  /** HTML element to render as. Defaults to 'span'. */
  as?: RevealTag
  /** Extra class names (e.g. 'hero-title kinetic'). */
  className?: string
  /** ms between each character reveal. Default 60ms. */
  stagger?: number
  /** ms before the whole entrance begins. Default 0. */
  delay?: number
  /** Sweep a gold fill left→right after the chars settle (outline headline). Default false. */
  outlineFill?: boolean
}

/**
 * Splits text into per-character spans that reveal with a stagger.
 *
 * Structure keeps wrapping sane:
 *   - words are `inline-block` (never break mid-word)
 *   - a real space text node sits between words → normal wrap points
 *   - '\n' in the string becomes a hard line break
 *
 * Accessibility: renders the real element (`as`, e.g. an `h1`) so heading
 * semantics survive; the full string is exposed via aria-label and every
 * visual span is aria-hidden so AT reads the text exactly once.
 */
function KineticText({
  children,
  as = 'span',
  className = '',
  stagger = 60,
  delay = 0,
  outlineFill = false,
}: KineticTextProps) {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = requestAnimationFrame(() => {
      element.classList.add('is-revealed')
    })

    if (reduceMotion) {
      element.classList.add('is-revealed')
    }

    return () => cancelAnimationFrame(raf)
  }, [])

  // Build words (with per-char spans) and lines joined by <br>
  let charIndex = 0
  const renderInline = (): ReactNode => {
    const lines = children.split('\n')
    const nodes: ReactNode[] = []

    lines.forEach((line, lineIdx) => {
      if (lineIdx > 0) nodes.push(<br key={`br-${lineIdx}`} />)

      const words = line.split(' ')
      words.forEach((word, wordIdx) => {
        if (wordIdx > 0) nodes.push(' ')
        nodes.push(
          <span className="kinetic-word" key={`w-${charIndex}`}>
            {Array.from(word).map((char) => (
              <span
                key={`c-${charIndex}`}
                className="kinetic-char"
                style={{ '--i': charIndex++, '--stagger': `${stagger}ms` } as CSSProperties}
              >
                {char}
              </span>
            ))}
          </span>,
        )
      })
    })

    return nodes
  }

  const containerStyle: CSSProperties = {
    ...(delay > 0 ? ({ '--delay': `${delay}ms` } as CSSProperties) : null),
  }

  return createElement(
    as,
    {
      ref: containerRef,
      className: `kinetic ${outlineFill ? 'outline-fill' : ''} ${className}`.trim(),
      style: containerStyle,
      'aria-label': children,
    },
    <span className="kinetic-text" aria-hidden="true">
      {renderInline()}
    </span>,
  )
}

export default KineticText