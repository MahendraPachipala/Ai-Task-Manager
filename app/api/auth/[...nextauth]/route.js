import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    authorization: {
      params: {
        scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/gmail.modify',
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  }),
],
  callbacks: {

    async jwt({ token, account }) {
      if (account) {
        console.log(account);
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
  
    async session({ session, token }) {
      console.log("refreshToken",token.refreshToken);

      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      if(sessionUser) {
        session.user.id = sessionUser._id.toString();
      }

      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      return session;
    },


    async signIn({ profile }) {
      try {
        await connectToDB();

        const userExists = await User.findOne({
          email: profile.email,
        });

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(/\s+/g, "").toLowerCase(),
            image: profile.picture,
          });
        }
        
        return true; 
      } catch (error) {
        console.log("Sign-in error:", error);
        return false; 
      }
    },
  },
});

export { handler as GET, handler as POST };