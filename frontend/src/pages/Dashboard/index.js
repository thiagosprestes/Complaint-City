import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import Body from '../../components/Body/index'

import Alert from 'react-bootstrap/Alert'

export default function Dashboard() {
    const [posts, setPosts] = useState([])
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function loadPosts() {
            const response = await api.get('/reclamacoes')
            .then((response) => {
                const data = response.data

                return data
            })
            .finally(() => {
                setLoad(false)
            }).catch(() => {
                setError(true)
            })

            setPosts(response)
        }

        loadPosts()
    }, [])

    return(
        <>          
            {load && (<Alert variant="warning">Carregando...</Alert>)}

            {!load && error && (<Alert variant="danger">Ocorreu um erro ao carregar</Alert>)}

            {!load && !error && (<Body name={posts} />)}                    
        </>
    )
}
