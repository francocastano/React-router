import React from "react";
import { Tacos, TacoDetails, SearchPage, Home, Login, Logout} from "./components";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth()
    const location = useLocation()
    if (!isAuthenticated) {
        return <Navigate to="/login" state={location} />
    }
    return children
}
export const routes = [
    {
        path: '/',
        element: (
            <ProtectedRoute><Home /></ProtectedRoute>
        )
    },
    {
        path: '/logout',
        element: <Logout />
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
            <ProtectedRoute><Outlet /></ProtectedRoute>
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

