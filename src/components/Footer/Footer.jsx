import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>NexWave Construction</h3>
          <p>Building excellence, delivering quality, and creating lasting impressions.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li><span>📞</span> +1 (405) 882-3587</li>
            <li><span>✉️</span> mgarcia@nexwaveconstruction.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BuildRight Construction. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 