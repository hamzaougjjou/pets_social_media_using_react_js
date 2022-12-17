import React from 'react'
import { NavLink } from 'react-router-dom';
// Hamza ougjjou img
function GroupDetailsHeader() {
    let activeLink = "active-prof";
    let normalLink = "";
    return (
        <div className="photo-div main-box d-flex">
            <div className="top-profile d-flex gap-20px">
                <div className="img-prof-media" >
                    <div className="image-profile bo-rad po-rel" style={{ backgroundImage: "url('./../image/profile.jpg')" }}>
                        {/* <div className="green enable bo-rad-haf"></div> */}
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
                            Edit Profile
                        </button>
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
                            <div className="my-name d-flex ali-center gap-5px">
                                Cats group officiel
                            </div>

                            <div className="address-prof d-flex gap-5px">
                                <span href="#" className="d-flex ali-center">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex neque rerum voluptas
                                    repellendus ullam et distinctio incidunt sint quo voluptates, consequuntur quisquam,
                                    a rem consectetur esse ea, voluptatum eos sed excepturi error! Eligendi numquam mollitia
                                    nesciunt sint repellendus ea veniam, distinctio blanditiis dolore molestias
                                    vel dolor repudiandae eos ipsum magni recusandae hic in iusto debitis?
                                </span>
                            </div>
                        </div>

                        {/* ================================================ */}
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
                                        <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                            transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
                                        <rect x="4.36396" y="11.364" width="16" height="2" rx="1"
                                            fill="currentColor"></rect>
                                    </svg>
                                </span>
                                Join Group</button>
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
                        {/* ================================================ */}
                    </div>
                    <div className="follow-info flex-between">
                        <div className="number d-flex gap-20px">
                            <div className="Friends-num bo-rad flex-center">
                                <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="./mumbers">

                                    <span className="d-block">3.6K</span>
                                    <span>Mumbers</span>
                                </NavLink>

                            </div>
                            <div className="followers bo-rad flex-center">
                                <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="./managers">
                                    <span className="d-block">22.8K</span>
                                    <span>Managers</span>
                                </NavLink>

                            </div>
                            <div className="Posts bo-rad flex-center">
                                <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="./posts">
                                    <span className="d-block">20</span>
                                    <span>Posts</span>
                                </NavLink>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ul className="bott-prof d-flex">

                <li>
                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="./posts">
                        Posts
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="./about">
                        About
                    </NavLink>
                </li>


                <li>
                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="./mumbers">
                        Mumbers
                    </NavLink>
                </li>


                <li>
                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="./managers">
                        Managers
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="./settings">
                        Settings
                    </NavLink>
                </li>


            </ul>
        </div>
    )
}

export default GroupDetailsHeader