import React from "react"
import './App.css'
import { useRoutes} from "react-router-dom"
import { NavLink } from "./NavLink"
import { routes } from "./Routes"
import { AuthProvider } from "./useAuth"


export function App() {
    const element = useRoutes(routes)
    return ( 
        <div>
            <header>
                <h1>Franchollo💵</h1>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/search-page">Search Page</NavLink></li>
                    </ul>
                </nav>
            </header>
            <AuthProvider>
                {element}
            </AuthProvider>
            <h1>My App</h1>
            <p>It's working!</p>
        </div>
    )
}