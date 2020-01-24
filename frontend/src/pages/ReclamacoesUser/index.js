import React, { useState, useEffect} from 'react'

import Card from 'react-bootstrap/Card'
import { Author, Username, ImagemUser, Endereco, Imagem, Dados, Botoes, Botao, Titulo, Descricao } from './styles'

import { Link } from 'react-router-dom'

import api from '../../services/api'

export default function ReclamacoesUser() {
    const [reclamacao, setReclamacao] = useState([])
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function load() {
            const response = await api.get('/reclamacoes-user')
            .then((response) => {
                const data = response.data

                return data
            })
            .finally(() => {
                setLoad(false)
            })
            .catch(() => {
                setError(true)
            })

            setReclamacao(response)
        }

        load()
    }, [])

    async function handleDelete(id) {
        const response = await api.delete(`/reclamacoes-user/${id}`)
    }

    return(
        <ul className="list-unstyled">
            {reclamacao.map(post => (
                <li key={post.id}>
                    <div className="form-group">
                    <Card>
                        <Card.Header>
                            <Author>
                                <ImagemUser src={`http://localhost:3333/imagens/users/${post.users.imagemUser.caminho}`} />
                                <div>
                                    <Username href="#">{post.users.username}</Username>
                                    <Endereco>{post.endereco}</Endereco>
                                </div>
                            </Author>
                        </Card.Header>
                        {post.imagens.map(imagem => (
                            <li key={imagem.id}>
                                <Imagem src={`http://localhost:3333/imagens/${imagem.caminho}`} />
                            </li>
                        ))}
                        <Dados></Dados>
                        <Botoes>
                            <Botao href="">
                                <i className="fa fa-thumbs-up"></i> Apoiar
                            </Botao>
                            <Link to={`/reclamacoes/${post.id}`} style={{textDecoration: 'none', color: '#000', marginRight: '20px'}}>
                                <i className="fa fa-share"></i> Compartilhar
                            </Link>
                            <a onClick={() => handleDelete(post.id)} style={{color: 'red'}}>
                                <i className="fa fa-trash"></i> Excluír
                            </a>
                        </Botoes>
                        <Card.Body>
                            <Titulo>{post.titulo}</Titulo>
                            <Descricao>{post.descricao}</Descricao>
                        </Card.Body> 
                    </Card>
                    </div>
                </li>
            ))}
        </ul>       
    )
}
