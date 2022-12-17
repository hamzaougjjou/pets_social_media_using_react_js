import React from 'react'
import { NavLink } from 'react-router-dom';

function LeftAside() {
    return (
        <aside className="aside-left aside-left1">
            <ul className="first-menu">
                <li>Public</li>
                <li>
                    <NavLink to="/profile/friends">
                        <span>
                            <i className="fa-solid fa-user-group"
                                style={{ marginRight: "18px", paddingLeft: "2px" }} ></i>Friends</span><span>3546</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/groups">
                        <span><i className="fa-solid fa-users"
                            style={{ fontSize: '17px' }}></i>Groups</span><span>15</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/videos">
                        <i className="fa-solid fa-circle-play"
                            style={{ fontSize: '16px', marginRight: "21px" }}></i>
                        Videos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search">
                        <i className="fa-solid fa-magnifying-glass"
                            style={{ fontSize: '16px', marginRight: "22px" }}></i>
                        Search
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to="/videos">
                        <span>
                        <i className="fa-solid fa-user-tag"
                    style={{ fontSize: '15px', marginRight: "20px" }}></i>Tag</span><span>5</span></a></li> */}
                <li>
                    <a href="./profile.html">
                        <span>
                            <i className="fa-solid fa-star"
                                style={{ fontSize: "15px", marginRight: "24px" }}></i>Favorite</span><span>4</span>
                    </a>
                </li>
                <li>
                    <a href="./profile.html"><span>
                        <i className="fa-solid fa-bookmark"
                            style={{ fontSize: "15px", marginRight: "26px", paddingLeft: "2px" }}></i>Saved</span><span>12</span>
                    </a>
                </li>
                <li>
                    <NavLink to="/messanger">
                        <span><i className="fa-solid fa-message"
                            style={{ fontSize: '14px', marginRight: '26px' }}></i>Message</span><span>4</span>
                    </NavLink>
                </li>
            </ul>
            <ul className="socend-menu">
                <li>My Activity</li>
                <li><a href="./profile.html"><span><i className="fa-solid fa-blog"
                    style={{ fontSize: "17px", marginRight: "23px" }}></i>My Post</span><span>10</span></a>
                </li>
                <li><a href="#"><span><i className="fa-solid fa-comment"
                    style={{ fontSize: "15px", marginRight: "25px" }}></i>My
                    Comment</span><span>100</span></a></li>
                <li><a href="./freinds.html"><span><i className="fa-solid fa-user-plus"
                    style={{ fontSize: "15px", marginRight: "22px" }}></i>Follow</span><span>20</span></a>
                </li>
            </ul>
            <ul className="last-menu">
                <li>Categories</li>
                <li>
                    <NavLink to="/settings">
                        <i className="fa-solid fa-gear" style={{ fontSize: "15px", marginRight: "24px" }} >
                        </i>
                        Settings
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/help">
                        <i
                            className="fa-solid fa-circle-info"
                            style={{ fontSize: "14px", marginRight: "25px" }} ></i>Help
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}
//onClick

export default LeftAside;