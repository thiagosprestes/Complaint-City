'use strict'

const ImagemUser = use('App/Models/ImagemUser')
const User = use('App/Models/User')

const Helpers = use('Helpers')

class ImagemUserController {
    async show({ params, response }) {
        return response.download(Helpers.tmpPath(`imagens/user/${params.path}`))
    }

    async create({ params, request, response }) {
        try {

            const usuario = await User.findOrFail(params.id)

            const imagens = request.file('file', {
                types: ['image'],
                size: '1mb'
            })
        
            await imagens.move(Helpers.tmpPath('imagens/user'), {
                name: `${new Date().getTime()}-${imagens.clientName}`
            })

            if (!imagens.moved()) {
                return imagens.error()
            }

            await ImagemUser.create({ user_id: usuario.id, caminho: imagens.fileName })

            return response.status(200).send({ message: "Upload realizado com sucesso" })

        } catch {
            return response.status(500).send({ message: "Ocorreu um erro ao realizar o upload da imagem" })
        }
    }
}

module.exports = ImagemUserController
