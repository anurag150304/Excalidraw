import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware"

export default withAuth(
    function middleware() { return NextResponse.next() },
    {
        callbacks: { authorized: ({ token }) => !!token }
    });

export const config = {
    matcher: ["/drawing", "/api/signout", "/api/canvas",]
}