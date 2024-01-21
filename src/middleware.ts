import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
export function middleware(request: NextRequest) {
  console.log("middlewarepathname", request.nextUrl.pathname);

  const token = request.cookies.get("token");

  // if (request.nextUrl.pathname.startsWith("/")) {
  if (token) {
    return NextResponse.rewrite(new URL("/fl", request.url));
  }
  // }

  //   if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //     return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  //   }
}
