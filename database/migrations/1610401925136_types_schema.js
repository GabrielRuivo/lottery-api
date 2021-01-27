'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypesSchema extends Schema {
  up () {
    this.create('types', (table) => {
      table.increments()
      table.string('game_type').notNullable()
      table.string('description').notNullable()
      table.string('range').notNullable()
      table.string('price').notNullable()
      table.string('max-number').notNullable()
      table.string('color').notNullable()
      table.string('min-cart-value').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('types')
  }
}

module.exports = TypesSchema
