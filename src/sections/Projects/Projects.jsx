import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'A state-of-the-art office complex with sustainable features'
    },
    {
      id: 2,
      title: 'Luxury Residential Tower',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'High-end residential tower with premium amenities'
    },
    {
      id: 3,
      title: 'Shopping Mall Renovation',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Complete renovation of a major shopping center'
    },
    {
      id: 4,
      title: 'Family Home Development',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Modern family homes with sustainable features'
    },
    {
      id: 5,
      title: 'Industrial Warehouse',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Large-scale industrial warehouse facility'
    },
    {
      id: 6,
      title: 'Mixed-Use Development',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Integrated commercial and residential space'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'industrial', label: 'Industrial' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="projects">
      <div className="projects-content">
        <h2>Our Projects</h2>
        <p className="subtitle">Discover our portfolio of successful construction projects</p>

        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects 