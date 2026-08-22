import { projects } from '../data/content'
import Section from './Section'

export default function Projects() {
  return (
    <Section
      id="projetos"
      className="[content-visibility:auto] [contain-intrinsic-size:auto_800px]"
      eyebrow="projetos"
      title={['Trabalhos', 'desenvolvidos.']}
    >
      <div className="grid grid-cols-1 min-[721px]:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col p-8 rounded-[16px] border border-white/10 bg-white/[0.04] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer text-inherit hover:border-accent-cyan hover:bg-[rgba(63,232,208,0.08)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(63,232,208,0.15)]"
          >
            <div className="flex flex-col h-full">
              <h3 className="font-display text-[1.5rem] font-bold mb-[0.8rem] text-ink-cream">
                {project.title}
              </h3>

              <p className="text-ink-soft leading-[1.6] mb-[1.2rem] flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-[0.6rem] mb-6">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.75rem] px-[0.7rem] py-[0.3rem] rounded-full border border-accent-cyan text-accent-cyan bg-[rgba(63,232,208,0.1)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.9rem] text-accent-cyan px-4 py-[0.6rem] border border-accent-cyan rounded-[6px] transition-all duration-300 inline-flex items-center gap-[0.4rem] hover:bg-accent-cyan hover:text-ink-dark"
                  >
                    Visitar →
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.9rem] text-accent-magenta border-accent-magenta px-4 py-[0.6rem] border rounded-[6px] transition-all duration-300 inline-flex items-center gap-[0.4rem] hover:bg-accent-magenta hover:text-ink-dark"
                  >
                    GitHub
                  </a>
                )}

                {project.githubFront && (
                  <a
                    href={project.githubFront}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.9rem] text-accent-magenta border-accent-magenta px-4 py-[0.6rem] border rounded-[6px] transition-all duration-300 inline-flex items-center gap-[0.4rem] hover:bg-accent-magenta hover:text-ink-dark"
                  >
                    GitHub (Front)
                  </a>
                )}

                {project.githubBack && (
                  <a
                    href={project.githubBack}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.9rem] text-accent-magenta border-accent-magenta px-4 py-[0.6rem] border rounded-[6px] transition-all duration-300 inline-flex items-center gap-[0.4rem] hover:bg-accent-magenta hover:text-ink-dark"
                  >
                    GitHub (Back)
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}