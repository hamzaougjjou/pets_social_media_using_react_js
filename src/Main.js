import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './compenents/header/Header'
import LeftAside from './compenents/LeftAside'

function Main() {
    let [leftAsideShow , setLeftAsideShow ] = useState(false);
    return (
        <div>
            <Header leftAsideShowState={ {leftAsideShow,setLeftAsideShow} } />
            <div className='main-cnt'>
                <LeftAside leftAsideShowState={{leftAsideShow,setLeftAsideShow}} />
                <Outlet />
            </div>
        </div>
    )
}

export { Main }