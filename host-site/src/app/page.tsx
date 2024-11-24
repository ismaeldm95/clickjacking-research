'use client'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Fake overlay button to demonstrate clickjacking attempt */}
      <button 
        className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
                   bg-transparent border-2 border-red-500 text-transparent font-bold py-2 px-4 rounded
                   hover:bg-red-100 z-10 text-black"
      >
        Malicious Overlay Button
      </button>

      {/* Iframe containing the protected site */}
      <iframe
        src="http://localhost:3001" // Child site URL
        className="w-full h-screen opacity-50"
      />
    </main>
  )
}
