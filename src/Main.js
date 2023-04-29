import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { mainUrl } from './API';
import Header from './compenents/header/Header'
import LeftAside from './compenents/LeftAside'
import Loading from './compenents/Loading';
import { startLogin, getLogin, LoginError } from './redux/reducers/refreshLoginSlice';

// import { refreshLogin } from './redux/api';

function Main() {

    let navigate = useNavigate();

    let [leftAsideShow, setLeftAsideShow] = useState(false);
    const [noticCount , setNoticCount ] = useState(10);

    let [loading, setLLoading] = useState(true);
    let [error, setError] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setLLoading(true);
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));


        if (authInfo === null) {
            navigate("/auth");
            dispatch(LoginError());
        }
        else {
            dispatch(startLogin());

            async function login() {
                await axios.post(`${mainUrl}/login`, { "email": authInfo.email, "password": authInfo.password })
                    .then(data => {
                        // console.log("login info " , data);
                        if (data.data.success === true) {
                            const authInfo2 = {
                                "email": authInfo.email,
                                "password": authInfo.password,
                                "token": data.data.token
                            }
                            dispatch(getLogin(authInfo2));
                        }
                        if (data.data.code === 0) { //Email or password is wrong
                            dispatch(LoginError());
                            setError(true);
                            navigate("/auth")
                        }
                    }
                    ).catch(errors => { //somthing went worng
                        dispatch(LoginError());
                        setError(true);
                        navigate("/auth")
                        // console.log(errors);
                    }).finally(() => {
                        setLLoading(false);
                    });
            }

            login();
            setInterval(() => {
                login();
            }, 3599940);

        }

    }, [])


    if (error) {
        navigate("/auth")
    }

    return (
        <div>

            {
                !loading && !error ?
                    <>
                        <Header noticCount={noticCount} setNoticCount={setNoticCount} leftAsideShowState={{ leftAsideShow, setLeftAsideShow }} />
                        <div className='main-cnt'>
                            <LeftAside leftAsideShowState={{ leftAsideShow, setLeftAsideShow }} />
                            <Outlet setNoticCount={setNoticCount} />
                        </div>
                    </>
                    :
                    <Loading />
            }

        </div>
    )
}

export { Main }