import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Add security headers but not include frame blocking
  // response.headers.set('X-Frame-Options', 'DENY') // Older browsers
  // response.headers.set('Content-Security-Policy', "frame-ancestors 'none'") // Modern browsers
  
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'no-referrer')

  return response
} 