import { projects } from '../data/content'
import Section from './Section'

export default function Projects() {
  return (
    <Section
      id="projetos"
      className="projects"
      eyebrow="projetos"
      title={['Trabalhos', 'desenvolvidos.']}
    >
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card__link">
                  Visitar →
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link project-card__link--github">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
