// src/hooks/useActiveSection.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useActiveSection = sectionIds => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Only run this logic on the home page
    if (pathname !== '/') {
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Corrected line: Use window.history to be explicit
            window.history.replaceState(null, '', `#${entry.target.id}`)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0,
      },
    )

    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [pathname, sectionIds])
}

export default useActiveSection
