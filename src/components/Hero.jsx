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

    // Cache de medições
    let top = el.offsetTop
    let vh = window.innerHeight

    const handleResize = () => {
      top = el.offsetTop
      vh = window.innerHeight
    }

    const handleScroll = () => {
      targetY = window.scrollY
    }

    // Função de Interpolação Linear
    const lerp = (start, end, factor) => start + (end - start) * factor

    const animate = () => {
      if (!isVisible) return

      // --- MUDANÇA 1: Fator LERP menor (0.04) para mais fluidez ---
      currentY = lerp(currentY, targetY, 0.04)

      // --- MUDANÇA 2: Zona de escape no topo para opacidade instantânea ---
      // Se estiver muito perto do topo, zera para evitar o "lag" da perseguição
      if (targetY < 5 && currentY < 10) {
        currentY = 0;
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
        // Simplificamos o cálculo da opacidade para renderização mais rápida
        contentRef.current.style.opacity = 1 - progress * 0.9
      }

      rafId = requestAnimationFrame(animate)
    }

    // IntersectionObserver para performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible) {
          // Reinicia valores para evitar pulos ao reaparecer
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
              loading="eager" // Nuvens do topo devem carregar rápido
              style={{ opacity: layer.opacity }}
            />
          ))}
          <div className="hero__vignette" />
          <div className="hero__grain" />
        </div>

        <div className="hero__content" ref={contentRef}>
          <p className="hero__eyebrow">{profile.role} — portfólio</p>
          <h1 className="hero__title">{profile.name}</h1>
          <p className="hero__tagline">{profile.tagline}</p>
        </div>

        <a href="#sobre" className="hero__scroll">
          <span className="hero__scroll-ring"><span>Scroll</span></span>
        </a>
      </div>
    </section>
  )
}