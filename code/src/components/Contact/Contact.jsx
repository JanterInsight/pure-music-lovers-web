import { useState } from 'react'
import './Contact.css'

const contactInfo = {
  email: "puremusiclovers@gmail.com",
  phone: "+53 XXXXXXXX",
  address: "Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez",
  whatsappGroups: [
    {
      name: "Puros Melómanos",
      url: "https://chat.whatsapp.com/CkUOUaJSCrh8SX8k55UUVit?s=sw&p=a&mlu=0&ilr=0"
    },
    {
      name: "Difusión Melómana",
      url: "https://chat.whatsapp.com/JCM1ArPROaY7O44gmCmj4L"
    }
  ]
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres'
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    if (!formData.subject.trim() || formData.subject.length < 5) {
      newErrors.subject = 'El asunto debe tener al menos 5 caracteres'
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`

    window.location.href = mailtoLink
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
      alert('Mensaje enviado correctamente. Se abrirá tu cliente de correo.')
    }, 500)
  }

  return (
    <section className="contact" id="contactanos">
      <div className="container">
        <h2 className="contact-title">Contáctanos</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Información de Contacto</h3>
            
            <div className="contact-info-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-icon">📱</span>
              <div>
                <h4>Teléfono</h4>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Dirección</h4>
                <p>{contactInfo.address}</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-icon">💬</span>
              <div>
                <h4>Grupos de WhatsApp</h4>
                {contactInfo.whatsappGroups.map((group, index) => (
                  <a 
                    key={index} 
                    href={group.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    {group.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="contact-form-title">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Tu nombre completo"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="tu@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                  placeholder="Asunto del mensaje"
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Escribe tu mensaje aquí..."
                  rows="5"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact