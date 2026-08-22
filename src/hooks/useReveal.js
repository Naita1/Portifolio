import { useEffect, useState, useRef } from 'react'

export function useReveal(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState('down') 
  const ref = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    lastScrollY.current = window.scrollY

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY
        
        if (entry.isIntersecting) {
          setDirection(currentScrollY >= lastScrollY.current ? 'down' : 'up')
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }

        lastScrollY.current = currentScrollY
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [threshold])

  return [ref, isVisible, direction]
}