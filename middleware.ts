import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    // Allow login page always
    if (req.nextUrl.pathname === '/admin/login') {
      return NextResponse.next()
    }
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Login page is always accessible
        if (req.nextUrl.pathname === '/admin/login') return true
        // All other /admin routes require auth token
        if (req.nextUrl.pathname.startsWith('/admin')) return !!token
        return true
      },
    },
    pages: {
      signIn: '/admin/login',
    },
  }
)

export const config = {
  matcher: ['/admin/:path*'],
}
