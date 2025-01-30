import React from "react";
import { Tacos, TacoDetails, SearchPage, Home } from "./components";

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/search-page',
        element: (
            <SearchPage />
        )
    },
    {
        path: '/tacos/:taco',
        element: (
            <Tacos />
        ),
    },
    {
        path: '/tacos/:taco/details',
        element: (
            <TacoDetails />
        )
    },
]

