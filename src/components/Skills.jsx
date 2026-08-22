import { skills } from '../data/content'
import Section from './Section'

// Cores sólidas, vivas e de alto contraste (sem sombras nem transparências mortas)
const STYLES = {
  magenta:
    'bg-[#982862] border-[#e0507e]/60 text-white hover:bg-[#b02e72] hover:border-[#e0507e]',
  cyan:
    'bg-[#137885] border-[#3fe8d0]/60 text-white hover:bg-[#178e9d] hover:border-[#3fe8d0]',
  neutral:
    'bg-[#221e42] border-[#3e3870] text-slate-100 hover:bg-[#2c2754] hover:border-[#524b91]',
}

function getChipStyle(cat) {
  if (cat.chipStyle && STYLES[cat.chipStyle]) return STYLES[cat.chipStyle]

  const title = cat.title?.toLowerCase() || ''
  if (title.includes('linguagens') || title.includes('automação') || title.includes('devops')) {
    return STYLES.magenta
  }
  if (title.includes('front') || title.includes('back') || title.includes('dados')) {
    return STYLES.cyan
  }
  return STYLES.neutral
}

export default function Skills() {
  const categories = skills?.categories || []
  const languages = skills?.languages || []

  return (
    <Section
      id="skills"
      className="[content-visibility:auto] [contain-intrinsic-size:auto_700px]"
      eyebrow={skills?.eyebrow || 'skills'}
      title={skills?.heading || ['Ferramentas', 'de trabalho.']}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-12">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`flex flex-col gap-4 ${
              cat.isWide ? 'lg:col-span-3 sm:col-span-2' : ''
            }`}
          >
            <h3 className="font-mono text-xs font-bold tracking-[0.16em] uppercase text-ink-soft/80">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {cat.items?.map((item) => (
                <span
                  key={item}
                  className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 transform-gpu hover:-translate-y-0.5 cursor-default font-medium ${getChipStyle(
                    cat
                  )}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs font-bold tracking-[0.16em] uppercase text-ink-soft/80">
            Idiomas
          </h3>

          <div className="flex flex-col divide-y divide-white/10">
            {languages.map((l) => (
              <div
                key={l.label}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <span className="font-display font-bold text-sm text-ink-cream">
                  {l.label}
                </span>
                <span className="font-mono text-xs text-ink-faint">
                  {l.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}