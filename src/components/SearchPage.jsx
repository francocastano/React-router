import React from "react"
import { Link } from "react-router-dom"


export const SearchPage = () => {
    const tacos = [
        'al pastor',
        'carnitas',
        'barbacoa',
        'pollo',
    ]
    const links = tacos.map(taco => (
        <li key={taco}>
            <Link to={`/tacos/${taco}`}>{taco}</Link>
        </li>
    ))
    return (
        <div>
            <h1>Search Page</h1>
            <ul>
                {links}
            </ul>
        </div>
    )

}