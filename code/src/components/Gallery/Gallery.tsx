import { useEffect, useState } from 'react'
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

  const isOpen = selectedImageIndex !== null
  const selectedImage = selectedImageIndex !== null ? galleryImages[selectedImageIndex] : undefined

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const showNext = () => {
    setSelectedImageIndex((prev) => ((prev ?? 0) + 1) % galleryImages.length)
  }

  const showPrev = () => {
    setSelectedImageIndex((prev) => ((prev ?? 0) - 1 + galleryImages.length) % galleryImages.length)
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowRight':
          showNext()
          break
        case 'ArrowLeft':
          showPrev()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
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
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar">
            ✕
          </button>

          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); showPrev() }} aria-label="Anterior">
            ‹
          </button>

          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); showNext() }} aria-label="Siguiente">
            ›
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedImage && (
              <img src={selectedImage.src} alt={selectedImage.alt} />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
