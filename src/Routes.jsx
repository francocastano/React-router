import React from "react";
import { Tacos, TacoDetails, SearchPage, Home, Login} from "./components";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

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

