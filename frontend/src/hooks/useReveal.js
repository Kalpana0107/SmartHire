import { useEffect, useRef } from 'react'

/**
 * useReveal – attaches IntersectionObserver to any container ref.
 * All children with className="reveal" inside will animate in on scroll.
 */
const useReveal = (threshold = 0.12) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('.reveal')
    if (!els?.length) return

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [threshold])

  return containerRef
}

export default useReveal
