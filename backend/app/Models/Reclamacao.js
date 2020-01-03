'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reclamacao extends Model {
    static get table() {
        return 'reclamacoes'
    }

    users() {
        return this.belongsTo('App/Models/User')
    }

    imagens() {
        return this.hasMany('App/Models/ImagemReclamacao')
    }

    likes() {
        return this.hasMany('App/Models/ReclamacaoLike')
    }
}

module.exports = Reclamacao
