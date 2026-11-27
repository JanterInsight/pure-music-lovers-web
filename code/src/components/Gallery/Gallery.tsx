import { useCallback, useEffect, useRef, useState } from 'react'
import type { GalleryImage } from '../../types'
import Reveal from '../Reveal/Reveal'
import './Gallery.css'

const base = import.meta.env.BASE_URL

// Responsive image sizes for srcset
const IMAGE_WIDTHS = [400, 800, 1200, 1600]

function buildSrcSet(imageName: string): string {
  return IMAGE_WIDTHS.map((w) => `${base}gallery/${imageName}-${w}w.webp ${w}w`).join(', ')
}

const galleryImages: GalleryImage[] = [
  { src: `${base}gallery/pure-music-lovers-front.webp`, alt: 'Puros Melómanos', srcName: 'pure-music-lovers-front' },
  { src: `${base}gallery/diffusion-music-lovers-front.webp`, alt: 'Difusión Melómana', srcName: 'diffusion-music-lovers-front' },
  { src: `${base}gallery/second-event_1.webp`, alt: 'Foto 1', srcName: 'second-event_1' },
  { src: `${base}gallery/second-event_2.webp`, alt: 'Foto 2', srcName: 'second-event_2' },
  { src: `${base}gallery/second-event_3.webp`, alt: 'Foto 3', srcName: 'second-event_3' },
  { src: `${base}gallery/second-event_4.webp`, alt: 'Foto 4', srcName: 'second-event_4' },
  { src: `${base}gallery/second-event_5.webp`, alt: 'Foto 5', srcName: 'second-event_5' },
]

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  const isLightboxOpen = selectedImageIndex !== null
  const selectedImage = selectedImageIndex !== null ? galleryImages[selectedImageIndex] : undefined

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }, [])

  const showPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  // Keyboard navigation on the section (only when lightbox is closed)
  useEffect(() => {
    if (isLightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNext()
      else if (e.key === 'ArrowLeft') showPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, showNext, showPrev])

  // Keep the active thumbnail in view inside the film strip
  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    const activeThumb = strip.querySelector<HTMLElement>(`[data-thumb-index="${currentIndex}"]`)
    if (!activeThumb) return

    const stripRect = strip.getBoundingClientRect()
    const thumbRect = activeThumb.getBoundingClientRect()
    const overflowLeft = thumbRect.left < stripRect.left
    const overflowRight = thumbRect.right > stripRect.right

    if (overflowLeft || overflowRight) {
      activeThumb.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [currentIndex])

  const closeLightbox = () => {
    setSelectedImageIndex(null)
    // Restore focus to the trigger element
    if (previousActiveElement.current) {
      previousActiveElement.current.focus()
      previousActiveElement.current = null
    }
  }

  // Focus trap for lightbox
  useEffect(() => {
    if (!isLightboxOpen || !lightboxRef.current) return

    // Store the element that triggered the lightbox
    previousActiveElement.current = document.activeElement as HTMLElement

    const lightbox = lightboxRef.current
    const focusableElements = lightbox.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
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
          setSelectedImageIndex((prev) => ((prev ?? 0) + 1) % galleryImages.length)
          break
        case 'ArrowLeft':
          setSelectedImageIndex((prev) => ((prev ?? 0) - 1 + galleryImages.length) % galleryImages.length)
          break
      }
    }

    lightbox.addEventListener('keydown', handleKeyDown)
    firstFocusable?.focus()

    return () => {
      lightbox.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLightboxOpen])

  const currentImage = galleryImages[currentIndex]

  return (
    <>
      <section className="gallery" id="galeria" aria-roledescription="carousel" aria-label="Galería de imágenes">
        <div className="stage-glow gallery-stage-glow" aria-hidden="true" />
        <div className="container">
          <Reveal as="h2" className="gallery-title">
            Galería
          </Reveal>

          {/* Full-bleed viewer — manual navigation only */}
          <Reveal className="carousel" variant="scale">
            <div className="carousel-frame">
              {galleryImages.map((image, index) => (
                <picture key={image.srcName || image.src}>
                  <source type="image/webp" srcSet={buildSrcSet(image.srcName || '')} sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1600px" />
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`carousel-slide${index === currentIndex ? ' is-active' : ''}`}
                    loading="lazy"
                    aria-hidden={index !== currentIndex}
                    width={1600}
                    height={900}
                  />
                </picture>
              ))}
            </div>

            <button
              className="carousel-nav carousel-prev"
              onClick={showPrev}
              aria-label="Ver imagen anterior de la galería"
              type="button"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <button
              className="carousel-nav carousel-next"
              onClick={showNext}
              aria-label="Ver imagen siguiente de la galería"
              type="button"
            >
              <span aria-hidden="true">›</span>
            </button>

            <div className="carousel-meta" aria-live="polite" aria-atomic="true">
              <span className="carousel-position">
                {currentIndex + 1} / {galleryImages.length}
              </span>
            </div>

            <button
              className="carousel-expand"
              onClick={() => setSelectedImageIndex(currentIndex)}
              aria-label={`Ampliar imagen: ${currentImage?.alt || 'imagen de galería'}`}
              type="button"
            >
              <span aria-hidden="true">⤢</span>
            </button>
          </Reveal>

          {/* Film strip — manual selection */}
          <div className="film-strip" ref={stripRef}>
            {galleryImages.map((image, index) => (
              <button
                key={image.srcName || image.src}
                type="button"
                className={`film-thumb${index === currentIndex ? ' is-active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ver imagen ${index + 1}: ${image.alt}`}
                aria-current={index === currentIndex}
                data-thumb-index={index}
              >
                <picture>
                  <source type="image/webp" srcSet={`${base}gallery/${image.srcName || ''}-400w.webp 400w, ${base}gallery/${image.srcName || ''}-800w.webp 800w`} sizes="148px" />
                  <img src={`${base}gallery/${image.srcName || ''}-400w.webp`} alt="" loading="lazy" width={148} height={110} />
                </picture>
              </button>
            ))}
          </div>
        </div>
      </section>

      {isLightboxOpen && selectedImageIndex !== null && (
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
            <span aria-hidden="true">✕</span>
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImageIndex((prev) => ((prev ?? 0) - 1 + galleryImages.length) % galleryImages.length)
            }}
            aria-label={`Ver imagen anterior: ${galleryImages[(selectedImageIndex - 1 + galleryImages.length) % galleryImages.length]?.alt || 'imagen anterior'}`}
          >
            <span aria-hidden="true">‹</span>
          </button>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImageIndex((prev) => ((prev ?? 0) + 1) % galleryImages.length)
            }}
            aria-label={`Ver imagen siguiente: ${galleryImages[(selectedImageIndex + 1) % galleryImages.length]?.alt || 'imagen siguiente'}`}
          >
            <span aria-hidden="true">›</span>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedImage && (
              <>
                <div className="lightbox-counter" aria-live="polite" aria-atomic="true">
                  Imagen {selectedImageIndex + 1} de {galleryImages.length}
                </div>
                <picture>
                  <source type="image/webp" srcSet={buildSrcSet(selectedImage.srcName || '')} sizes="90vw" />
                  <img src={selectedImage.src} alt={selectedImage.alt} width={1600} height={900} />
                </picture>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery