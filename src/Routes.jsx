import React from "react";
import { Tacos, TacoDetails, SearchPage, Home } from "./components";
import { Outlet } from "react-router-dom";

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
            <Outlet />
        ),
        children:[
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

