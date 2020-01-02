'use strict'

const ImagemReclamacao = use('App/Models/ImagemReclamacao')
const Reclamacao = use('App/Models/Reclamacao')

const Helpers = use('Helpers')

class ImagemReclamacaoController {
    async show({ params, response }) {
        return response.download(Helpers.tmpPath(`uploads/${params.path}`))
    }

    async create({ params, request, response }) {
        try {
            
            const reclamacao = await Reclamacao.findOrFail(params.id)

            const imagens = request.file('file', {
                size: '1mb'
            })

            await imagens.moveAll(Helpers.tmpPath('imagens'), file => ({
                name: `${new Date().getTime()}-${file.clientName}`
            }))

            if (!imagens.movedAll()) {
                return imagens.errors()
            }

            await Promise.all(
                imagens.movedList().map(item => ImagemReclamacao.create({ reclamacao_id: reclamacao.id, caminho: item.fileName }))
            )

            return response.status(200).send({ message: 'Imagens inseridas com sucesso' })


        } catch {
            return response.status(500).send({ error: 'Ocorreu um erro ao fazer o upload das imagens.' })
        }
    }
}

module.exports = ImagemReclamacaoController
