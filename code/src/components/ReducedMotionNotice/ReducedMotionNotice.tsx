import { useEffect, useRef, useState } from 'react'
import './ReducedMotionNotice.css'

const STORAGE_KEY = 'pml-reduced-motion-notice-dismissed'

function ReducedMotionNotice() {
  const [isVisible, setIsVisible] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const wasDismissed = sessionStorage.getItem(STORAGE_KEY) === 'true'

    if (mediaQuery.matches && !wasDismissed) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismiss()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="notice-overlay" role="dialog" aria-modal="true" aria-labelledby="notice-title">
      <div className="notice-card">
        <button className="notice-x" onClick={dismiss} aria-label="Cerrar aviso">
          ✕
        </button>
        <h2 id="notice-title" className="notice-title">Animaciones desactivadas</h2>
        <p className="notice-text">
          Detectamos que tu sistema tiene activada la preferencia de
          <strong> reducción de movimiento</strong>. Por accesibilidad, las animaciones
          de esta página están desactivadas.
        </p>
        <p className="notice-text">
          Si deseas verlas, desactiva la opción «Reducir movimiento» en la
          configuración de accesibilidad de tu dispositivo y recarga la página.
        </p>
        <button ref={closeButtonRef} className="notice-close-btn" onClick={dismiss}>
          Entendido
        </button>
      </div>
    </div>
  )
}

export default ReducedMotionNotice
