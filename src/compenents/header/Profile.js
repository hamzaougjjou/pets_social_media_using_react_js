import React from 'react'
import { NavLink } from 'react-router-dom';

function Profile() {
    const activeLink = " el-menu active";
    const normalLink = " el-menu";
    return (
        <div style={{ display: 'flex !important' }} className="profile-icon profile1-icon d-flex bo-rad po-rel">
            <div className="name">
                <span>Hello</span>
                <p>luna cat</p>
            </div>
            <div className="my-profile-img bo-rad" style={{ backgroundImage: 'url("./image/profile.jpg")' }}></div>
            <div className="my-profile bo-rad">
                <div className="top-my-pro d-flex gap-10px">
                    <img src="./image/profile.jpg" alt="" className="image-50 bo-rad" />
                    <div className="info-top-my-pro">
                        <span className="d-block">luna cat</span>
                        <a href="#">@lunaCat.com</a>
                    </div>
                </div>
                <div className="mid-my-pro">
                    <ul className="prof">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="./profile">
                                My Profile
                            </NavLink>
                        </li>
                        <li><a href="#">My Projects</a></li>
                        <li><a href="#">My Subscription</a></li>
                        <li><a href="#">My Statements</a></li>
                    </ul>
                </div>
                <div className="bor-bott"></div>
                <div className="bot-my-pro">
                    <ul className="prof">
                        <li><a href="#" className="langauge">langauge<span className="lang-prof d-flex ali-center gap-10px">Arabic
                            <img src="./image/Flag_of_Yemen.svg" alt="" className="image-fr-30 bo-rad-haf" />
                        </span></a></li>
                        <li><a href="#">Account Sitting</a></li>
                        <li><a href="./login.html">Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile