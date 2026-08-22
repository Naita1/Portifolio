import { about } from '../data/content'
import Section from './Section'

export default function About() {
  return (
    <Section
      id="sobre"
      className="[content-visibility:auto] [contain-intrinsic-size:auto_600px]"
      eyebrow={about.eyebrow}
      title={about.heading}
    >
      <div className="grid grid-cols-1 min-[761px]:grid-cols-[1.4fr_1fr] gap-[clamp(2rem,5vw,4rem)] items-start">
        <div>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-ink-soft text-[1.05rem] leading-[1.7] mb-[1.2rem] last:mb-0">
              {p}
            </p>
          ))}
        </div>

        <dl className="flex flex-col gap-[1.1rem] border-l-2 border-accent-magenta pl-[1.4rem]">
          {about.facts.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-ink-faint mb-[0.25rem]">
                {f.label}
              </dt>
              <dd className="font-display text-[1.05rem] text-ink-cream">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}