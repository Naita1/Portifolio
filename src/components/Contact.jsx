import { useReveal } from '../hooks/useReveal'
import { contact, profile } from '../data/content'
import cloudFront from '../assets/clouds/05-cloud-front.png'

export default function Contact() {
  const [ref, visible] = useReveal()

  return (
    <section id="contato" className="section contact" ref={ref}>
      <img src={cloudFront} alt="" className="contact__horizon" aria-hidden="true" loading="lazy" />
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow eyebrow--light">{contact.eyebrow}</p>
        <h2 className="section-title section-title--light">
          {contact.heading.map((line, i) => (
            <span key={i} className="section-title__line">
              {line}
            </span>
          ))}
        </h2>

        <a className="contact__cta" href={`mailto:${profile.email}`}>
          {contact.cta}
          <span aria-hidden="true">→</span>
        </a>

        <p className="contact__email">{profile.email}</p>
      </div>
    </section>
  )
}
