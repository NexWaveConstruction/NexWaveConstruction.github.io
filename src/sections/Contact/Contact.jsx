import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p className="subtitle">Get in touch with our team</p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="icon">👤</div>
              <div>
                <h3>Contact Person</h3>
                <p>Marcos Garcia</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>405.882.3587</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>mgarcia@nexwaveconstruction.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact 