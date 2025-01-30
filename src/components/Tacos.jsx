import React from "react"
import { Link, useParams, Outlet, } from "react-router-dom"


export const Tacos = () => {
    const { taco } = useParams()

    return (
        <div>
            <h1>Tacos</h1>
            {taco}
            <Link to='details'>Ir a los detalles</Link>
            <Outlet />  
        </div>
    )
}