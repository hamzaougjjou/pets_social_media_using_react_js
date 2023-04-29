import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function LeftAside(props) {

    // console.log('====================================');
    // console.log('somthing ... ' , props );
    // console.log('====================================');

    const { loading, error, friends } = useSelector(state => state.getFriends);
    const userInfo = useSelector(state => state.getUser);
    let leftSideContainet = useRef();

    if(props.leftAsideShowState.leftAsideShow){
        leftSideContainet.current.style.display = "block";
        leftSideContainet.current.style.animationDirection= "alternate";
        // console.log( props.leftAsideShowState.leftAsideShow );
    }

    // let hideMenuFun =  ()=>{
        
    //     leftSideContainet.current.style.animationDirection= "reverse";
    //     leftSideContainet.current.style.animationName = "leftSideContainer";
    //     leftSideContainet.current.style.animationDuration = "0.5s";
    //     setTimeout(() => {
    //          leftSideContainet.current.style.display = "none";
    //           props.leftAsideShowState.setLeftAsideShow( false );
    //     }, 500);
    // }

    return (
        <div className="left-side-container" ref={leftSideContainet} >
            <aside className="aside-left aside-left1">
                <ul className="first-menu">
                    <li>Public</li>
                    <li>
                        <NavLink to="/profile/friends">
                            <span>
                                <i className="fa-solid fa-user-group" style={{ marginRight: "18px", paddingLeft: "2px" }}>
                                </i>
                                Friends
                            </span>
                            {
                                !loading && !error ?
                                    <span> {friends.length} </span>
                                    :
                                    <span className="fas fa-spinner fa-pulse" style={{ padding: "0px" }}>
                                        {/* <i className="fas fa-spinner fa-pulse"></i> */}
                                    </span>
                            }

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
                    <li><NavLink to="./profile/posts"><span><i className="fa-solid fa-blog"
                        style={{ fontSize: "17px", marginRight: "23px" }}></i>My Post</span>

                        {
                            !userInfo.loading && !userInfo.error ?
                                <span> {userInfo.user.posts_count} </span>
                                :
                                <span className="fas fa-spinner fa-pulse" style={{ padding: "0px" }}>
                                    {/* <i className="fas fa-spinner fa-pulse"></i> */}
                                </span>
                        }

                    </NavLink>
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
        </div>
    )
}
//onClick

export default LeftAside;