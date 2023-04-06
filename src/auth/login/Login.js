import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import img_input from "./../../assets/img/img_input.jpg"
import icons8_bing_256 from "./../../assets/img/icons8_bing_256.png"

import { mainUrl } from '../../API';
// import axios from "axios";
function Login() {
    const emailInpt = useRef();
    const passwordInpt = useRef();
    const [loginError, setLoginError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate('');

    const handerLogin = async (e) => {
        e.preventDefault();
        setLoginError('');

        const email = emailInpt.current.value;
        const password = passwordInpt.current.value;
        const body = {
            "email": email,
            "password": password
        };

        if ( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( email ) ) {
            setLoginError('please insert a valid email');
            emailInpt.current.focus();
            return 0;
        }
        if (password.length < 6) {
            setLoginError('invalid password');
            passwordInpt.current.focus();
            return 0;
        }
        setLoading(true);
        await fetch(`${mainUrl}/login`,
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                if (data.success === true) {
                    body['token'] = data.token;
                    localStorage.setItem('authInfo', JSON.stringify(body));
                    navigate('/');
                }
                if (data.code === 0) {
                    setLoginError('Email or password is wrong');
                }
            }
            ).catch(errors => {
                console.log(errors);
                setLoading(false);
                setLoginError('somthing went worng');
            })

    }

    return (
        <div className="container container-input d-flex po-rel">
            <div className="left-sign-in flex-center">
                <div className="contain-input">
                    <div className="titl">
                        <h2>Sign In</h2>
                        <span>Your Social Campaigns</span>
                    </div>
                    {/* <!-- <div className="line-titl flex-center"></div> --> */}
                    <form action="" className="form-inp" onSubmit={handerLogin} >
                        <div className="titl">
                            <span style={{ color: 'red' }}> {loginError} </span>
                        </div>
                        <input type="text" ref={emailInpt} name="email" id="email" placeholder="Email" />
                        <input type="password" ref={passwordInpt} name="password" id="pass" placeholder="Password" />
                        <NavLink to="forget-password">Forgot Password ?</NavLink>
                        {
                            !loading ? <button type="submit">
                                <span className="button-ok butt-inpt w-full">Sign in </span>
                            </button>
                                : <button type="button" style={{ opacity: '0.5' }} disabled>

                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <span className="button-ok butt-inpt w-full">Sign in &nbsp;&nbsp;<i className="fas fa-spinner fa-pulse fa-lg"></i> </span>
                                    </span>
                                </button>

                        }

                    </form>
                    <div className="sign-up">
                        You don’t have Account? <NavLink to="/auth/register">Sign up</NavLink>
                    </div>
                </div>
            </div>
            <div className="right-sign-in">
                <img src={img_input} alt="" />
                <div className="icon-log po-abs">
                    <img src={icons8_bing_256} alt="" />
                    <span>Slash Pets</span>
                </div>
            </div>
        </div>
    )
}

export default Login