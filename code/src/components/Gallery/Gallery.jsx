import { useState, useEffect } from 'react'
import './Gallery.module.css'

const galleryImages = [
  { src: '/gallery/pure-music-lovers-front.jpg', alt: 'Evento Puros Melómanos - Foto 1' },
  { src: '/gallery/diffusion-music-lovers-front.jpg', alt: 'Difusión Melómana - Foto 1' },
  { src: '/gallery/second-event_1.jpg', alt: 'Segundo Evento - Foto 1' },
  { src: '/gallery/second-event_2.jpg', alt: 'Segundo Evento - Foto 2' }
]

function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const openLightbox = (index) => {
    setSelectedImageIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImageIndex(null)
  }

  const showNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const showPrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return

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
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen])

  return (
    <>
      <section className="gallery" id="galeria">
        <div className="container">
          <h2 className="gallery-title">Galería</h2>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {isLightboxOpen && selectedImageIndex !== null && (
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
            <img 
              src={galleryImages[selectedImageIndex].src} 
              alt={galleryImages[selectedImageIndex].alt}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery