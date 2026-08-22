import { useEffect, useRef } from 'react'
import { profile } from '../data/content'

import sky from '../assets/clouds/01-sky.png'
import cloudFar from '../assets/clouds/02-cloud-far.png'
import cloudMid from '../assets/clouds/03-cloud-mid.png'
import cloudNear from '../assets/clouds/04-cloud-near.png'

const LAYERS = [
  { src: sky, factor: 0.04, scale: 1.08, opacity: 1 },
  { src: cloudFar, factor: 0.1, scale: 1.12, opacity: 0.9 },
  { src: cloudMid, factor: 0.2, scale: 1.16, opacity: 0.95 },
  { src: cloudNear, factor: 0.34, scale: 1.22, opacity: 1 },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const layerRefs = useRef([])

  useEffect(() => {
    let rafId = null
    let isVisible = true
    let targetY = window.scrollY
    let currentY = window.scrollY

    const el = sectionRef.current
    if (!el) return

    let top = el.offsetTop
    let vh = window.innerHeight

    const handleResize = () => {
      top = el.offsetTop
      vh = window.innerHeight
    }

    const handleScroll = () => {
      targetY = window.scrollY
    }

    const lerp = (start, end, factor) => start + (end - start) * factor

    const animate = () => {
      if (!isVisible) return

      if (targetY <= 2) {
        currentY = 0
      } else {
        currentY = lerp(currentY, targetY, 0.12)
      }

      const range = Math.max(vh * 0.6, 1)
      const progress = Math.min(Math.max((currentY - top) / range, 0), 1)

      LAYERS.forEach((layer, i) => {
        const node = layerRefs.current[i]
        if (node) {
          node.style.transform = `translate3d(0, ${-progress * 100 * layer.factor}px, 0) scale(${layer.scale})`
        }
      })

      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${progress * 30}px, 0)`
        contentRef.current.style.opacity = Math.max(0, 1 - progress * 1.2)
      }

      rafId = requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible) {
          currentY = window.scrollY
          targetY = window.scrollY
          rafId = requestAnimationFrame(animate)
        } else if (rafId) {
          cancelAnimationFrame(rafId)
        }
      },
      { threshold: 0 }
    )

    observer.observe(el)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section id="topo" className="relative h-[160vh] bg-void" ref={sectionRef}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {LAYERS.map((layer, i) => (
            <img
              key={i}
              ref={(node) => (layerRefs.current[i] = node)}
              src={layer.src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-bottom transform-gpu will-change-transform"
              loading="eager"
              style={{ opacity: layer.opacity }}
            />
          ))}

          <div
            className="absolute inset-0 z-[6]"
            style={{
              background: `radial-gradient(120% 70% at 50% 100%, rgba(10, 7, 32, 0) 0%, rgba(10, 7, 32, 0.85) 100%), linear-gradient(180deg, rgba(10, 7, 32, 0.55) 0%, rgba(10, 7, 32, 0.05) 30%, rgba(10, 7, 32, 0.1) 65%, rgba(10, 7, 32, 0.9) 100%)`,
            }}
          />

          <div
            className="absolute inset-0 z-[7] opacity-5 mix-blend-overlay"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 2px)`,
            }}
          />
        </div>

        <div
          className="relative z-[8] text-center px-6 max-w-[920px] transform-gpu will-change-transform"
          ref={contentRef}
        >
          <p className="font-mono text-[0.85rem] tracking-[0.18em] uppercase text-ink-soft mb-5">
            {profile.role} — portfólio
          </p>

          <h1 className="relative font-display font-extrabold text-[clamp(2.6rem,9vw,6.6rem)] leading-[0.96] -tracking-[0.02em] uppercase mb-[1.4rem]">
            <span
              className="absolute inset-0 block text-transparent opacity-55 translate-x-[7px] translate-y-[5px] [-webkit-text-stroke:1px_#e0507e]"
              aria-hidden="true"
            >
              {profile.name}
            </span>
            <span
              className="absolute inset-0 block text-transparent opacity-45 -translate-x-[7px] -translate-y-[4px] [-webkit-text-stroke:1px_#3fe8d0]"
              aria-hidden="true"
            >
              {profile.name}
            </span>
            <span className="relative block text-ink-cream">{profile.name}</span>
          </h1>

          <p className="text-[clamp(1rem,2vw,1.25rem)] text-ink-soft max-w-[560px] mx-auto mb-8">
            {profile.tagline}
          </p>

          <ul className="flex justify-center gap-[1.6rem] font-mono text-[0.85rem] text-ink-soft flex-wrap">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="flex gap-[0.4rem] hover:text-ink-cream transition-colors duration-300">
                  <span className="text-accent-amber">{s.label}</span> {s.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#sobre"
          className="absolute bottom-[clamp(1.5rem,4vh,3rem)] left-1/2 -translate-x-1/2 z-[8] group"
        >
          <span className="flex items-center justify-center w-[84px] h-[84px] rounded-full bg-[#0a0720]/40 border border-white/10 backdrop-blur-[6px] font-mono text-[0.75rem] tracking-[0.08em] text-ink-cream animate-bob group-hover:border-accent-amber group-hover:scale-105 transition-all duration-300">
            <span>Scroll</span>
          </span>
        </a>
      </div>
    </section>
  )
}