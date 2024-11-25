'use client'

import { useState, MouseEvent, useEffect } from 'react'

export default function Home() {
  const [position, setPosition] = useState({ x: 150, y: 200 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(1)
  const [blur, setBlur] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!isDragging) return

      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  return (
    <main className="relative min-h-screen">
      <div className="fixed top-4 left-4 z-20 bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Iframe Opacity: {opacity}
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={opacity}
            onChange={(e) => setOpacity(parseFloat(e.target.value))}
            className="w-48 mt-1"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Button Blur: {blur}px
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="0.5"
            value={blur}
            onChange={(e) => setBlur(parseFloat(e.target.value))}
            className="w-48 mt-1"
          />
        </div>
      </div>

      <div 
        className="absolute flex items-center gap-2 bg-black border-2 border-red-500 
                   rounded z-10 pointer-events-none overflow-hidden"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          filter: `blur(${blur}px)`
        }}
      >
        <div 
          className="px-2 py-4 hover:bg-gray-800 cursor-move text-white pointer-events-auto"
          onMouseDown={handleMouseDown}
        >
          ⋮
        </div>
        <button 
          className="px-4 py-2 text-white hover:bg-gray-800 pointer-events-none"
        >
          Malicious Overlay Button
        </button>
      </div>

      <iframe
        src="http://localhost:3001"
        style={{ 
          width: '100%',
          height: '100vh',
          opacity: opacity
        }}
      />
    </main>
  )
}
