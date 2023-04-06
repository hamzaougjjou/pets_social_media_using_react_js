import axios from 'axios';
import React, { useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { mainUrl } from '../../API';

function EditProfileName() {
    const [currentPassState, setCurrentPassState] = useState('password');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const passwordInpt = useRef();
    const newNameInpt = useRef();
    let y = true;

    const navigate = useNavigate();
    const goBackHandler = () => {
        navigate('./../')
    }
    const showCurrentPass = () => {
        y = !y;
        if (!y)
            setCurrentPassState('text');
        else
            setCurrentPassState('password');
    }

    const changeProfileName = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);
        const password = passwordInpt.current.value.trim();
        const newName = newNameInpt.current.value.trim();
        //check if user inser a correct informations
        if (password.length < 6 || newName.length < 3) {
            //
            setError("please insert a valid data")
            return false;
        }
        //profile/name/change
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        await axios.post(`${mainUrl}/profile/name/change`, { "password": password, "new_name": newName }, config)
            .then(info => {
                console.log(info);
                if (info.data.success === true) {
                    setShowPopUp(true);
                }
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const doneFunc = () => {
        setShowPopUp(false);
        //go setting
        window.location.href = "../settings"
    }
    return (
        <>
            {
                showPopUp ?
                    <div id="group-item-popup" className="group-item-overlay" >
                        <div className="group-item-popup" >
                            <h2>Change your name</h2>
                            <div className="content">
                                Your Name has been changed
                            </div>
                            <div className='group-item-popup-btns flex-between w-full'>
                                <button onClick={doneFunc} className="button-ok bot-req bot-fr bot-gro" style={{padding:"10px 20px"}}>
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }

            <div className="container container-input d-flex po-rel">
                <div className="left-sign-in flex-center" style={{ maxWidth: "600px" }}>
                    <div className="contain-input">
                        <div className='justify-between flex-between'>
                            <span onClick={goBackHandler} style={{ cursor: "pointer" }} className="svg-icon svg-icon-1 m-0">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1"
                                        fill="currentColor"></rect>
                                    <path
                                        d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>
                            <p style={{ color: 'red' }}>{error}</p>
                        </div>

                        <br />
                        <br />
                        <br />
                        <div className="title" style={{ textAlign: 'start' }}>
                            <h2>Change Your Profile Name</h2>
                            <br />
                        </div>

                        <form action="#" onSubmit={changeProfileName} className="form-inp">
                            <span className='sett-inpt-chng-pass-c'>
                                <input ref={newNameInpt} name="name" type="text" placeholder="Insert New Name" />
                            </span>
                            <span className='sett-inpt-chng-pass-c'>
                                <input ref={passwordInpt} name="password" type={currentPassState} placeholder="Inset Your Password" />
                                <i onClick={showCurrentPass} className='fa fa-eye'></i>
                            </span>

                            {/* <NavLink to="/auth/forget-password">Forgot Password ?</NavLink> */}
                            {
                                loading ?
                                    <button type="button" style={{ opacity: '0.5' }}>
                                        <span className="button-ok butt-inpt w-full" >
                                            Confirme Changes
                                            &nbsp;&nbsp;
                                            <i className="fas fa-spinner fa-pulse"></i>
                                        </span>
                                    </button>
                                    :
                                    <button type="submit" >
                                        <span className="button-ok butt-inpt w-full" >
                                            Confirme Changes
                                        </span>
                                    </button>
                            }

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfileName;