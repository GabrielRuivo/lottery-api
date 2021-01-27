'use strict'

const Type = use('App/Models/Type')

class TypeController {

  async index ({ request, response, view }) {

    const type = await Type.query().fetch()

    return type
  }

  async store ({ request, response, auth }) {
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = TypeController
