'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUserTypeSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('tipo', 80).notNullable().after('password')
    })
  }

  down () {
    this.table('users', (table) => {
      table.string('tipo', 80).notNullable().after('password')
    })
  }
}

module.exports = AddUserTypeSchema
