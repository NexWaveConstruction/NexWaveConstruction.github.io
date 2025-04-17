import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About BuildRight Construction</h2>
          <p className="subtitle">Building Excellence Since 2000</p>
          
          <div className="about-description">
            <p>
              BuildRight Construction has been a leading name in the construction industry for over two decades. 
              We specialize in delivering high-quality construction services for both commercial and residential projects.
            </p>
            <p>
              Our commitment to excellence, attention to detail, and dedication to client satisfaction has earned us 
              a reputation as one of the most trusted construction companies in the region.
            </p>
          </div>

          <div className="stats">
            <div className="stat">
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
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