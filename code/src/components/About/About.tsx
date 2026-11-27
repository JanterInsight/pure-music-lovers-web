import { useRef } from 'react'
import Reveal from '../Reveal/Reveal'
import { useReducedMotionScrollProgress } from '../../hooks/useScrollManager'
import './About.css'

interface Milestone {
  year: string
  title: string
  description: string
}

const milestones: Milestone[] = [
  {
    year: '2019',
    title: 'Nace la comunidad',
    description:
      'Un grupo de amigos se reúne en Radio Banes para compartir discos, historias y la pasión por la música.',
  },
  {
    year: '2021',
    title: 'Primer evento presencial',
    description:
      'La primera sesión en vivo reúne a más de 200 melómanos en Banes y confirma que el proyecto tiene corazón propio.',
  },
  {
    year: '2023',
    title: 'Expansión digital',
    description:
      'Los grupos de WhatsApp y la difusión en redes abren las puertas de la comunidad a melómanos de todas partes.',
  },
  {
    year: '2025',
    title: 'Escena propia',
    description:
      'Alianzas con salas y festivales regionales consolidan a Puros Melómanos como una referencia musical local.',
  },
]

interface ValueCard {
  title: string
  description: string
}

const values: ValueCard[] = [
  {
    title: 'Pasión Musical',
    description:
      'Desde la Trova hasta el Hip-Hop: celebramos cada género como una forma de vida, sin etiquetas ni fronteras.',
  },
  {
    title: 'Comunidad Inclusiva',
    description:
      'Un espacio abierto a todas las edades, gustos y trayectorias. Aquí nadie es espectador: todos son parte.',
  },
  {
    title: 'Experiencias Únicas',
    description:
      'Cada evento se diseña para que la música se viva y no solo se escuche, con la producción que se merece.',
  },
]

function About() {
  const timelineRef = useRef<HTMLDivElement>(null)

  // Scroll-driven gold line fill — draws the story as the user descends.
  // Uses shared scroll manager to avoid layout thrash.
  const fillProgress = useReducedMotionScrollProgress(timelineRef, {
    viewportAnchor: 0.75,
    startAt: 'top',
    endAt: 'bottom',
  })

  return (
    <section className="about" id="sobre-nosotros">
      <div className="stage-glow" aria-hidden="true" />

      <div className="container">
        <Reveal as="h2" className="about-title">
          Puros Melómanos
        </Reveal>

        <Reveal className="about-intro" delay={100}>
          <p>
            <strong>Puros Melómanos</strong> es una comunidad apasionada dedicada a reunir a
            amantes de la música de todos los géneros y edades. Nuestra misión es crear
            experiencias musicales inolvidables a través de eventos cuidadosamente
            organizados, donde la pasión por la música es el lenguaje universal que nos une.
          </p>
        </Reveal>

        <Reveal className="pull-quote" delay={150} variant="scale">
          <p>"La música es el idioma que nos une"</p>
        </Reveal>

        <div className="hairline about-divider" aria-hidden="true" />

        {/* ---------- Milestone timeline ---------- */}
        <div className="about-timeline" role="list" aria-label="Historia de Puros Melómanos" ref={timelineRef}>
          <div className="about-rail" aria-hidden="true">
            <div
              className="about-rail-fill"
              style={{
                transform: `scaleY(${fillProgress})`,
                ...(fillProgress === 1 ? {} : { transition: 'transform 200ms linear' }),
              }}
            />
          </div>

          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              role="listitem"
              className={`milestone milestone-side-${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <span className="milestone-node" aria-hidden="true">
                <span className="milestone-node-dot" />
              </span>
              <Reveal className="milestone-card" variant="up" delay={index * 80}>
                <p className="milestone-year">{milestone.year}</p>
                <h3 className="milestone-title">{milestone.title}</h3>
                <p className="milestone-description">{milestone.description}</p>
              </Reveal>
            </div>
          ))}
        </div>

        {/* ---------- Value cards ---------- */}
        <div className="about-values" role="list" aria-label="Nuestros valores">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              className="value-card"
              variant="up"
              delay={index * 120}
            >
              <div role="listitem" className="value-card-inner">
                <span className="value-icon" aria-hidden="true">
                  <svg className="value-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                    <path d="M9 18V6l10-2v12" />
                    <circle cx="6.5" cy="18" r="2.5" />
                    <circle cx="16.5" cy="16" r="2.5" />
                  </svg>
                </span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="about-cta" delay={100}>
          <p className="about-final-message">
            ¡Únete a nuestra comunidad y vive la música como nunca antes!
          </p>
          <a className="about-cta-link" href="#contactanos">
            Contáctanos
            <svg className="value-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default About