import { useReveal } from '../hooks/useReveal'

export default function Section({
  id,
  children,
  eyebrow,
  title,
  theme = 'dark',
  className = '',
}) {
  const [ref, visible] = useReveal()

  return (
    <section id={id} className={`section ${className}`} ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className={`eyebrow ${theme === 'light' ? 'eyebrow--light' : ''}`}>{eyebrow}</p>
        <h2 className={`section-title ${theme === 'light' ? 'section-title--light' : ''}`}>
          {title.map((line, i) => (
            <span key={i} className="section-title__line">{line}</span>
          ))}
        </h2>
        {children}
      </div>
    </section>
  )
}