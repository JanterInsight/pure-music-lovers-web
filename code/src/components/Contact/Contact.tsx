import { useEffect, useRef, useState } from 'react'
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

/* Decorative gold SVG icons — aria-hidden, styled via currentColor */
function IconMail() {
  return (
    <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 6 9-6" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M6.5 3h2.2l1.6 4-2 1.4a11.5 11.5 0 0 0 5.3 5.3l1.4-2 4 1.6v2.2A2.5 2.5 0 0 1 16.4 21C10.1 20.6 3.4 13.9 3 7.6A2.5 2.5 0 0 1 5.5 5z" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function IconChat() {
  return (
    <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L4 21l1.4-4.2A8.5 8.5 0 1 1 21 12z" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg className="contact-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [honeypot, setHoneypot] = useState('')
  const toastTimer = useRef<number | undefined>(undefined)

  // Non-blocking toast — auto-dismiss after 4s, polite screen-reader announcement
  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  const showToast = (message: string) => {
    window.clearTimeout(toastTimer.current)
    setToast(message)
    toastTimer.current = window.setTimeout(() => setToast(null), 4000)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  // Live validation on blur: confirm errors early without interrupting typing
  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    const fieldError = validateForm(formData)[name as keyof ContactFormData]
    setErrors((prev) => ({ ...prev, [name]: fieldError }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Honeypot — silent drop for bots
    if (honeypot.trim()) return

    const newErrors = validateForm(formData)
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      // Move focus to the first invalid field
      const firstInvalid = Object.keys(newErrors)[0]
      if (firstInvalid) document.getElementById(firstInvalid)?.focus()
      return
    }

    setIsSubmitting(true)

    const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`

    setTimeout(() => {
      setFormData(emptyForm)
      setIsSubmitting(false)
      showToast('Mensaje enviado correctamente. Se abrirá tu cliente de correo.')
    }, 500)
  }

  return (
    <section className="contact" id="contactanos">
      <div className="stage-glow" aria-hidden="true" />

      <div className="container">
        <Reveal as="h2" className="contact-title">
          Contáctanos
        </Reveal>

        <div className="contact-content">
          <div className="contact-info">
            <Reveal as="h3" className="contact-info-title" variant="left">
              Información de Contacto
            </Reveal>

            <Reveal variant="left" delay={100} className="contact-info-item">
              <span className="contact-icon">
                <IconMail />
              </span>
              <div className="contact-info-body">
                <h4>Email</h4>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </Reveal>

            <Reveal variant="left" delay={200} className="contact-info-item">
              <span className="contact-icon">
                <IconPhone />
              </span>
              <div className="contact-info-body">
                <h4>Teléfono (DJ MonarC — Jose)</h4>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </div>
            </Reveal>

            <Reveal variant="left" delay={300} className="contact-info-item">
              <span className="contact-icon">
                <IconPin />
              </span>
              <div className="contact-info-body">
                <h4>Dirección</h4>
                <a href={buildMapsUrl(contactInfo.address)} target="_blank" rel="noopener noreferrer">
                  {contactInfo.address}
                </a>
              </div>
            </Reveal>

            <Reveal variant="left" delay={400} className="contact-info-item">
              <span className="contact-icon">
                <IconChat />
              </span>
              <div className="contact-info-body">
                <h4>Grupos de WhatsApp</h4>
                <div className="whatsapp-group-list">
                  {contactInfo.whatsappGroups.map((group) => (
                    <a key={group.url} href={group.url} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                      {group.name}
                      <svg className="contact-svg whatsapp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
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
                  onBlur={handleBlur}
                  className={`form-input${errors.name ? ' error' : ''}`}
                  placeholder=" "
                  autoComplete="name"
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
                  onBlur={handleBlur}
                  className={`form-input${errors.email ? ' error' : ''}`}
                  placeholder=" "
                  autoComplete="email"
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
                  onBlur={handleBlur}
                  className={`form-input${errors.subject ? ' error' : ''}`}
                  placeholder=" "
                  autoComplete="off"
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
                  onBlur={handleBlur}
                  className={`form-input${errors.message ? ' error' : ''}`}
                  placeholder=" "
                  rows={5}
                  aria-invalid={errors.message ? 'true' : undefined}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  required
                ></textarea>
                {errors.message && <span id="message-error" role="alert" className="error-message">{errors.message}</span>}
              </div>

              {/* Honeypot — hidden from users and AT, catches naive bots */}
              <div className="honeypot-field" aria-hidden="true">
                <label htmlFor="hp-contact">No llenar este campo</label>
                <input
                  type="text"
                  id="hp-contact"
                  name="hp-contact"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Success toast — non-blocking, live region, auto-dismiss */}
      <div className="toast-region" role="status" aria-live="polite">
        {toast && (
          <div className="toast">
            <span className="toast-icon">
              <IconCheck />
            </span>
            <p className="toast-message">{toast}</p>
            <button
              type="button"
              className="toast-close"
              onClick={() => setToast(null)}
              aria-label="Cerrar notificación"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact