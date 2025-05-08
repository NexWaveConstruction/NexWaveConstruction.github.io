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
                <img src="/team/marcos.jpg" alt="Marcos Garcia" />
              </div>
              <h4>Marcos Garcia</h4>
              <p>CEO & Founder</p>
              <div className="member-description">
                <p>
                  Marcos graduated from the University of Oklahoma with a Bachelor's Degree in Construction Science. Growing up around residential construction, he developed a passion for building early on.
                  After spending 5 years in commercial construction, managing large-scale projects and honing his technical skills, Marcos returned to his roots and founded NexWave Construction.
                  Marcos brings a well-rounded perspective to every project and is committed to delivering high-quality work the truly relflects his client's visions. 
                  At the heart of it all, Marcos is driven by one goal: helping people turn into reality, one project at a time.               
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 