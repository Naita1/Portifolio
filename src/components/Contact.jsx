import { contact, profile } from '../data/content'
import cloudFront from '../assets/clouds/05-cloud-front.png'
import Section from './Section'

export default function Contact() {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={cloudFront}
        alt=""
        className="absolute inset-x-0 bottom-0 w-full h-[65%] object-cover object-bottom opacity-35 pointer-events-none select-none mix-blend-screen"
        aria-hidden="true"
        loading="lazy"
      />

      <Section
        id="contato"
        className="relative text-center pt-[clamp(6rem,12vw,10rem)] pb-[clamp(10rem,18vw,14rem)] [&>div>p]:text-accent-cyan [&>div>p]:tracking-[0.2em] [&>div>h2]:items-center [&>div>h2]:text-white"
        eyebrow={contact.eyebrow}
        title={contact.heading}
      >
        <div className="flex flex-col items-center justify-center gap-5 mt-2 relative z-10">
          <a
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-display font-bold text-base text-ink-dark bg-gradient-to-r from-accent-amber via-accent-magenta to-accent-magenta shadow-[0_0_28px_rgba(224,80,126,0.55)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_38px_rgba(224,80,126,0.75)]"
            href={`mailto:${profile.email}`}
          >
            {contact.cta}
            <span aria-hidden="true">→</span>
          </a>

          <p className="font-mono text-sm text-slate-300 tracking-wider opacity-90">
            {profile.email}
          </p>
        </div>
      </Section>
    </div>
  )
}