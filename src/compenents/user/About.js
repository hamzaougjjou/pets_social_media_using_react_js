import React from 'react'
import { NavLink } from 'react-router-dom';
// clipRule
function About({ loading, user }) {

    // console.log(user);

    return (
        <div className="body d-flex">
            <main className="main-profile">
                <div className="body-posts d-flex">

                    <div className="right-Freind-side main-box flex-1">

                        <div className="boxs-freind boxs-group">
                            {/* ----------------------------------------*/}
                            <div className="box-about main-box">
                                <div className="top-box-about bor-bott-col flex-between ali-center">
                                    <h3>Basic information</h3>
                                    {/* <button className="button-ok butt-about d-flex ali-center">
                                        <span className="svg-icon follow svg-icon-3 d-flex">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                                    transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1"
                                                    fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        Add Information
                                    </button> */}
                                </div>
                                <div className="info-about w-full">
                                    <ul className="ul-about w-full">
                                        <li className="flex-between w-full">
                                            <div className="left-info d-flex ali-center">
                                                <div>
                                                    <span className="svg-icon svg-icon-4 me-1 d-flex">
                                                        <svg width="40" height="40" viewBox="0 0 18 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3"
                                                                d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                                                                fill="currentColor"></path>
                                                            <path
                                                                d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                                                                fill="currentColor"></path>
                                                            <rect x="7" y="6" width="4" height="4" rx="2"
                                                                fill="currentColor"></rect>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    {
                                                        loading ?
                                                            <>
                                                                <span className="line h15 w150p"></span>
                                                                <span className="line h10 w50p"></span>
                                                            </>

                                                            :
                                                            <>
                                                                <span className="d-block">{user.name}</span>
                                                                <span>Full Name</span>
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                            <span className="svg-icon svg-icon-2 m-0">
                                                {/* <i className="fa-solid fa-pen-to-square"></i> */}
                                            </span>
                                        </li>
                                        <li className="flex-between w-full">
                                            <div className="left-info d-flex ali-center">
                                                <div>
                                                    <span className="svg-icon svg-icon-3 d-flex">
                                                        <i className="fa-solid fa-user" style={{ fontSize: '18' }} ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    {
                                                        loading ?
                                                            <>
                                                                <span className="line h15 w150p"></span>
                                                                <span className="line h10 w50p"></span>
                                                            </>

                                                            :
                                                            <>
                                                                {
                                                                    user.gender != null ?
                                                                        <span className="d-block">{user.gender}</span>
                                                                        :
                                                                        <span className="d-block color-warning">Gender not exist</span>
                                                                }
                                                                <span>Gender</span>
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                            <span className="svg-icon svg-icon-2 m-0">
                                                {/* <i className="fa-solid fa-pen-to-square"></i> */}
                                            </span>
                                        </li>
                                        <li className="flex-between w-full">
                                            <div className="left-info d-flex ali-center">
                                                <div>
                                                    <span className="svg-icon svg-icon-3 d-flex">
                                                        <i className="fa-solid fa-cake-candles" style={{ fontSize: '18' }} ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    {
                                                        loading ?
                                                            <>
                                                                <span className="line h15 w150p"></span>
                                                                <span className="line h10 w50p"></span>
                                                            </>

                                                            :
                                                            <>
                                                                <span className="d-block">{user.birthday}</span>
                                                                <span>Birth Day</span>
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                            <span className="svg-icon svg-icon-2 m-0">
                                                {/* <i className="fa-solid fa-pen-to-square"></i> */}
                                            </span>
                                        </li>
                                        <li className="flex-between w-full">
                                            <div className="left-info d-flex ali-center">
                                                <div>
                                                    <span className="svg-icon svg-icon-3 d-flex">
                                                        <i className="fa-solid fa-paw"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    {
                                                        loading ?
                                                            <>
                                                                <span className="line h15 w150p"></span>
                                                                <span className="line h10 w50p"></span>
                                                            </>
                                                            :
                                                            <>
                                                                <span className="d-block">{user.breed}</span>
                                                                <span>breed</span>
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                            <span className="svg-icon svg-icon-2 m-0">
                                                {/* <i className="fa-solid fa-pen-to-square"></i> */}
                                            </span>
                                        </li>
                                        <li className="flex-between w-full">
                                            <div className="left-info d-flex ali-center">
                                                <div>
                                                    <span className="svg-icon svg-icon-3 d-flex">
                                                        <i className="fa-solid fa-earth-americas"
                                                            style={{ fontSize: '18px' }} ></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    {
                                                        loading ?
                                                            <>
                                                                <span className="line h15 w150p"></span>
                                                                <span className="line h10 w50p"></span>
                                                            </>

                                                            :
                                                            <>
                                                                {
                                                                    user.address != null ?
                                                                        <span className="d-block">{user.address}</span>
                                                                        :
                                                                        <span className="d-block color-warning">Adress not exist</span>
                                                                }

                                                                <span>Address</span>
                                                            </>
                                                    }

                                                </div>
                                            </div>
                                            <span className="svg-icon svg-icon-2 m-0">
                                                {/* <i className="fa-solid fa-pen-to-square"></i> */}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* ------------------------------------------ */}



                            {/* <!-- ----------------------------------- --> */}
                            <div className="box-about main-box">
                                <div className="top-box-about bor-bott-col flex-between ali-center">
                                    <h3>Contact</h3>
                                </div>
                                <div className="info-about w-full">
                                    <ul className="ul-about w-full">
                                        <li className="flex-between w-full">
                                            <div className="left-info d-flex ali-center">
                                                <div>
                                                    <span className="svg-icon svg-icon-3 d-flex">
                                                        <i className="fa-solid fa-phone"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    {
                                                        loading ?
                                                            <>
                                                                <span className="line h15 w150p"></span>
                                                                <span className="line h10 w50p"></span>
                                                            </>

                                                            :
                                                            <>
                                                                <span className="d-block">{user.phone}</span>
                                                                <span>Mobile</span>
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                            <span className="svg-icon svg-icon-2 m-0">
                                                {/* <i className="fa-solid fa-pen-to-square"></i> */}
                                            </span>
                                        </li>
                                        <li className="flex-between w-full">
                                            <div className="left-info d-flex ali-center">
                                                <div>
                                                    <span className="svg-icon svg-icon-3 d-flex">
                                                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3"
                                                                d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                                                                fill="currentColor"></path>
                                                            <path
                                                                d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    {
                                                        loading ?
                                                            <>
                                                                <span className="line h15 w150p"></span>
                                                                <span className="line h10 w50p"></span>
                                                            </>

                                                            :
                                                            <>
                                                                <span className="d-block">{user.email}</span>
                                                                <span>Email</span>
                                                            </>
                                                    }

                                                </div>
                                            </div>
                                            <span className="svg-icon svg-icon-2 m-0">
                                                {/* <i className="fa-solid fa-pen-to-square"></i> */}
                                            </span>
                                        </li>
                                        <li className="flex-between w-full">
                                            <div className="left-info d-flex ali-center">
                                                <div>
                                                    <span className="svg-icon svg-icon-1 d-flex">
                                                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3"
                                                                d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                                                fill="currentColor"></path>
                                                            <rect x="6" y="12" width="7" height="2" rx="1"
                                                                fill="currentColor"></rect>
                                                            <rect x="6" y="7" width="12" height="2" rx="1"
                                                                fill="currentColor"></rect>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    {
                                                        loading ?
                                                            <>
                                                                <span className="line h15 w150p"></span>
                                                                <span className="line h10 w50p"></span>
                                                            </>

                                                            :
                                                            <>
                                                                <NavLink to={"/messanger/" + user.id}>
                                                                    <span className="d-block">@{user.id}</span>
                                                                </NavLink>
                                                                <span>Message</span>
                                                            </>
                                                    }

                                                </div>
                                            </div>
                                            <span className="svg-icon svg-icon-2 m-0">
                                                {/* <i className="fa-solid fa-pen-to-square"></i> */}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- ------------------------------------------ --> */}

                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default About