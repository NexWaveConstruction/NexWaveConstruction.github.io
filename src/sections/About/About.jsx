import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About NexWave Construction</h2>
          <p className="subtitle">Your Trusted General Contractor</p>
          
          <div className="about-description">
            <p>
              NexWave Construction is a trusted general contractor specializing in construction, renovations, and complete home services. 
              We deliver expert craftsmanship, attention to detail, and quality results for every project.
            </p>
            <p>
              Our team is dedicated to transforming your space with modern solutions and professional service. 
              From exterior renovations to complete home transformations, we bring your vision to life.
            </p>
          </div>

          <div className="stats">
            <div className="stat">
              <h3>100%</h3>
              <p>Quality Results</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Customer Service</p>
            </div>
            <div className="stat">
              <h3>405</h3>
              <p>Area Code</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3>Our Leadership Team</h3>
          <div className="team-members">
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="John Smith" />
              </div>
              <h4>John Smith</h4>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Sarah Johnson" />
              </div>
              <h4>Sarah Johnson</h4>
              <p>Project Manager</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Michael Brown" />
              </div>
              <h4>Michael Brown</h4>
              <p>Lead Architect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 