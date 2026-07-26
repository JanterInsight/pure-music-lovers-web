import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <span className="navbar-icon">🎵</span>
          <span className="navbar-title">Puros Melómanos</span>
        </a>

        <button 
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#sobre-nosotros" onClick={closeMenu}>Sobre nosotros</a></li>
          <li><a href="#eventos" onClick={closeMenu}>Eventos</a></li>
          <li><a href="#galeria" onClick={closeMenu}>Galería</a></li>
          <li><a href="#reseñas" onClick={closeMenu}>Reseñas</a></li>
          <li><a href="#contactanos" className="navbar-contact-btn">Contáctanos</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar