import React from "react"
import { Link } from "react-router-dom"

export const Home = () => (
    <div>
        <h1>Home</h1>
        <Link to='/search-page'>Go to search</Link>
    </div>
)