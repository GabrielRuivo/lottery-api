'use strict'

const Game = use('App/Models/Game')
const Type = use('App/Models/Type')

class GameController {

  async index ({ params, request, response, view }) {

    const { id } = request.get()

    const game = await Game
      .query()
      .with('user')
      .where('user_id', id)
      .with('types')
      .fetch()

    return game
  }

  async store ({ request, response, auth }) {
    const { data } = request.all()

    /* console.log('AUTH:', auth) */

    const data1 = data.map(item => {
    /*  item.types = typeGame */
      console.log('item numbers: ', item.numbers)
      item.numbers = item.numbers.join(', ')
      item.user_id = auth.user.id
      return item
    })

    console.log('DATA: ', data1)

    const game = await Game.createMany(data1)

    return game
  }

  async show ({ params, request, response, view }) {
    const type = await Type.query().fetch()

    return type
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = GameController
