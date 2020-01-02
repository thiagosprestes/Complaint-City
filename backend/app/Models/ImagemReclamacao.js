'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ImagemReclamacao extends Model {
    static get table() {
        return 'imagem_reclamacao'
    }
}

module.exports = ImagemReclamacao
