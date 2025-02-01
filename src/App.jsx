import React from "react"
import './App.css'
import { useRoutes } from "react-router-dom"
import { NavLink } from "./NavLink"
import { routes } from "./Routes"
import { AuthProvider } from "./useAuth"
import { Logout } from "./components"


export function App() {
    const element = useRoutes(routes)
    return (
        <div>
            <AuthProvider>
                <header>
                    <h1>Franchollo💵</h1>
                    <nav>
                        <Logout />
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/search-page">Search Page</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {element}
                <h1>My App</h1>
                <p>It's working!</p>
            </AuthProvider>
        </div>
    )
}