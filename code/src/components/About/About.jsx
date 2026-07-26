import './About.module.css'

function About() {
  return (
    <section className="about" id="sobre-nosotros">
      <div className="container">
        <h2 className="about-title">Puros Melómanos</h2>
        <div className="about-content">
          <p>
            <strong>Puros Melómanos</strong> es una comunidad apasionada dedicada a reunir 
            a amantes de la música de todos los géneros y edades. Nuestra misión es crear 
            experiencias musicales inolvidables a través de eventos cuidadosamente organizados, 
            donde la pasión por la música es el lenguaje universal que nos une.
          </p>
          <p>
            Desde nuestros inicios, hemos trabajado para construir un espacio donde la música 
            sea el puente que conecta a personas de diferentes backgrounds y gustos. Creemos 
            en el poder transformador de la música y en su capacidad de unir corazones.
          </p>
          <p>
            Nuestra comunidad celebra la diversidad musical, desde la Trova hasta el Hip-Hop, 
            desde el Rock hasta el Jazz. Cada evento es una oportunidad para descubrir nuevos 
            talentos, redescubrir clásicos y compartir momentos inolvidables con personas 
            que comparten tu pasión.
          </p>
          <p className="about-final-message">
            ¡Únete a nuestra comunidad y vive la música como nunca antes!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About