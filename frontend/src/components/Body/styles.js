import styled from 'styled-components'

export const Author = styled.div`
    display: flex;
    flex-direction: row;
`

export const Username = styled.a`
    font-weight: 700;
    font-size: 15px;
    color: #000;
    &:hover {
        color: #000;
        text-decoration: none;
    }
`

export const ImagemUser = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 10px;
    border-radius: 50px;
    object-fit: cover;
`

export const Endereco = styled.text`
    display: flex;
    font-size: 14px;
`

export const Imagem = styled.img`
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #ccc;
`

export const Dados = styled.text``

export const Botoes = styled.div`
    padding: 20px 20px 0 20px;
`

export const Botao = styled.a`
    margin-right: 20px;
    text-decoration: none;
    color: #000;
    &:hover {
        color: #000;
        text-decoration: none;
    }
`

export const Titulo = styled.text`
    display: flex;
    font-size: 16px;
    font-weight: 700;
`

export const Descricao = styled.text``
