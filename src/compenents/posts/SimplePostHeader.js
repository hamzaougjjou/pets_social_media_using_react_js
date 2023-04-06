import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import profile from "./../../assets/img/profile.jpg"

function SimplePostHeader({ user , postId }) {
    const menuSide = useRef();

    let showMenu = () => {
        if (menuSide.current.style.opacity == 0) {
            menuSide.current.style.transitionDuration = "0s";
            menuSide.current.style.zIndex = 2;
            menuSide.current.style.transitionDuration = "0.5s";
            menuSide.current.style.opacity = 1;
            menuSide.current.style.transform = "translateY(5px)";
        }
        else {
            menuSide.current.style.transitionDuration = "0s";
            menuSide.current.style.opacity = 0;
            menuSide.current.style.transform = "translateY(50px)";
            menuSide.current.style.transitionDuration = "0.6s";
            menuSide.current.style.zIndex = -1;
        }
    }

    return (
        <div className="profile-person flex-between w-full" >
            <section className='flex-between w-full'>
                <NavLink to={"/post/" + postId} className="w-full">
                    <div className=" d-flex ali-center gap-10px w-full">
                        <img src={profile} alt="" className="image-fr bo-rad" />
                        <div className="name-date">
                            {/* <Link to={"/user/" + user.id}> */}
                                <span className="d-block fo-name-per">{user.name}</span>
                            {/* </Link> */}
                            <span className="fo-bot-na">
                                {user.time}
                            </span>
                        </div>
                    </div>
                </NavLink>

                <div className="menu-post flex-center bo-rad po-rel" id="menu-ic-si">
                    <span className="svg-icon svg-icon-3 m-0 d-flex ali-center" onClick={showMenu}>
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
                    <div className="menu-side po-abs" ref={menuSide}>
                        <ul className="menu-op">
                            <li className="mem-op bo-rad" >
                                <i className="fa-solid fa-bookmark"></i>&nbsp;&nbsp;&nbsp;Save
                            </li>
                            <li className="mem-op bo-rad">
                                <i className="fa-solid fa-eye-slash"></i>&nbsp;&nbsp;Hidden
                            </li>
                            <li className="mem-op bo-rad">
                                <i className="fa-solid fa-star"></i>&nbsp;&nbsp;Favorite</li>
                            <li className="mem-op bo-rad">
                                <i className="fa-solid fa-ban"></i>&nbsp;&nbsp;Block
                            </li>
                            <li className="mem-op bo-rad">
                                <i className="fa-solid fa-flag"></i>&nbsp;&nbsp;Reporting
                            </li>
                        </ul>

                    </div>
                </div>



            </section>


        </div>
    )
}

export default SimplePostHeader