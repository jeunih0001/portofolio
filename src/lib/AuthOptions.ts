import { NextAuthOptions, getServerSession } from "next-auth";
import Google, { GoogleProfile } from "next-auth/providers/google";
import { ADMIN_EMAIL, GOOGLE_CLIENT, GOOGLE_SECRET } from "./config";

export const AuthOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    Google({
      clientId: GOOGLE_CLIENT!,
      clientSecret: GOOGLE_SECRET!,
      profile(profile: GoogleProfile){
        return {
          id: profile.sub,
          name: profile.name,
          image: profile.picture,
          email: profile.email,
        }
      }
    }),
  ],
  callbacks: {
    async signIn({user,account,profile}){
      return user.email === ADMIN_EMAIL
    }
  }
}

export const getServerAuthSession = async () =>  await getServerSession(AuthOptions)