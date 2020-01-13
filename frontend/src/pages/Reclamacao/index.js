import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import Body from '../../components/Body/index'

import Alert from 'react-bootstrap/Alert'

export default function Reclamacao({ match }) {
    const [reclamacao, setReclamacao] = useState([])
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function load() {
            const response = await api.get('/reclamacoes/' + match.params.id)
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

    return(
        <>          
            {load && (<Alert variant="warning">Carregando...</Alert>)}

            {!load && error && (<Alert variant="danger">Ocorreu um erro ao carregar</Alert>)}

            {!load && !error && (<Body name={reclamacao} />)}                    
        </>
    )
}
