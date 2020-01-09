'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddFotoLocalUsuarioSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('local').notNullable()
    })
  }

  down () {
    this.table('users', (table) => {
      table.string('local').notNullable()
    })
  }
}

module.exports = AddFotoLocalUsuarioSchema
