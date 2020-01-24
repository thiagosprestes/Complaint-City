'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with reclamacaos
 */

const Reclamacao = use('App/Models/Reclamacao')

class ReclamacaoController {
  /**
   * Show a list of all reclamacaos.
   * GET reclamacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const data = await Reclamacao.query().with('users.imagemUser').with('imagens').with('likes').withCount('likes as reclamacaoLikes').orderBy('id', 'desc').fetch()

    return data
  }

  /**
   * Render a form to be used for creating a new reclamacao.
   * GET reclamacaos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, auth }) {
  }

  /**
   * Create/save a new reclamacao.
   * POST reclamacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const { id } = auth.user

    const data = request.only(['titulo', 'endereco', 'categoria', 'descricao'])

    const tarefa = await Reclamacao.create({ ...data, user_id: id })

    return tarefa
  }

  /**
   * Display a single reclamacao.
   * GET reclamacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const data = await Reclamacao.query().with('users.imagemUser').with('imagens').with('likes').withCount('likes as reclamacaoLikes').orderBy('id', 'desc').where('id', params.id).fetch()

    return data 
  }

  /**
   * Render a form to update an existing reclamacao.
   * GET reclamacaos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update reclamacao details.
   * PUT or PATCH reclamacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a reclamacao with id.
   * DELETE reclamacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const data = await Reclamacao.findOrFail(params.id)

    if (data.user_id !== auth.user.id) {
      return response.status(401)
    }

    await data.delete()
  }
}

module.exports = ReclamacaoController
