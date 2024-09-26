import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"; // Add this import

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Add your authentication logic here
        return null; // Return user object if authentication is successful
      }
    }),
    // Add more providers if needed
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Attach the user role to the session object
      session.user.role = user.role;
      return session;
    },
  },
});