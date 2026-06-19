import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <ul className="footer__socials">
        {profile.socials.map((s) => (
          <li key={s.label}>
            <a href={s.href}>{s.value}</a>
          </li>
        ))}
      </ul>
      <a href="#topo" className="footer__top">
        ↑ topo
      </a>
    </footer>
  )
}
