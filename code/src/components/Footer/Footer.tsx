import Reveal from '../Reveal/Reveal'
import './Footer.css'

const quickLinks = [
  { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contactanos', label: 'Contáctanos' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-hairline" aria-hidden="true" />
      <div className="container">
        <Reveal variant="scale" className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Puros Melómanos</h3>
            <p className="footer-tagline">La música nos une</p>
          </div>

          <div className="footer-description">
            <p>
              Tu comunidad de amantes de la música. Descubre eventos increíbles
              y conecta con otros apasionados por la música.
            </p>
          </div>

          <nav className="footer-links" aria-label="Enlaces rápidos">
            <h4>Enlaces Rápidos</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-copyright">
            <p>© {currentYear} Puros Melómanos. Todos los derechos reservados.</p>
            <p className="footer-credits">
              Hecho por{' '}
              <a href="https://janterinsight.github.io/professional-portfolio/" target="_blank" rel="noopener noreferrer" className="footer-link">Janlier Rojas Santana</a>{' '}
              con{' '}
              <svg className="footer-heart" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M12 21s-7.5-4.9-9.4-9.2C1.2 8.4 3 4.8 6.6 4.3c2.2-.3 4.1 1 5.4 2.6 1.3-1.6 3.2-2.9 5.4-2.6 3.6.5 5.4 4.1 4 7.5C19.5 16.1 12 21 12 21z" />
              </svg>{' '}
              para nuestra comunidad.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}

export default Footer