import React from 'react'
import { NavLink } from 'react-router-dom'

function SimplePostHeader() {
    return (
        <div className="profile-person flex-between">
            <div className=" d-flex ali-center gap-10px">
                <img src="./image/profile.jpg" alt="" className="image-fr bo-rad" />
                <div className="name-date">
                    <NavLink to='/profile/898989'>
                        <span className="d-block fo-name-per">Luna Nala</span>
                    </NavLink>
                    <span className="fo-bot-na">24 minutes ago</span>
                </div>
            </div>
            <div className="menu-post flex-center bo-rad po-rel" id="menu-ic-si">
                <span className="svg-icon svg-icon-3 m-0 d-flex ali-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="4" height="4" rx="2" fill="currentColor">
                        </rect>
                        <rect x="17" y="10" width="4" height="4" rx="2" fill="currentColor">
                        </rect>
                        <rect x="3" y="10" width="4" height="4" rx="2" fill="currentColor">
                        </rect>
                    </svg>
                </span>
                <div className="menu-side po-abs" id="menu-side">
                    <ul className="menu-op">
                        <li className="mem-op bo-rad" >
                            <i className="fa-solid fa-bookmark"
                                style={{ fontSize: "14px", marginLeft: "3px" }} ></i>&nbsp;&nbsp;&nbsp;Save
                        </li>
                        <li><a href="#" className="mem-op bo-rad"><i
                            className="fa-solid fa-eye-slash"></i>&nbsp;&nbsp;Hidden</a>
                        </li>
                        <li>
                            <a href="#" className="mem-op bo-rad" >
                                <i className="fa-solid fa-star"></i>&nbsp;&nbsp;Favorite</a></li>
                        <li><a href="#" className="mem-op bo-rad" ><i
                            className="fa-solid fa-ban"></i>&nbsp;&nbsp;Block</a></li>
                        <li><a href="#" className="mem-op bo-rad"><i className="fa-solid fa-flag"
                            style={{ fontSize: "14px" }}></i>&nbsp;&nbsp;Reporting</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SimplePostHeader