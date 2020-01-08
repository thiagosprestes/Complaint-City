import React from 'react'

import Card from 'react-bootstrap/Card'
import { Username, Endereco, Imagem, Dados, Botoes, Botao, Titulo, Descricao } from './styles'

export default function Body(props) {
    return(
        <ul className="list-unstyled">
            {props.name.map(post => (
                <li key={post.id}>
                    <div className="form-group">
                    <Card>
                        <Card.Header>
                            <Username href="#">{post.users.username}</Username>
                            <Endereco>{post.endereco}</Endereco>
                        </Card.Header>
                        {post.imagens.map(imagem => (
                            <li key={imagem.id}>
                                <Imagem src={`http://localhost:3333/imagens/${imagem.caminho}`} />
                            </li>
                        ))}    
                        <Dados></Dados>
                        <Botoes>
                            <Botao href="">
                                <i class="fa fa-thumbs-up"></i> Apoiar
                            </Botao>
                            <Botao href="">
                                <i class="fa fa-share"></i> Compartilhar
                            </Botao>
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
