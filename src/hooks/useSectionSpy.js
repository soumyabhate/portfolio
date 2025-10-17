import { useEffect, useState } from 'react'

/**
 * useSectionSpy: returns the id of the section currently in view.
 * Tweaked for small sticky navbar offset and pastel anime site rhythm.
 */
export default function useSectionSpy(ids, rootMargin='-40% 0px -55% 0px'){
  const [active, setActive] = useState(ids?.[0] ?? null)

  useEffect(() => {
    const targets = ids
      .map(id => document.getElementById(id))
      .filter(Boolean)
    if (!('IntersectionObserver' in window) || targets.length === 0) return

    const io = new IntersectionObserver((entries) => {
      // Pick the entry with the highest intersection ratio
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target?.id) setActive(visible.target.id)
    }, { root: null, rootMargin, threshold: [0, .25, .5, .75, 1] })

    targets.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [ids, rootMargin])

  return active
}
