import { timeline } from '../data/content'
import Section from './Section'

export default function Resume() {
  return (
    <Section
      id="percurso"
      className="resume"
      eyebrow="percurso"
      title={['Formação', '& experiência.']}
    >
      <ol className="timeline">
        {timeline.map((item) => (
          <li key={item.title} className="timeline__item">
            <span className="timeline__year">{item.year}</span>
            <span className={`timeline__kind timeline__kind--${item.kind}`}>
              {item.kind === 'work' ? 'trabalho' : 'formação'}
            </span>
            <h3 className="timeline__title">{item.title}</h3>
            <p className="timeline__place">{item.place}</p>
            <p className="timeline__desc">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
