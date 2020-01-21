import React, { useMemo, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import api from '../../services/api'

import './styles.css'
import camera from '../../assets/camera.svg'

export default function Reclamar({ history }) {
    const [ imagem, setImagem ] = useState('')
    const [ endereco, setEndereco ] = useState('')
    const [ titulo, setTitulo ] = useState('')
    const [ categoria, setCategoria ] = useState('')
    const [ descricao, setDescricao ] = useState('')

    const [ erro, setErro ] = useState('')

    const preview = useMemo(() => {
        return imagem ? URL.createObjectURL(imagem) : null
    }, [imagem])

    async function handleRegister(event) {
        event.preventDefault()

        if (!imagem || !endereco || !titulo || !descricao) {
            setErro('Preencha todos os campos')
        } else {
            try {
                const response = await api.post('/reclamacoes', { titulo, endereco, categoria, descricao })

                const imagemData = new FormData()

                imagemData.append('file', imagem)

                const config = {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                }

                await api.post(`/reclamacao/${response.data.id}/imagem`, imagemData, config)

                alert('Reclamação registrada com sucesso')

                history.push('/')

            } catch (error) {
                setErro('Ocorreu um erro registrar sua reclamação')
            }
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4>Reclamar</h4>
                            <Form onSubmit={handleRegister}>
                                <Row>
                                    <Col>
                                        <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }} className={imagem ? 'has-thumbnail' : ''}>
                                            <input type="file" onChange={event => setImagem(event.target.files[0])} />
                                            <div id="imagem">
                                                <img src={camera} alt="Select img"/>
                                                <p>Selecione uma imagem</p>
                                            </div>
                                        </label>  
                                        <Form.Group>
                                            <Form.Control placeholder="Local do problema" value={endereco} onChange={event => setEndereco(event.target.value)} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control placeholder="De um titulo para sua reclamação" value={titulo} onChange={event => setTitulo(event.target.value)} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control as="select" value={categoria} onChange={event => setCategoria(event.target.value)}>
                                                <option value="" select disabled>Selecione uma opção</option>
                                                <option value="Ruas">Ruas</option>
                                                <option value="Infraestrutura">Infraestrutura</option>
                                                <option value="Saúde">Saúde</option>
                                                <option value="Outros">Outros</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control as="textarea" placeholder="Descreva qual é o problema" value={descricao} onChange={event => setDescricao(event.target.value)} />
                                        </Form.Group>
                                        {erro && <Alert variant="danger">{erro}</Alert>}
                                        <Form.Group>
                                            <Button type="submit" block>Registrar reclamação</Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
