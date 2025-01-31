
import React from 'react'
import { useAuth } from '../useAuth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleClick = () => {
        login()
        navigate('/search-page')
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}
