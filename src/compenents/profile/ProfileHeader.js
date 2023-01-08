import React from 'react'
import { NavLink } from 'react-router-dom';
// Hamza ougjjou img
function ProfileHeader() {
    let activeLink = "active-prof";
    let normalLink = "";
    return (
        <div className="photo-div main-box d-flex">
            <div className="top-profile d-flex gap-20px">
                <div className="img-prof-media" style={{background:"url('./image/pprofile.jpeg') "}}>
                    <div className="image-profile bo-rad po-rel">
                        <div className="green enable bo-rad-haf"></div>
                    </div>
                    {/* <!-- ////////////////////in media////////////////// --> style*/}
                    <div className="button-prof button2-prof d-flex">
                        <button className="button-cancel d-flex ali-center"><span
                            className="svg-icon follow svg-icon-3 d-flex">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                    transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1"
                                    fill="currentColor"></rect>
                            </svg>
                        </span>&nbsp;Follow</button>
                        <button className="button-ok d-flex ali-center">
                            <span className="svg-icon svg-icon-2 m-0 d-flex">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" fillRule="evenodd" clipRule="evenodd"
                                        d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>
                            Edit Profile</button>
                        <button className="button-cancel">
                            <span className="svg-icon svg-icon-3 m-0 d-flex">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="10" y="10" width="4" height="4" rx="2" fill="currentColor">
                                    </rect>
                                    <rect x="17" y="10" width="4" height="4" rx="2" fill="currentColor">
                                    </rect>
                                    <rect x="3" y="10" width="4" height="4" rx="2" fill="currentColor">
                                    </rect>
                                </svg>
                            </span>
                        </button>
                    </div>
                    {/* <!-- //////////////////////////////////////////////// --> */}
                </div>
                <div className="all-info-prof">
                    <div className="infor-profile flex-between">
                        <div className="inf-prof-addr">
                            <div className="my-name d-flex ali-center gap-5px">Hamza ougjjou
                                <span className="svg-icon svg-icon-1 svg-icon-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z"
                                            fill="white"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="address-prof d-flex gap-5px">
                                <span className="d-flex ali-center"><span className="svg-icon svg-icon-4 me-1">
                                    <svg width="17" height="17" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3"
                                            d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                                            fill="currentColor"></path>
                                        <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor">
                                        </rect>
                                    </svg>
                                </span>Developer</span>
                                <span className="d-flex ali-center">
                                    <span className="svg-icon svg-icon-4 me-1">
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3"
                                                d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    Taiz, Yemen Area</span>
                                <span className="d-flex ali-center">
                                    <span className="svg-icon svg-icon-4 me-1">
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3"
                                                d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    Alazy@gmail.com</span>
                            </div>
                        </div>
                        <div className="button-prof button1-prof d-flex">
                            <button className="button-cancel d-flex ali-center"><span
                                className="svg-icon follow svg-icon-3 d-flex">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                        transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
                                    <rect x="4.36396" y="11.364" width="16" height="2" rx="1"
                                        fill="currentColor"></rect>
                                </svg>
                            </span>&nbsp;Follow</button>
                            <button className="button-ok d-flex ali-center">
                                <span className="svg-icon svg-icon-2 m-0 d-flex">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd"
                                            d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span>
                                Edit Profile</button>
                            <button className="button-cancel">
                                <span className="svg-icon svg-icon-3 m-0 d-flex">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="10" y="10" width="4" height="4" rx="2" fill="currentColor">
                                        </rect>
                                        <rect x="17" y="10" width="4" height="4" rx="2" fill="currentColor">
                                        </rect>
                                        <rect x="3" y="10" width="4" height="4" rx="2" fill="currentColor">
                                        </rect>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="follow-info flex-between">
                        <div className="number d-flex gap-20px">
                            <div className="Friends-num bo-rad flex-center">
                                <span className="d-block">3.6K</span>
                                <span>Friends</span>
                            </div>
                            <div className="followers bo-rad flex-center">
                                <span className="d-block">22.8K</span>
                                <span>Followers</span>
                            </div>
                            <div className="Posts bo-rad flex-center">
                                <span className="d-block">20</span>
                                <span>Posts</span>
                            </div>
                        </div>
                        <div className="Profile-Compleation d-flex">
                            <span className="flex-between">Profile Compleation
                                <span>50%</span>
                            </span>
                            <div className="prog-profile bo-rad">
                                <span style={{ width: "50%" }} className="bo-rad d-block"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="bott-prof d-flex">

                <li> 
                <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="posts">
                    Posts
                </NavLink>
                </li>

                <li>
                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="about">
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="friends">
                        Friends
                    </NavLink>
                </li>


                <li>
                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="groups">
                        Groups
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="files">
                        Files
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default ProfileHeader