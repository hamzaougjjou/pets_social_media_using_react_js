import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import profile from "./../../assets/img/profile.jpg";

function Profile() {
    const activeLink = " el-menu active";
    const normalLink = " el-menu";
    return (
        <div style={{ display: 'flex !important' }} className="profile-icon profile1-icon d-flex bo-rad po-rel">
            <div className="name">
                <span>Hello</span>
                <p>luna cat</p>
            </div>
            <div className="my-profile-img bo-rad" style={{ backgroundImage: `url("${profile}")` }}></div>
          
            <div className="my-profile bo-rad">
                <div className="top-my-pro d-flex gap-10px">
                
                    <img src={ profile } alt="" className="image-50 bo-rad" />

                    <div className="info-top-my-pro">
                        <span className="d-block">luna cat</span>
                        <Link to="/profile">@lunaCat.com</Link>
                    </div>
                </div>
                <div className="mid-my-pro">
                    <ul className="prof">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="./profile">
                                My Profile
                            </NavLink>
                        </li>
                        <li><NavLink to="">My Projects</NavLink></li>
                        <li><NavLink to="">My Subscription</NavLink></li>
                        <li><NavLink to="">My Statements</NavLink></li>
                    </ul>
                </div>
                <div className="bor-bott"></div>
                <div className="bot-my-pro">
                    <ul className="prof">
                        <li><NavLink to="#" className="langauge">langauge<span className="lang-prof d-flex ali-center gap-10px">Arabic
                            <img src="./image/Flag_of_Yemen.svg" alt="" className="image-fr-30 bo-rad-haf" />
                        </span></NavLink></li>
                        <li><NavLink to="profile/about">Account Sitting</NavLink></li>
                        <li><NavLink to="/auth">Sign Out</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile