import { useReveal } from '../hooks/useReveal'
import { timeline } from '../data/content'

export default function Resume() {
  const [ref, visible] = useReveal()

  return (
    <section id="percurso" className="section resume" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">percurso</p>
        <h2 className="section-title">
          <span className="section-title__line">Formação</span>
          <span className="section-title__line">&amp; experiência.</span>
        </h2>

        <ol className="timeline">
          {timeline.map((item, i) => (
            <li key={i} className="timeline__item">
              <span className="timeline__year">{item.year}</span>
              <span
                className={`timeline__kind timeline__kind--${item.kind}`}
              >
                {item.kind === 'work' ? 'trabalho' : 'formação'}
              </span>
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__place">{item.place}</p>
              <p className="timeline__desc">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
