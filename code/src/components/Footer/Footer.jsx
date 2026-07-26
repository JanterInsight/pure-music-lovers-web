import './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
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

          <div className="footer-links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="#eventos">Eventos</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#reseñas">Reseñas</a></li>
              <li><a href="#contactanos">Contáctanos</a></li>
            </ul>
          </div>

          <div className="footer-copyright">
            <p>© {currentYear} Puros Melómanos. Todos los derechos reservados.</p>
            <p className="footer-credits">
              Hecho por Janlier Rojas Santana, Alejandro Izada Diaz y Andrés Alejandro Morales 
              con ❤️ para nuestra comunidad.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer