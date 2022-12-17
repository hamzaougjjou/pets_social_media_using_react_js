import React, { Component } from 'react'
import "./../../../node_modules/video-react/dist/video-react.css"; // import css
// import { Player } from 'video-react';
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react';

function VideoItem() {
    return (
        <div className="posts-container">

            <div className="post-image d-flex bor bo-rad">
                <div className="top-post d-flex bor-bott-col">
                    <div className="left-post d-flex">
                        <div className="profile-person flex-between">
                            <div className=" d-flex ali-center gap-10px">

                                <img src="/image/profile.jpg" alt="" className="image-fr bo-rad" />

                                <div className="name-date">
                                    <span className="d-block fo-name-per">Hamza ougjjou</span>
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
                        <div className="content-post">
                            <div className="fo-pos">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Corporis,
                                atque assumenda non quis dignissimos aperiam hic consectetur.
                                Praesentium accusamus est odit architecto saepe repellendus.
                                Odit quod expedita quibusdam. Consequuntur, commodi.</div>
                            <div className="bo-rad">

                                <Player poster="/image/cat1.jpg">
                                    <source src="/videos/video1.mp4" />

                                    <ControlBar>
                                        <ReplayControl seconds={10} order={1.1} />
                                        <ForwardControl seconds={30} order={1.2} />
                                        <VolumeMenuButton inabled />
                                    </ControlBar>
                                </Player>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-post">
                    <div className="like-comm d-flex">
                        <div className="like flex-center bo-rad">
                            <div className="tooltip bo-rad flex-center">50.3K</div>
                            <i className="fa-solid fa-thumbs-up"></i>
                        </div>
                        <div className="comment-post flex-center bo-rad" >
                            <div className="tooltip bo-rad flex-center">10.4K</div>
                            <i className="fa-solid fa-comment"></i>
                        </div>
                        <div className="shar flex-center bo-rad">
                            <div className="tooltip bo-rad flex-center">5.8K</div>
                            <i className="fa-solid fa-share-from-square"></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="line-bott"></div> */}

        </div>
    )
}

export default VideoItem