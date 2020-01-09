'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagemUserSchema extends Schema {
  up () {
    this.create('imagem_users', (table) => {
      table.increments()
      table.integer('usuario_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('caminho', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('imagem_users')
  }
}

module.exports = ImagemUserSchema
