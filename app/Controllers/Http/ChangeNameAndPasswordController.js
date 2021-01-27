'use strict'

const User = use('App/Models/User')

class ChangeNameAndPasswordController {
  async update ({ request, response }) {
    try {
      const { name, password, id } = request.all()

      const user = await User.findByOrFail('id', id)

      user.username = name
      user.password = password

      await user.save()
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo deu errado' } })
    }
  }
}

module.exports = ChangeNameAndPasswordController
