'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagemReclamacaoSchema extends Schema {
  up () {
    this.create('imagem_reclamacao', (table) => {
      table.increments()
      table.integer('reclamacao_id').unsigned().references('id').inTable('reclamacoes').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('caminho', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('imagem_reclamacao')
  }
}

module.exports = ImagemReclamacaoSchema
