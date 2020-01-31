'use strict'

const User = use('App/Models/User')
const { validateAll } = use('Validator')

class AuthController {
    async register({ request, response }) {
        try {
            const messages = {
                'username.required': 'Este campo é obrigatório.',
                'username.unique': 'Usuário já cadastrado.',
                'email.required': 'Este campo é obrigatório.',
                'email.unique': 'Email já cadastrado.'
            }

            const validation = await validateAll(request.all(), {
                email: 'required|unique:users',
                username: 'required|unique:users',
                password: 'required'
            }, messages)

            if (validation.fails()) {
                return response.status(500).send({ messages: validation.messages() })
            }

            const data = request.only(['username', 'email', 'password'])
        
            const user = await User.create(data)

            return user
        } catch(err) {
            return response.status(500).send({ error: `Erro: ${err.message}` })
        } 
    }

    async authenticate({ request, auth }) {
        try{
            const { email, password } = request.all()

            const token = await auth.attempt(email, password)

            return token
        } catch (err) {
            return response.status(500).send({ error: `Erro: ${err.message}` })
        }
    }
}

module.exports = AuthController
