'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddReclamacaoTituloSchema extends Schema {
  up () {
    this.table('reclamacoes', (table) => {
      table.string('titulo', 100).notNullable().after('id')
    })
  }

  down () {
    this.table('reclamacoes', (table) => {
      table.string('titulo', 100).notNullable().after('id')
    })
  }
}

module.exports = AddReclamacaoTituloSchema
