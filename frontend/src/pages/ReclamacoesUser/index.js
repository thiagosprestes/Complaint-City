import React, { useState, useEffect} from 'react'

import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
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
        if (window.confirm("Tem certeza que deseja excluír esta reclamação?")) {
            await api.delete(`/reclamacoes-user/${id}`)

            setReclamacao(reclamacao.filter(post => post.id !== id))
        }
    }

    async function apoiar(id) {
        const response = await api.post(`/like/${id}`)
    }

    return(
        <>
            <h4>Suas reclamações</h4>
            <ul className="list-unstyled">
                {load && (<Alert variant="warning">Carregando...</Alert>)}
                {!load && error && (<Alert variant="danger">Ocorreu um erro ao carregar</Alert>)}
                {!load && !error && reclamacao.length > 0 ? 
                    reclamacao.map(post => (
                        <li key={post._id}>
                            <div className="form-group">
                                <Card>
                                    <Card.Header>
                                        <Author>
                                            <ImagemUser src={`http://localhost:3333/imagens/users/${post.users.imagemUser.caminho}`} />
                                            <div>
                                                <Username href="#">{post.users.username}</Username>
                                                <a href={`http://maps.google.com/?q=${post.endereco}`} target="_blank" style={{textDecoration: 'none', color: '#000'}}>
                                                    <Endereco>{post.endereco}</Endereco>
                                                </a>
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
                                        <div class="fb-share-button" data-href={`http://localhost:3000/reclamacoes/${post.id}`} data-layout="button" data-size="large">
                                            <a target="_blank" href={`http%3A%2F%2Flocalhost%3A3000%2Freclamacoes%2F${post.id}`} class="fb-xfbml-parse-ignore">Compartilhar</a>
                                        </div>
                                        <a className="btn btn-danger" onClick={() => handleDelete(post.id)} style={{marginLeft: 20, color: '#FFF'}}>
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
                    )): 
                    <li>
                        {!error && !load && (
                            <>
                                <h4>Você ainda não fez nenhuma reclamação</h4>
                                <Link to="/reclamar">
                                    <h5>Clique aqui para fazer uma reclamação</h5>
                                </Link>
                            </>               
                        )}
                    </li>
                }
            </ul>    
        </>   
    )
}
