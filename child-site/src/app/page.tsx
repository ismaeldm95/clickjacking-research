'use client'

import { useEffect, useRef, useState } from 'react'
import { checkElementVisibility, checkOverlayAttempt } from '@/utils/visibilityCheck'

export default function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isSecure, setIsSecure] = useState(true)

  useEffect(() => {
    if (!buttonRef.current) return

    const checkSecurity = () => {
      const button = buttonRef.current
      if (!button) return

      const isVisible = checkElementVisibility(button)
      const isOverlayed = checkOverlayAttempt(button)
      
      console.log('isVisible', isVisible)
      console.log('isOverlayed', isOverlayed)

      setIsSecure(isVisible && !isOverlayed)
    }

    // Check initially and on various events
    checkSecurity()
    
    const events = ['scroll', 'resize', 'mousemove']
    events.forEach(event => {
      window.addEventListener(event, checkSecurity)
    })

    // Set up mutation observer to detect DOM changes
    const observer = new MutationObserver(checkSecurity)
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true
    })

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, checkSecurity)
      })
      observer.disconnect()
    }
  }, [])

  const handleClick = () => {
    if (!isSecure) {
      alert('Warning: Button may be compromised by clickjacking attempt!')
      return
    }
    alert('Secure button clicked!')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button 
        ref={buttonRef}
        className={`font-bold py-2 px-4 rounded ${
          isSecure 
            ? 'bg-blue-500 hover:bg-blue-700 text-white'
            : 'bg-red-500 hover:bg-red-700 text-white'
        }`}
        onClick={handleClick}
      >
        {isSecure ? 'Secure Button' : 'Warning: Possible Clickjacking Attempt'}
      </button>
    </main>
  )
}
