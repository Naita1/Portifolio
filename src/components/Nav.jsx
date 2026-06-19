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
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <a className="nav__brand" href="#topo">
        <span className="nav__dot" aria-hidden="true" />
        {profile.name}
      </a>
      <nav className="nav__links">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav__cta" href="#contato">
        Fale comigo
      </a>
    </header>
  )
}
