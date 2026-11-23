import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { ContactFormData, ContactFormErrors, WhatsAppGroup } from '../../types'
import { buildMapsUrl } from '../../utils/time'
import Reveal from '../Reveal/Reveal'
import './Contact.css'

const contactInfo = {
  email: 'puremusiclovers@gmail.com',
  phone: '+53 56187069',
  address: 'Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez',
  whatsappGroups: [
    {
      name: 'Puros Melómanos',
      url: 'https://chat.whatsapp.com/CkUOUaJSCrh8SX8k55UUVit?s=sw&p=a&mlu=0&ilr=0',
    },
    {
      name: 'Difusión Melómana',
      url: 'https://chat.whatsapp.com/JCM1ArPROaY7O44gmCmj4L',
    },
  ] satisfies WhatsAppGroup[],
}

const emptyForm: ContactFormData = { name: '', email: '', subject: '', message: '' }

function validateForm(formData: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!formData.name.trim() || formData.name.length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres'
  }

  if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Ingresa un email válido'
  }

  if (!formData.subject.trim() || formData.subject.length < 5) {
    errors.subject = 'El asunto debe tener al menos 5 caracteres'
  }

  if (!formData.message.trim() || formData.message.length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
  }

  return errors
}

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors = validateForm(formData)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setIsSubmitting(true)

    const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`

    setTimeout(() => {
      setFormData(emptyForm)
      setIsSubmitting(false)
      alert('Mensaje enviado correctamente. Se abrirá tu cliente de correo.')
    }, 500)
  }

  return (
    <section className="contact" id="contactanos">
      <div className="container">
        <Reveal as="h2" className="contact-title">Contáctanos</Reveal>

        <div className="contact-content">
          <div className="contact-info">
            <Reveal variant="left">
              <h3 className="contact-info-title">Información de Contacto</h3>
            </Reveal>

            <Reveal variant="left" delay={100}>
              <div className="contact-info-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="left" delay={200}>
              <div className="contact-info-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Teléfono(DJ MonarC - Jose)</h4>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="left" delay={300}>
              <div className="contact-info-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Dirección</h4>
                  <a href={buildMapsUrl(contactInfo.address)} target="_blank" rel="noopener noreferrer">
                    {contactInfo.address}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="left" delay={400}>
              <div className="contact-info-item">
                <span className="contact-icon">💬</span>
                <div>
                  <h4>Grupos de WhatsApp</h4>
                  {contactInfo.whatsappGroups.map((group) => (
                    <a key={group.url} href={group.url} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                      {group.name}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={150} className="contact-form-container">
            <h3 className="contact-form-title">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
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
                  aria-invalid={errors.name ? 'true' : undefined}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  required
                />
                {errors.name && <span id="name-error" role="alert" className="error-message">{errors.name}</span>}
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
                  aria-invalid={errors.email ? 'true' : undefined}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                />
                {errors.email && <span id="email-error" role="alert" className="error-message">{errors.email}</span>}
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
                  aria-invalid={errors.subject ? 'true' : undefined}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  required
                />
                {errors.subject && <span id="subject-error" role="alert" className="error-message">{errors.subject}</span>}
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
                  rows={5}
                  aria-invalid={errors.message ? 'true' : undefined}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  required
                ></textarea>
                {errors.message && <span id="message-error" role="alert" className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
