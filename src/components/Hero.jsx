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
    const el = sectionRef.current

    const update = () => {
      const top = el.offsetTop
      const vh = window.innerHeight
      const range = Math.max(vh * 0.6, 1)
      const progress = Math.min(Math.max((window.scrollY - top) / range, 0), 1)

      LAYERS.forEach((layer, i) => {
        const node = layerRefs.current[i]
        if (node) {
          node.style.transform = `translate3d(0, ${-progress * 100 * layer.factor}px, 0) scale(${layer.scale})`
        }
      })

      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${progress * 40}px, 0)`
        contentRef.current.style.opacity = 1 - progress * 0.9
      }

      rafId = null
    }

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section id="topo" className="hero" ref={sectionRef}>
      <div className="hero__sticky">
        <div className="hero__layers" aria-hidden="true">
          {LAYERS.map((layer, i) => (
            <img
              key={i}
              ref={(node) => (layerRefs.current[i] = node)}
              src={layer.src}
              alt=""
              className="hero__layer"
              loading="lazy"
              style={{ opacity: layer.opacity }}
            />
          ))}
          <div className="hero__vignette" />
          <div className="hero__grain" />
        </div>

        <div className="hero__content" ref={contentRef}>
          <p className="hero__eyebrow">{profile.role} — portfólio</p>

          <h1 className="hero__title">
            <span className="hero__title-stack" aria-hidden="true">
              {profile.name}
            </span>
            <span className="hero__title-stack hero__title-stack--cyan" aria-hidden="true">
              {profile.name}
            </span>
            <span className="hero__title-main">{profile.name}</span>
          </h1>

          <p className="hero__tagline">{profile.tagline}</p>

          <ul className="hero__socials">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href}>
                  <span>{s.label}</span> {s.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a href="#sobre" className="hero__scroll">
          <span className="hero__scroll-ring">
            <span>Scroll</span>
          </span>
        </a>
      </div>
    </section>
  )
}