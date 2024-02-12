import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./utils";
import { NextJSUser } from "./models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await NextJSUser.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("Wrong credentials! Invalid username");
    }

    const isPassCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPassCorrect) {
      throw new Error("Wrong credentials! Invalid password");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to logjn");
  }
};

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
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
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
