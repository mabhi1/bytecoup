import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const user = { email: "test@test.com", password: "pass" };
          if (credentials.email === user.email && credentials.password === user.password) return user;
          else return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
