'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Game extends Model {
  user () {
    /* this.belongsTo: Significa que o projeto pertence a UM usuario
    e passamos o Model de usuario como parametro */
    return this.belongsTo('App/Models/User')
  }

  types () {
    return this.belongsTo('App/Models/Type', 'game_id')
  }
}

module.exports = Game
