'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReclamacaoLikeSchema extends Schema {
  up () {
    this.create('reclamacao_likes', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete
      ('CASCADE')
      table.integer('reclamacao_id').unsigned().references('id').inTable('reclamacoes').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('reclamacao_likes')
  }
}

module.exports = ReclamacaoLikeSchema
