
import React from 'react'
import { useAuth } from '../useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const {state} = useLocation()
    
    const handleClick = () => {
        login()
        navigate(state?.pathname ?? '/')
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}
