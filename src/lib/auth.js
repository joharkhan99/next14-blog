import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDB } from "./utils";
import { NextJSUser } from "./models";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connectToDB();
        try {
          const findUser = await NextJSUser.findOne({ email: profile.email });

          if (!findUser) {
            const newUser = new NextJSUser({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },
  },
});
