import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // Providers.Email({
    //     server: process.env.EMAIL_SERVER,
    //     from: process.env.EMAIL_FROM,
    //     // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    // }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Twitter({
        clientId: process.env.TWITTER_ID,
        clientSecret: process.env.TWITTER_SECRET
    })
    // ...add more providers here
  ],
//   pages: {
//     signIn: '/auth/signin',
//     signOut: '/auth/signout',
//     error: '/auth/error', // Error code passed in query string as ?error=
//     verifyRequest: '/auth/verify-request', // (used for check email message)
//     newUser: null // If set, new users will be directed here on first sign in
//   },
//   logger: {
//     error(code, ...message) {
//       log.error(code, message)
//     },
//     warn(code, ...message) {
//       log.warn(code, message)
//     },
//     debug(code, ...message) {
//       log.debug(code, message)
//     }
//   },
  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
//   secret: process.env.SECRET,
  // A database is optional, but required to persist accounts in a database
//   database: process.env.DATABASE_URL,
})