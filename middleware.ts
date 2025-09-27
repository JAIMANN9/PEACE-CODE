import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // No authentication middleware needed - all pages are publicly accessible
  return
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
