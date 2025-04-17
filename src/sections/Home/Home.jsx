import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="content-wrapper">
          <div className="hero-content">
            <h1>Building Dreams Into Reality</h1>
            <p>Quality construction services with over 20 years of excellence</p>
            <button 
              className="cta-button"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
      
      <div className="features">
        <div className="content-wrapper">
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🏗️</div>
              <h3>Expert Construction</h3>
              <p>Professional construction services for commercial and residential projects</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📋</div>
              <h3>Project Management</h3>
              <p>Efficient project management ensuring timely delivery and quality results</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💪</div>
              <h3>Experienced Team</h3>
              <p>Skilled professionals with years of industry experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 