import NextAuth from "next-auth"
import Echo from "@/lib/echo-provider"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Echo({
      appId: process.env.ECHO_APP_ID!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      return session;
    },
  },
})