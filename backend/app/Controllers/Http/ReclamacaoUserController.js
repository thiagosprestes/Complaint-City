'use strict'

const Reclamacao = use('App/Models/Reclamacao')

class ReclamacaoUserController {
    async index({ auth }) {
        const data = await Reclamacao.query().with('users.imagemUser').with('imagens').with('likes').withCount('likes as reclamacaoLikes').where('user_id', auth.user.id).orderBy('id', 'desc').fetch()

        return data
    }

    async destroy ({ params, auth, response }) {
        const data = await Reclamacao.findOrFail(params.id)
    
        if (data.user_id !== auth.user.id) {
          return response.status(401)
        }
    
        await data.delete()
    }
}

module.exports = ReclamacaoUserController
