import { useState } from 'react'
import './Projects.css'

// Projects component with image slideshow
const Projects = () => {
  // State to track current image index
  const [currentIndex, setCurrentIndex] = useState(0)

  // Array of project images with their details
  const projects = [
    {id: 1, image: '/projects/3212_Venice_(Fireplace_Restoration)/UTF-8IMG_5641.JPG'},
    {id: 2, image: '/projects/3212_Venice_(Fireplace_Restoration)/UTF-8IMG_5642.JPG'},
    {id: 3, image: '/projects/Guthrie_(New_Construction)/Image_1.jpg'},
    {id: 4, image: '/projects/Guthrie_(New_Construction)/Image_2.jpg'},
    {id: 5, image: '/projects/Guthrie_(New_Construction)/Image_3.jpg'},
    {id: 6, image: '/projects/Guthrie_(New_Construction)/Image_4.jpg'},
    {id: 7, image: '/projects/Guthrie_(New_Construction)/Image_5.jpg'},
    {id: 8, image: '/projects/Guthrie_(New_Construction)/Image_6.jpg'},
    {id: 9, image: '/projects/Guthrie_(New_Construction)/Image_7.jpg'},
    {id: 10, image: '/projects/Guthrie_(New_Construction)/Image_8.jpg'},
    {id: 11, image: '/projects/OKC_1208_SW_40th/Image_6.jpg'},
    {id: 12, image: '/projects/OKC_1208_SW_40th/Image_7.jpg'},
    {id: 13, image: '/projects/OKC_1208_SW_40th/Image_8.jpg'},
    {id: 14, image: '/projects/OKC_1208_SW_40th/Image_9.jpg'},
    {id: 15, image: '/projects/OKC_1208_SW_40th/Image_10.jpg'},
    {id: 16, image: '/projects/OKC_1208_SW_40th/Image_11.jpg'},
    {id: 17, image: '/projects/OKC_1208_SW_40th/Image_12.jpg'},
    {id: 18, image: '/projects/OKC_1208_SW_40th/Image_13.jpg'},
    {id: 19, image: '/projects/OKC_1208_SW_40th/Image_14.jpg'},
    {id: 20, image: '/projects/OKC_1208_SW_40th/Image_15.jpg'},
    {id: 21, image: '/projects/OKC_1613_NW_22nd/Image_1.jpg'},
    {id: 22, image: '/projects/OKC_1613_NW_22nd/Image_2.jpg'},
    {id: 23, image: '/projects/OKC_1613_NW_22nd/Image_3.jpg'},
    {id: 24, image: '/projects/OKC_1613_NW_22nd/Image_4.jpg'},
    {id: 25, image: '/projects/OKC_1613_NW_22nd/Image_5.jpg'},
    {id: 26, image: '/projects/OKC_1613_NW_22nd/Image_6.jpg'},
    {id: 27, image: '/projects/OKC_1613_NW_22nd/Image_7.jpg'},
    {id: 28, image: '/projects/OKC_1613_NW_22nd/Image_8.jpg'},
    {id: 29, image: '/projects/OKC_1613_NW_22nd/Image_9.jpg'},
    {id: 30, image: '/projects/OKC_1613_NW_22nd/Image_10.jpg'}
  ]

  // Function to handle previous image navigation
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  // Function to handle next image navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        {/* Section title */}
        <h2>Our Projects</h2>
        
        {/* Image slideshow container */}
        <div className="project-slideshow">
          {/* Current project image */}
          <div className="project-slide">
            <img 
              src={projects[currentIndex].image} 
              alt={`Project ${currentIndex + 1}`} 
            />
          </div>

          {/* Navigation buttons */}
          <button className="nav-button prev" onClick={handlePrevious}>
            &#10094;
          </button>
          <button className="nav-button next" onClick={handleNext}>
            &#10095;
          </button>

          {/* Slide counter */}
          <div className="slide-counter">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 