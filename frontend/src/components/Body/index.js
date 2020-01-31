import React from 'react'

import Card from 'react-bootstrap/Card'
import { Author, Username, ImagemUser, Endereco, Imagem, Dados, Botoes, Titulo, Descricao } from './styles'

import api from '../../services/api'

export default function Body(props) {
    /*async function apoiar(id) {
        const response = await api.post(`/like/${id}`)
    }*/
    return(
        <ul className="list-unstyled">
            {props.name.map(post => (
                <li key={post.id}>
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
                            <div className="fb-share-button" data-href={`http://localhost:3000/reclamacoes/${post.id}`} data-layout="button" data-size="large"><a target="_blank" href={`http%3A%2F%2Flocalhost%3A3000%2Freclamacoes%2F${post.id}`} className="fb-xfbml-parse-ignore">Compartilhar</a></div>
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
