import NextAuth from 'next-auth/next'
import Google from 'next-auth/providers/google'
/**
 * ID de cliente
 * 1028126838396-7768t9floj8agv9r7g8eljukqp41qs7a.apps.googleusercontent.com
 *
 * Secreto del cliente
 * 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
 */
export default NextAuth({

  providers: [
    Google({
      clientId: '1028126838396-7768t9floj8agv9r7g8eljukqp41qs7a.apps.googleusercontent.com',
      clientSecret: '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'
    })
  ]
})
