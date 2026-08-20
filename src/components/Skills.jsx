import { skills } from '../data/content'
import Section from './Section'

export default function Skills() {
  const categories = skills?.categories || []
  const languages = skills?.languages || []

  return (
    <Section
      id="skills"
      className="skills"
      eyebrow={skills?.eyebrow || 'skills'}
      title={skills?.heading || ['Ferramentas', 'de trabalho.']}
    >
      <div className="skills__grid">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`skills__col ${cat.isWide ? 'skills__col--wide' : ''}`}
          >
            <h3>{cat.title}</h3>
            <ul className="chip-list">
              {cat.items?.map((item) => (
                <li key={item} className={cat.chipStyle}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="skills__col">
          <h3>Idiomas</h3>
          <ul className="lang-list">
            {languages.map((l) => (
              <li key={l.label}>
                <span>{l.label}</span>
                <small>{l.level}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}