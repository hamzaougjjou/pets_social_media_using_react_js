import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import Header from './compenents/header/Header'
import LeftAside from './compenents/LeftAside'
import { refreshLogin } from './redux/api';

function Main() {

    let [leftAsideShow, setLeftAsideShow] = useState(false);

    const dispatch = useDispatch();
    // useEffect(() => {
        // refreshLogin(dispach);
        refreshLogin(dispatch);
    // },[])

    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    console.log(refreshLogin);
    return (
        <div>

            {
                !refreshLogin.loading && !refreshLogin.error ?
                    <>
                        <Header leftAsideShowState={{ leftAsideShow, setLeftAsideShow }} />
                        <div className='main-cnt'>
                            <LeftAside leftAsideShowState={{ leftAsideShow, setLeftAsideShow }} />
                            <Outlet />
                        </div>
                    </>
                    :
                    null
            }

        </div>
    )
}

export { Main }