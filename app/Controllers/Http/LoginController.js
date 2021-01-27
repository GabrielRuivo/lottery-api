'use strict'

const User = use('App/Models/User')

class LoginController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    const userName = await User.findByOrFail('email', email)

    const data = {
      userName,
      token,
/*       user_id: auth.user_id */
    }

    return data
  }

  async logout ({ auth }) {
    await auth
      .authenticator('jwt')
      .revokeTokens()
  }
}

module.exports = LoginController
