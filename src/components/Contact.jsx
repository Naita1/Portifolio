import { contact, profile } from '../data/content'
import cloudFront from '../assets/clouds/05-cloud-front.png'
import Section from './Section'

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <img src={cloudFront} alt="" className="contact__horizon" aria-hidden="true" loading="lazy" />
      <Section
        id="contato"
        className="contact"
        eyebrow={contact.eyebrow}
        title={contact.heading}
        theme="light"
      >
        <a className="contact__cta" href={`mailto:${profile.email}`}>
          {contact.cta}
          <span aria-hidden="true">→</span>
        </a>
        <p className="contact__email">{profile.email}</p>
      </Section>
    </div>
  )
}
