// Without a defined matcher, this one line applies next-auth 
// to the entire project
import { NextRequestWithAuth, withAuth } from "next-auth/middleware"

export default withAuth(
    function middleware(request: NextRequestWithAuth) {

    },
    {
        callbacks: {
            authorized: ({ token }) => token?.role === "admin"
        }
    }
)

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/extra", "/dashboard"] }