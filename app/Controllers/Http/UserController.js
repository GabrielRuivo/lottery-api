'use strict'

const User = use('App/Models/User')

class UserController {

  async index ({ request, response, view }) {

    const { id } = request.get()

    const user = await User.query().fetch()

    return user
  }

  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
