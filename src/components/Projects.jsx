import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/content'

export default function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="projetos" className="section projects" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">projetos</p>
        <h2 className="section-title">
          <span className="section-title__line">Trabalhos</span>
          <span className="section-title__line">desenvolvidos.</span>
        </h2>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    Visitar →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link project-card__link--github"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
