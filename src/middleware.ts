import { withAuth } from "next-auth/middleware"
import { MiddlewareConfig } from "next/server"

export {default} from "next-auth/middleware"

// export default withAuth({
//   callbacks: {
//     authorized: async ({req,token})=>{
//       if (req.nextUrl.pathname.startsWith('/admin'))
//         return token?.role === "admin"
//       return false
//     }
//   }
// })

export const config: MiddlewareConfig = {matcher: ['/admin/:path*'] }