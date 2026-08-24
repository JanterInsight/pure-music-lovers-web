import { useState } from 'react'
import './Navbar.css'

const base = import.meta.env.BASE_URL

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <img
            src={`${base}icons/Icon-Main-Full-64x64.png`}
            alt="Logo de Puros Melómanos"
            className="navbar-icon"
            width={32}
            height={32}
          />
          <span className="navbar-title">Puros Melómanos</span>
        </a>

        <button
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#sobre-nosotros" onClick={closeMenu}>Sobre nosotros</a></li>
          <li><a href="#eventos" onClick={closeMenu}>Eventos</a></li>
          <li><a href="#galeria" onClick={closeMenu}>Galería</a></li>
          <li><a href="#contactanos" className="navbar-contact-btn" onClick={closeMenu}>Contáctanos</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
