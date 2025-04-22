import { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formsubmit.co/mgarcia@nexwaveconstruction.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        setIsModalOpen(true)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again.')
    }
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
              <div className="contact-text">
                <h3>Contact Person</h3>
                <p>Marcos Garcia</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">📞</div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>405.882.3587</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">✉️</div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>mgarcia@nexwaveconstruction.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.href} />
            
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Thank You!</h2>
        <p>Your message has been sent successfully. We will get back to you soon.</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  )
}

export default Contact 