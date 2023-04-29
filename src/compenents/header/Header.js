
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { mainUrl } from '../../API';
// import { getCurrentUser, getFriendsFun } from '../redux/api';
import Profile from './Profile';

import { getUser, startGetUser, getUserError } from "../../redux/reducers/UserReducer"
import { getFirends, startGetFirends } from "../../redux/reducers/FriendsSlice";
import Logic from './Logic';

function Header(props) {
    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================
    const navigate = useNavigate();

    let noticCount = useSelector(state => state.noticCount.count );


    if (!loadingToken && refreshLogin.error) {
        navigate('/auth');
    }

    // get current user info
    const dispach = useDispatch();
    useEffect(() => {

        //get loged in user informations
        const getCurrentUser = async (dispatch) => {
            dispatch(startGetUser());
            if (refreshLogin.error) {
                dispatch(getUserError());
                return false;
            }
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            await axios.get(`${mainUrl}/profile/info`, config)
                .then(info => {
                    dispatch(getUser(info.data.user[0]))
                }).catch(err => {
                    dispatch(getUserError())
                });
        }
        getCurrentUser(dispach);
    }, []);




    // const { token, loading } = useSelector(state => state.refreshLogin);

    //css class for active item in main menu 
    const myClass = ({ isActive }) => isActive ? "el-menu active" : "el-menu";

    //load friend requests count
    const [requestsCount, setRequestsCount] = useState(0);
    const [loadingRequestsCount, setLoadingRequestsCount] = useState(false);

    useEffect(() => { //get requests count
        const getRequestsCount = async () => {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            if (!loadingRequestsCount) {
                setLoadingRequestsCount(true);
                if (!loadingToken)
                    await axios.get(mainUrl + '/friends/requests/count', config)
                        .then(info => {
                            // console.log("info => " , info );
                            let x = info.data.requests_count;
                            if (x != requestsCount)
                                setRequestsCount(x);
                            setLoadingRequestsCount(false)
                        }).catch((err) => {
                            setRequestsCount(0);
                            setLoadingRequestsCount(false)
                        }
                        )
            }
        }
        getRequestsCount();
        setInterval(() => {
            if (!loadingRequestsCount) {
                getRequestsCount();
                setLoadingRequestsCount(true)
            }
        }, 10000);

    }, [])




    // ===============================================

    const showMainMenuFunc = () => {
        props.leftAsideShowState.setLeftAsideShow(!props.leftAsideShowState.leftAsideShow);
    }
    return (
        <header className="header d-flex ali-center pad-top-2rem pad-bot-2rem bor-bot back-col-wh">

            <Logic />

            {/* <!-- ////////////////////////// --> */}
            <div className="father-logo flex-center">
                <div className="logo flex-center">

                    <div className="menu-side-ic menu-side-ic1 bo-rad" onClick={showMainMenuFunc}>
                        <span className="svg-icon svg-icon-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z" fill="currentColor"></path>
                                <path opacity="0.3" d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z" fill="currentColor"></path>
                            </svg>
                        </span>
                    </div>

                    <span className="fo-col-wh d-block fo-16">Slash</span><span
                        className="fo-20">Pet<span className="las-sp">s</span>
                    </span>
                </div>
                {/* <!-- ///////////// --> */}

            </div>
            {/* <!-- //////////////////////////////////////////// --> */}
            <nav className="d-flex ali-center">

                <ul className="menu d-flex my-menu">

                    <li className="el-m2">
                        {/* el-menu */}
                        <NavLink className={myClass} to="/" >
                            <i className="fa-solid fa-house">
                            </i>
                        </NavLink>
                    </li>

                    <li className="el-m2">
                        <NavLink className={myClass} to="/videos">
                            <i className="fa-solid fa-circle-play">
                            </i>
                        </NavLink>
                    </li>

                    <div className="el-m2">
                        <NavLink className={myClass} to="/people">
                            <i className="fa-solid fa-users">
                            </i>
                        </NavLink>
                    </div>

                    <li className="el-m2">
                        <NavLink className={myClass} to="/settings">
                            <i className="fa-solid fa-gear">
                            </i>
                        </NavLink>
                    </li>

                </ul>

            </nav>
            <div className="nav-rig flex-center po-rel back-col-wh">

                <div className="menu-side-ic menu-side-ic2 bo-rad" onClick={showMainMenuFunc}>
                    <span className="svg-icon svg-icon-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z" fill="currentColor"></path>
                            <path opacity="0.3" d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>

                <div className="nav-right flex-center po-rel">

                    <NavLink className={myClass} to="/search">
                        <div className="sh" id="sh">
                            <span className="svg-icon svg-icon-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                        transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                                    <path
                                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>
                        </div>
                    </NavLink>

                    <NavLink className={myClass} to="/posting">
                        <div className="new">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </NavLink>

                    <NavLink className={myClass} to="/messanger">
                        <div className="mes" >
                            <div className="point bo-rad-haf center-el-vr"></div>
                            <span className="svg-icon svg-icon-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3"
                                        d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                        fill="currentColor"></path>
                                    <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor"></rect>
                                    <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor"></rect>
                                </svg>
                            </span>
                        </div>
                    </NavLink>

                    {/* <NavLink className={ myClass } to="/store">
                        <div className="not" >
                            <span className="svg-icon svg-icon-1">
                                <i className="fas fa-store"></i>
                            </span>
                        </div>
                    </NavLink> */}


                    <NavLink className={myClass} to="/requests">
                        <div className="icon-menu" id="req" >
                            <i className="fa-solid fa-user-group"></i>

                            {
                                requestsCount > 0 ?
                                    requestsCount < 10 ?
                                        <p> {requestsCount} </p>
                                        :
                                        <p> +9</p>
                                    :
                                    ''
                            }

                        </div>
                    </NavLink>

                    <NavLink className={myClass} to="/notifications">

                        <div className="icon-menu" id="req" >
                            <i className="fas fa-bell"></i>
                            {
                                noticCount > 0 ?
                                    noticCount < 10 ?
                                        <p> {noticCount} </p>
                                        :
                                        <p> +9</p>
                                    :
                                    ''
                            }

                        </div>

                    </NavLink>

                </div>
            </div>
            {/* <!-- </div> --> */}
            <Profile />
        </header>

    ) // return

} // header class 

export default Header;

// export { getFriendsFun , getCurrentUser } ;