import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import Body from '../../components/Body/index'

export default function Dashboard() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        async function loadPosts() {
            const response = await api.get('/reclamacoes')

            setPosts(response.data)
        }

        loadPosts()
    }, [])

    return(
        <>            
            <Body name={posts} />        
        </>
    )
}
