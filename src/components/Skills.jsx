import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/content'

export default function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">skills</p>
        <h2 className="section-title">
          <span className="section-title__line">Ferramentas</span>
          <span className="section-title__line">de trabalho.</span>
        </h2>

        <div className="skills__grid">
          <div className="skills__col">
            <h3>Software</h3>
            <ul className="chip-list">
              {skills.software.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills__col">
            <h3>Código</h3>
            <ul className="chip-list">
              {skills.code.map((s) => (
                <li key={s} className="chip chip--cyan">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills__col skills__col--wide">
            <h3>Áreas</h3>
            <ul className="chip-list">
              {skills.tags.map((s) => (
                <li key={s} className="chip chip--ghost">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills__col">
            <h3>Idiomas</h3>
            <ul className="lang-list">
              {skills.languages.map((l) => (
                <li key={l.label}>
                  <span>{l.label}</span>
                  <small>{l.level}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
