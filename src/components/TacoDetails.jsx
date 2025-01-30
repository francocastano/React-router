import React from "react"
import { useParams } from "react-router-dom"


export const TacoDetails = () => {
    const {taco} = useParams()

    return (
        <h1>Taco Details {taco}</h1>
    )
}