import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../useAuth"


export const Logout = () => {
    const { logout , isAuthenticated } = useAuth()
    const navigate = useNavigate()

    if (!isAuthenticated) {
        return <></>
    }

    const handleClick = () => {
        logout()
        navigate('/')
    }

    return <button onClick={handleClick}>Logout</button>
}