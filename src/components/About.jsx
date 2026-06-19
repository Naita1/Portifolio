import { useReveal } from '../hooks/useReveal'
import { about } from '../data/content'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="sobre" className="section about" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">{about.eyebrow}</p>
        <h2 className="section-title">
          {about.heading.map((line, i) => (
            <span key={i} className="section-title__line">
              {line}
            </span>
          ))}
        </h2>

        <div className="about__grid">
          <div className="about__copy">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="about__facts">
            {about.facts.map((f) => (
              <div key={f.label} className="about__fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
