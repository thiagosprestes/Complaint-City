'use strict'

const ReclamacaoLike = use('App/Models/ReclamacaoLike')
const Reclamacao = use('App/Models/Reclamacao')

class ReclamacaoLikeController {
    async like({ params, auth }) {
        const { id } =  auth.user

        const reclamacaoLike = await ReclamacaoLike.create({ user_id: id, reclamacao_id: params.id })

        return reclamacaoLike
    }
}

module.exports = ReclamacaoLikeController
