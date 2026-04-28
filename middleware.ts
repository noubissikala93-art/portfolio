import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /en/... to /de/...
  if (pathname.startsWith('/en')) {
    return NextResponse.redirect(
      new URL(pathname.replace(/^\/en/, '/de') || '/de', request.url)
    )
  }

  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Redirect root and unknown paths to /de
  if (!pathname.startsWith('/de')) {
    return NextResponse.redirect(new URL(`/de${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
