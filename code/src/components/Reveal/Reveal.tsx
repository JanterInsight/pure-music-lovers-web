import { createElement } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import './Reveal.css'

export type RevealVariant = 'up' | 'left' | 'right' | 'scale'

type RevealTag = 'div' | 'section' | 'h1' | 'h2' | 'h3' | 'p'

interface RevealProps {
  children: ReactNode
  as?: RevealTag
  className?: string
  variant?: RevealVariant
  delay?: number
  duration?: number
  onClick?: () => void
}

function Reveal({
  children,
  as = 'div',
  className = '',
  variant = 'up',
  delay = 0,
  duration,
  onClick,
}: RevealProps) {
  const ref = useRevealOnScroll<HTMLElement>()

  const classes = ['reveal', variant !== 'up' ? `reveal-${variant}` : '', className]
    .filter(Boolean)
    .join(' ')

  const style: CSSProperties = {
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : null),
    ...(duration ? { transitionDuration: `${duration}ms` } : null),
  }

  return createElement(as, { ref, className: classes, style, onClick }, children)
}

export default Reveal
