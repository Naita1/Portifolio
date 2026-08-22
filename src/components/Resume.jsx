import { timeline } from '../data/content'
import Section from './Section'

export default function Resume() {
  return (
    <Section
      id="percurso"
      className="[content-visibility:auto] [contain-intrinsic-size:auto_800px]"
      eyebrow="percurso"
      title={['Formação', '& experiência.']}
    >
      <ol className="relative border-l-2 border-white/10 ml-2 md:ml-4 pl-6 md:pl-10 flex flex-col gap-10 my-8">
        {timeline.map((item) => (
          <li key={item.title} className="relative group">
            <span
              className="absolute -left-[calc(1.5rem+5px)] md:-left-[calc(2.5rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-magenta shadow-[0_0_8px_#e0507e] transition-transform duration-300 group-hover:scale-125"
              aria-hidden="true"
            />

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-accent-amber tracking-wider">
                {item.year}
              </span>

              <span
                className={`font-mono text-[0.7rem] px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
                  item.kind === 'work'
                    ? 'border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan'
                    : 'border-accent-magenta/40 bg-accent-magenta/10 text-accent-magenta'
                }`}
              >
                {item.kind === 'work' ? 'trabalho' : 'formação'}
              </span>
            </div>

            <h3 className="font-display font-bold text-xl text-ink-cream mb-1">
              {item.title}
            </h3>

            <p className="font-mono text-xs text-ink-faint mb-3">
              {item.place}
            </p>

            <p className="text-ink-soft text-sm leading-relaxed max-w-2xl">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}