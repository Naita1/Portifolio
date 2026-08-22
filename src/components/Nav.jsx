import { useMemo } from 'react'
import { useScrollY } from '../hooks/useScrollY'
import { profile } from '../data/content'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#percurso', label: 'Percurso' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  const scrollY = useScrollY()
  const solid = useMemo(() => scrollY > 80, [scrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        solid
          ? 'bg-void/85 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <a
        className="flex items-center gap-2.5 font-display font-bold text-lg text-ink-cream hover:opacity-80 transition-opacity"
        href="#topo"
      >
        <span
          className="w-2.5 h-2.5 rounded-full bg-accent-magenta shadow-[0_0_8px_#e0507e]"
          aria-hidden="true"
        />
        {profile.name}
      </a>

      <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider uppercase text-ink-soft">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-ink-cream transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="px-5 py-2 rounded-full border border-white/15 font-mono text-xs tracking-wider text-ink-cream hover:border-accent-amber hover:text-accent-amber transition-all duration-300"
        href="#contato"
      >
        Fale comigo
      </a>
    </header>
  )
}