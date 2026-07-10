import { about } from '../data/content'
import Section from './Section'

export default function About() {
  return (
    <Section id="sobre" className="about" eyebrow={about.eyebrow} title={about.heading}>
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
    </Section>
  )
}
