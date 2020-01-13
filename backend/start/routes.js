'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/registrar-se', 'AuthController.register')

Route.post('/registrar-se/:id/imagem', 'ImagemUserController.create')

Route.get('/imagens/users/:path', 'ImagemUserController.show')

Route.post('/entrar', 'AuthController.authenticate')

Route.resource('usuarios', 'UserController')

Route.post('/reclamacao/:id/imagem', 'ImagemReclamacaoController.create').middleware(['auth'])

Route.get('imagens/:path', 'ImagemReclamacaoController.show')

Route.resource('reclamacoes', 'ReclamacaoController')

Route.post('/like/:id', 'ReclamacaoLikeController.like').middleware(['auth'])
