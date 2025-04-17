import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="content-wrapper">
          <div className="hero-content">
            <h1>NexWave Construction</h1>
            <p>Trusted general contractor specializing in construction, renovations, and complete home services</p>
            <button 
              className="cta-button"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Call Us: 405-882-3587
            </button>
          </div>
        </div>
      </div>
      
      <div className="features">
        <div className="content-wrapper">
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🏗️</div>
              <h3>Construction</h3>
              <p>Expert craftsmanship and quality results for all your construction needs</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔨</div>
              <h3>Renovations</h3>
              <p>Transform your space with our attention to detail and modern solutions</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏠</div>
              <h3>Home Services</h3>
              <p>Complete home services to maintain and enhance your property</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 