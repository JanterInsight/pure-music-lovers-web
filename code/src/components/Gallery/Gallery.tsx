import { useEffect, useRef, useState } from 'react'
import type { GalleryImage } from '../../types'
import Reveal from '../Reveal/Reveal'
import './Gallery.css'

const base = import.meta.env.BASE_URL

const galleryImages: GalleryImage[] = [
  { src: `${base}gallery/pure-music-lovers-front.jpg`, alt: 'Puros Melómanos - Banner Principal' },
  { src: `${base}gallery/diffusion-music-lovers-front.jpg`, alt: 'Difusión Melómana - Banner' },
  { src: `${base}gallery/second-event_1.jpg`, alt: 'Segundo Evento - Foto 1' },
  { src: `${base}gallery/second-event_2.jpg`, alt: 'Segundo Evento - Foto 2' },
  { src: `${base}gallery/second-event_3.jpg`, alt: 'Segundo Evento - Foto 3' },
  { src: `${base}gallery/second-event_4.jpg`, alt: 'Segundo Evento - Foto 4' },
  { src: `${base}gallery/second-event_5.jpg`, alt: 'Segundo Evento - Foto 5' },
]

function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  const isOpen = selectedImageIndex !== null
  const selectedImage = selectedImageIndex !== null ? galleryImages[selectedImageIndex] : undefined

  const closeLightbox = () => {
    setSelectedImageIndex(null)
    // Restore focus to the trigger element
    if (previousActiveElement.current) {
      previousActiveElement.current.focus()
      previousActiveElement.current = null
    }
  }

  const showNext = () => {
    setSelectedImageIndex((prev) => ((prev ?? 0) + 1) % galleryImages.length)
  }

  const showPrev = () => {
    setSelectedImageIndex((prev) => ((prev ?? 0) - 1 + galleryImages.length) % galleryImages.length)
  }

  // Focus trap for lightbox
  useEffect(() => {
    if (!isOpen || !lightboxRef.current) return

    // Store the element that triggered the lightbox
    previousActiveElement.current = document.activeElement as HTMLElement

    const lightbox = lightboxRef.current
    const focusableElements = lightbox.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
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
        return
      }

      switch (e.key) {
        case 'ArrowRight':
          showNext()
          break
        case 'ArrowLeft':
          showPrev()
          break
      }
    }

    lightbox.addEventListener('keydown', handleKeyDown)
    firstFocusable?.focus()

    return () => {
      lightbox.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <section className="gallery" id="galeria">
        <div className="container">
          <Reveal as="h2" className="gallery-title">Galería</Reveal>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <Reveal
                key={image.src}
                variant="scale"
                delay={(index % 4) * 90}
                className="gallery-item"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {isOpen && selectedImageIndex !== null && (
        <div
          ref={lightboxRef}
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={closeLightbox}
        >
          <h2 id="lightbox-title" className="visually-hidden">
            Lightbox de galería - Imagen {selectedImageIndex + 1} de {galleryImages.length}
          </h2>

          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label={`Cerrar lightbox de galería: ${selectedImage?.alt || 'imagen'}`}
          >
            ✕
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            aria-label={`Ver imagen anterior: ${galleryImages[(selectedImageIndex - 1 + galleryImages.length) % galleryImages.length]?.alt || 'imagen anterior'}`}
          >
            ‹
          </button>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); showNext() }}
            aria-label={`Ver imagen siguiente: ${galleryImages[(selectedImageIndex + 1) % galleryImages.length]?.alt || 'imagen siguiente'}`}
          >
            ›
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedImage && (
              <>
                <div className="lightbox-counter" aria-live="polite" aria-atomic="true">
                  Imagen {selectedImageIndex + 1} de {galleryImages.length}
                </div>
                <img src={selectedImage.src} alt={selectedImage.alt} />
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
