import { useReveal } from '../hooks/useReveal'

export default function Section({
  id,
  children,
  eyebrow,
  title,
  theme = 'dark',
  className = '',
}) {
  const [ref, visible, direction] = useReveal()
  const titleLines = Array.isArray(title) ? title : title ? [title] : []

  const initialTranslate = direction === 'down' ? 'translate-y-8' : '-translate-y-8'

  return (
    <section
      id={id}
      ref={ref}
      className={`relative max-w-[1180px] mx-auto px-6 py-[clamp(4.5rem,9vw,8rem)] [contain:layout_style_paint] ${className}`}
    >
      {eyebrow && (
        <p
          className={`font-mono text-[0.8rem] tracking-[0.16em] uppercase mb-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-[transform,opacity] ${
            visible
              ? 'opacity-100 translate-y-0'
              : `opacity-0 ${initialTranslate}`
          } ${
            theme === 'light' ? 'text-ink-dark/80' : 'text-accent-amber'
          }`}
        >
          {eyebrow}
        </p>
      )}
      {titleLines.length > 0 && (
        <h2
          className={`flex flex-col font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] -tracking-[0.01em] mb-12 transition-all duration-700 delay-[75ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-[transform,opacity] ${
            visible
              ? 'opacity-100 translate-y-0'
              : `opacity-0 ${initialTranslate}`
          } ${
            theme === 'light' ? 'text-ink-dark' : 'text-ink-cream'
          }`}
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
      )}
      <div
        className={`transition-all duration-1000 delay-[150ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-[transform,opacity] ${
          visible
            ? 'opacity-100 translate-y-0'
            : `opacity-0 ${initialTranslate}`
        }`}
      >
        {children}
      </div>
    </section>
  )
}