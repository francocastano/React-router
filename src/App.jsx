import React from "react"
import './App.css'
import { Link, Route, Routes, useParams, Outlet, NavLink as NavLinkReactRouter, useRoutes} from "react-router-dom"
import { NavLink } from "./NavLink"
import { routes } from "./Routes"


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
            {element}
            <h1>My App</h1>
            <p>It's working!</p>
        </div>
    )
}