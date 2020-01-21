'use strict'

const ImagemReclamacao = use('App/Models/ImagemReclamacao')
const Reclamacao = use('App/Models/Reclamacao')

const Helpers = use('Helpers')

class ImagemReclamacaoController {
    async show({ params, response }) {
        return response.download(Helpers.tmpPath(`imagens/${params.path}`))
    }

    async create({ params, request, response }) {
        try {
            
            const reclamacao = await Reclamacao.findOrFail(params.id)

            const imagens = request.file('file', {
                size: '1mb'
            })

            await imagens.move(Helpers.tmpPath('imagens'), {
                name: `${new Date().getTime()}-${imagens.clientName}`
            })

            if (!imagens.moved()) {
                return imagens.error()
            }

            await ImagemReclamacao.create({ reclamacao_id: reclamacao.id, caminho: imagens.fileName })

            return response.status(200).send({ message: 'Imagens inseridas com sucesso' })

        } catch {
            return response.status(500).send({ error: 'Ocorreu um erro ao fazer o upload das imagens.' })
        }
    }
}

module.exports = ImagemReclamacaoController
