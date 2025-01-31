import React from "react";
import { Tacos, TacoDetails, SearchPage, Home } from "./components";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const Login = () => {
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

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth()
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return children
}
export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/search-page',
        element: ((
            <ProtectedRoute>
                <SearchPage />
            </ProtectedRoute>
        ))
    },
    {
        path: '/tacos/:taco',
        element: (
            <Outlet />
        ),
        children: [
            {
                index: true,
                element: (
                    <Tacos />
                )
            },
            {
                path: 'details',
                element: (
                    <TacoDetails />
                )
            }
        ]
    }
]

