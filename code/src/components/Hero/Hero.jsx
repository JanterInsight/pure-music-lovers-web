import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1 className="hero-title">Puros Melómanos</h1>
        <h2 className="hero-subtitle">Tu comunidad de amantes de la música</h2>
        <p className="hero-description">
          Descubre eventos musicales increíbles, conecta con otros amantes de la música 
          y vive experiencias únicas en cada concierto
        </p>
        <div className="hero-buttons">
          <a href="#sobre-nosotros" className="btn btn-primary">Conócenos</a>
          <a href="#contactanos" className="btn btn-secondary">Contáctanos</a>
        </div>
      </div>
    </section>
  )
}

export default Hero