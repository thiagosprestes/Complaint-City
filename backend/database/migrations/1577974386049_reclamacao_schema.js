'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReclamacaoSchema extends Schema {
  up () {
    this.create('reclamacoes', (table) => {
      table.increments()
      table.string('endereco', 100).notNullable()
      table.string('categoria', 50).notNullable()
      table.string('descricao', 250).notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('reclamacoes')
  }
}

module.exports = ReclamacaoSchema
