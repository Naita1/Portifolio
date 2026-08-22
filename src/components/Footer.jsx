import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative max-w-[1180px] mx-auto px-6 py-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-ink-faint">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>

      <ul className="flex flex-wrap items-center justify-center gap-6">
        {profile.socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              className="hover:text-ink-cream transition-colors duration-200"
            >
              {s.value}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#topo"
        className="hover:text-accent-amber transition-colors duration-200 flex items-center gap-1"
      >
        ↑ topo
      </a>
    </footer>
  )
}