import { useState } from 'react'
import './Projects.css'

// Projects component - Displays a slideshow of project images
const Projects = () => {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0)

  // Array of project images with their paths
  const projects = [
    {
      id: 1,
      image: '/projects/3212_Venice_(Fireplace_Restoration)/UTF-8IMG_5641.JPG'
    },
    {
      id: 2,
      image: '/projects/3212_Venice_(Fireplace_Restoration)/UTF-8IMG_5642.JPG'
    },
    {
      id: 3,
      image: '/projects/Guthrie_(New_Construction)/Image_1.jpg'
    },
    {
      id: 4,
      image: '/projects/Guthrie_(New_Construction)/Image_2.jpg'
    },
    {
      id: 5,
      image: '/projects/Guthrie_(New_Construction)/Image_3.jpg'
    },
    {
      id: 6,
      image: '/projects/Guthrie_(New_Construction)/Image_4.jpg'
    },
    {
      id: 7,
      image: '/projects/Guthrie_(New_Construction)/Image_5.jpg'
    },
    {
      id: 8,
      image: '/projects/Guthrie_(New_Construction)/Image_6.jpg'
    },
    {
      id: 9,
      image: '/projects/Guthrie_(New_Construction)/Image_7.jpg'
    },
    {
      id: 10,
      image: '/projects/Guthrie_(New_Construction)/Image_8.jpg'
    },
    {
      id: 11,
      image: '/projects/OKC_1208_SW_40th/Image_6.jpg'
    },
    {
      id: 12,
      image: '/projects/OKC_1208_SW_40th/Image_7.jpg'
    },
    {
      id: 13,
      image: '/projects/OKC_1208_SW_40th/Image_8.jpg'
    },
    {
      id: 14,
      image: '/projects/OKC_1208_SW_40th/Image_9.jpg'
    },
    {
      id: 15,
      image: '/projects/OKC_1208_SW_40th/Image_10.jpg'
    },
    {
      id: 16,
      image: '/projects/OKC_1208_SW_40th/Image_11.jpg'
    },
    {
      id: 17,
      image: '/projects/OKC_1208_SW_40th/Image_12.jpg'
    },
    {
      id: 18,
      image: '/projects/OKC_1208_SW_40th/Image_13.jpg'
    },
    {
      id: 19,
      image: '/projects/OKC_1208_SW_40th/Image_14.jpg'
    },
    {
      id: 20,
      image: '/projects/OKC_1208_SW_40th/Image_15.jpg'
    },
    {
      id: 21,
      image: '/projects/OKC_1613_NW_22nd/Image_1.jpg'
    },
    {
      id: 22,
      image: '/projects/OKC_1613_NW_22nd/Image_2.jpg'
    },
    {
      id: 23,
      image: '/projects/OKC_1613_NW_22nd/Image_3.jpg'
    },
    {
      id: 24,
      image: '/projects/OKC_1613_NW_22nd/Image_4.jpg'
    },
    {
      id: 25,
      image: '/projects/OKC_1613_NW_22nd/Image_5.jpg'
    },
    {
      id: 26,
      image: '/projects/OKC_1613_NW_22nd/Image_6.jpg'
    },
    {
      id: 27,
      image: '/projects/OKC_1613_NW_22nd/Image_7.jpg'
    },
    {
      id: 28,
      image: '/projects/OKC_1613_NW_22nd/Image_8.jpg'
    },
    {
      id: 29,
      image: '/projects/OKC_1613_NW_22nd/Image_9.jpg'
    },
    {
      id: 30,
      image: '/projects/OKC_1613_NW_22nd/Image_10.jpg'
    }
  ]

  // Handler for previous button - cycles to the last image if at the beginning
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  // Handler for next button - cycles to the first image if at the end
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Get the current project based on the index
  const currentProject = projects[currentIndex]

  return (
    // Main projects section container
    <div className="projects">
      <div className="projects-content">
        {/* Section header */}
        <h2>Our Projects</h2>
        <p className="subtitle">Discover our portfolio of successful construction projects</p>

        {/* Slideshow container */}
        <div className="project-slideshow">
          {/* Current slide */}
          <div className="project-slide">
            <img src={currentProject.image} alt="Project" />
          </div>
          
          {/* Navigation buttons */}
          <button className="nav-button prev" onClick={handlePrevious}>
            ‹
          </button>
          <button className="nav-button next" onClick={handleNext}>
            ›
          </button>

          {/* Slide counter */}
          <div className="slide-counter">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects 