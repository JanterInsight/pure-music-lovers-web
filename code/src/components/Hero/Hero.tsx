import { useEffect, useRef } from 'react'
import KineticText from '../KineticText/KineticText'
import Reveal from '../Reveal/Reveal'
import { useReducedMotionScrollProgress } from '../../hooks/useScrollManager'
import './Hero.css'

function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)

  // Subtle parallax: the ambient stage-glow drifts slower than the copy.
  // Uses shared scroll manager to avoid layout thrash.
  const scrollProgress = useReducedMotionScrollProgress(heroRef, {
    viewportAnchor: 0,
    startAt: 'top',
    endAt: 'bottom',
  })

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    // scrollProgress is 0 at hero top, 1 when hero bottom passes viewport top
    glow.style.transform = `translateY(${scrollProgress * 60}px) scale(${1 + scrollProgress * 0.15})`
    glow.style.opacity = String(1 - scrollProgress * 0.7)
    heroRef.current?.style.setProperty('--scroll', scrollProgress.toFixed(3))
  }, [scrollProgress])

  return (
    <section className="hero" id="inicio" ref={heroRef}>
      <div className="stage-glow" ref={glowRef} aria-hidden="true" />

      <div className="hero-vignette" aria-hidden="true" />

      <div className="container hero-inner">
        <Reveal as="p" className="hero-eyebrow" variant="up" delay={150} duration={900}>
          Radio Banes · Cuba
        </Reveal>

        <KineticText as="h1" className="hero-title" outlineFill stagger={70} delay={350}>
          Puros Melómanos
        </KineticText>

        <KineticText as="h2" className="hero-subtitle" stagger={30} delay={1100}>
          Tu comunidad de amantes de la música
        </KineticText>

        <Reveal className="hero-content" delay={1700} duration={1200}>
          <p className="hero-description">
            Descubre eventos musicales increíbles, conecta con otros amantes de la música
            y vive experiencias únicas en cada concierto.
          </p>

          <div className="hero-buttons">
            <a href="#sobre-nosotros" className="btn btn-primary">
              <span>Conócenos</span>
            </a>
            <a href="#contactanos" className="btn btn-secondary">
              <span>Contáctanos</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero