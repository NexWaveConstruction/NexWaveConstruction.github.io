import { useState } from 'react'
import './Header.css'

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>BuildRight Construction</h1>
        </div>
        
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <button 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header 