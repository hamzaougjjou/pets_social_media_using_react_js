import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './compenents/header/Header'

function Main() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export { Main }