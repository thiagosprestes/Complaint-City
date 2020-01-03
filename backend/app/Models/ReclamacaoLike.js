'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ReclamacaoLike extends Model {
    reclamacao() {
        return this.belongsTo('App/Models/Reclamacao')
    }

    users() {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = ReclamacaoLike
