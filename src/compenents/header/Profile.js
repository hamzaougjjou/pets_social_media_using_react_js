import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { storageUrl } from '../../API';
import { HeaderProfileLoading } from '../loading/Index';
import profile from "./../../assets/img/profile.jpg";

function Profile() {
    const activeLink = " el-menu active";
    const normalLink = " el-menu";
    const { loading, user, error } = useSelector(state => state.getUser);
    let profile_img = user.profile_img === null ? profile : storageUrl + "/" + user.profile_img ;
    return (
        <>
            {!loading ?
                !error ?
                    <div style={{ display: 'flex !important' }} className="profile-icon profile1-icon d-flex bo-rad po-rel">
                        <div className="name">
                            <span> {user.breed} </span>
                            <p> {user.name}  </p>
                        </div>
                        <div className="my-profile-img bo-rad" style={{ backgroundImage: `url("${profile_img}")` }}></div>

                        <div className="my-profile bo-rad">
                            <div className="top-my-pro d-flex gap-10px">

                                <img src={profile} alt="" className="image-50 bo-rad" />

                                <div className="info-top-my-pro">
                                    <span className="d-block"> {user.name} </span>
                                    <Link to="/profile">@{user.id} </Link>
                                </div>
                            </div>
                            <div className="mid-my-pro">
                                <ul className="prof">
                                    <li>
                                        <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="./profile">
                                            My Profile
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="bor-bott"></div>
                            <div className="bot-my-pro">
                                <ul className="prof">
                                    <li><NavLink to="profile/about">Account Sitting</NavLink></li>
                                    <li><NavLink to="/auth">Sign Out</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <p style={{fontSize:'10px',padding:'6px',color:'red'}}>
                        <b>somthing went wrong</b>
                    </p>
                :
                <HeaderProfileLoading />
            }
        </>
    )
}

export default Profile