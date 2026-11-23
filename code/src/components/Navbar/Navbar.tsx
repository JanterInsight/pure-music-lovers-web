import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const base = import.meta.env.BASE_URL

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLUListElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // Focus management for mobile menu: trap focus and mark main inert when open
  useEffect(() => {
    if (!menuOpen) return

    const menu = menuRef.current
    if (!menu) return

    const focusableElements = menu.querySelectorAll<HTMLElement>('a[href], button')
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    // Focus the first menu item when opening
    firstFocusable?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
        toggleRef.current?.focus()
        return
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault()
            lastFocusable?.focus()
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault()
            firstFocusable?.focus()
          }
        }
      }
    }

    menu.addEventListener('keydown', handleKeyDown)

    return () => {
      menu.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

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
          ref={toggleRef}
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          id="navbar-menu"
          ref={menuRef}
          className={`navbar-menu ${menuOpen ? 'active' : ''}`}
        >
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
