import React, { useState, useMemo } from 'react'

import api from '../../services/api'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import { Link } from 'react-router-dom'

import camera from '../../assets/camera.svg'

import './styles.css'

export default function Register({ history }) {
    const [ imagem, setImagem ] = useState(null)
    const [ email, setEmail ] = useState('')
    const [ username, setUsuario ] = useState('')
    const [ password, setSenha ] = useState('')
    const [ erro, setErro ] = useState('')

    const preview = useMemo(() => {
        return imagem ? URL.createObjectURL(imagem) : null
    }, [imagem])

    async function handleSignUp(event) {
        event.preventDefault()
        if (!email || !username || !password) {
            setErro('Preencha todos os campos')
        } else {
            try {
                const response = await api.post('/registrar-se', { username, email, password })

                const imagemData = new FormData()

                imagemData.append('file', imagem)
          
                const config = {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                }

                await api.post(`/registrar-se/${response.data.id}/imagem`, imagemData, config)

                alert('Usuário cadastrado com sucesso, você pode fazer login agora.')

                history.push('/entrar')
            } catch (error) {
                console.log(error)
                setErro('Ocorreu um erro ao registrar-se')
            }
        }
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="8">
                        <Card>
                            <Card.Body>
                                <h3 className="text-center">Registrar-se</h3>
                                <Form onSubmit={handleSignUp}>
                                    <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }} className={imagem ? 'has-thumbnail' : ''}>
                                        <input type="file" onChange={event => setImagem(event.target.files[0])} />
                                        <div id="imagem">
                                            <img src={camera} alt="Select img"/>
                                            <p>Selecione uma imagem</p>
                                        </div>
                                    </label>
                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Nome de usuário" value={username} onChange={event => setUsuario(event.target.value)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="password" placeholder="Senha" value={password} onChange={event => setSenha(event.target.value)} />
                                    </Form.Group>
                                    {erro && <Alert variant="danger">{erro}</Alert>}
                                    <Button type="submit" variant="primary" block>Cadastrar</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Link to="/entrar" className="text-center">Já tem uma conta? entre agora mesmo</Link>
                    </Col>
                </Row>
            </Container>
        </>
    ) 
}
