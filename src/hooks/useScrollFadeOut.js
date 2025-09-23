import { useState, useEffect, useCallback } from 'react'

/**
 * A custom hook for a scroll-based fade-out effect that disables itself on mobile.
 * @param {object} ref - A React ref object attached to the element to observe.
 * @param {number} thresholdFactor - A factor (e.g., 0.5) to determine the fade distance as a percentage of the element's height.
 * @param {number} mobileBreakpoint - Width below which the fade effect is disabled (default 768px).
 * @returns {number} The calculated opacity value (0 to 1).
 */
const useScrollFadeOut = (
  ref,
  thresholdFactor = 0.5,
  mobileBreakpoint = 768,
) => {
  const [contentOpacity, setContentOpacity] = useState(1)

  const handleScroll = useCallback(() => {
    // Disable fade on mobile
    if (window.innerWidth < mobileBreakpoint) {
      setContentOpacity(1)
      return
    }

    const element = ref.current
    if (!element) return

    const elementRect = element.getBoundingClientRect()
    const elementTop = elementRect.top

    const dynamicFadeThreshold = elementRect.height * thresholdFactor

    let newOpacity = 1
    if (elementTop <= 0) {
      const scrolledPastAmount = -elementTop
      newOpacity = 1 - scrolledPastAmount / dynamicFadeThreshold
    }

    newOpacity = Math.max(0.2, Math.min(1, newOpacity))
    setContentOpacity(newOpacity)
  }, [ref, thresholdFactor, mobileBreakpoint])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll) // recalc on resize
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])

  return contentOpacity
}

export default useScrollFadeOut
