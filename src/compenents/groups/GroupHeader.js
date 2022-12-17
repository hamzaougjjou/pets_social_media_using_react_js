import React from 'react'
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class GroupHeader extends Component {
    
    constructor(props) {
        super(props);
        console.log("hello from constructor");
    }
  
    show_search(box_id = 'menu-side', box_icon = 'menu-ic-si', tranup = "translateY(3px)", trandow = "translateY(50px)") {
            if (document.getElementById(box_id).style.opacity == 0) {
                document.getElementById(box_id).style.transitionDuration = "0s";
                document.getElementById(box_id).style.zIndex = 5;
                document.getElementById(box_id).style.transitionDuration = ".3s";
                document.getElementById(box_id).style.opacity = 1;
                document.getElementById(box_id).style.transform = tranup;
                document.getElementById(box_icon).style.color = "#009ef7";
                document.getElementById(box_icon).style.backgroundColor = "#F5F8FA";
            }
            else {
                document.getElementById(box_id).style.transitionDuration = "0s";
                document.getElementById(box_id).style.opacity = 0;
                document.getElementById(box_id).style.transform = trandow;
                document.getElementById(box_icon).style.color = "#A1A5B7";
                document.getElementById(box_icon).style.backgroundColor = "#FFFFFF";
                document.getElementById(box_id).style.transitionDuration = ".6s";
                document.getElementById(box_id).style.zIndex = -1;
            }
        }
    componentDidMount() {
       console.log("hello from componentDidMount");
    }

    render() {
        return (
            <div className="icon-post-right icon-frei-right  flex-between  w-full ali-center">
                <NavLink to="/">
                    <span className="svg-icon svg-icon-1 m-0 d-flex">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1"
                                fill="currentColor"></rect>
                            <path
                                d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                fill="currentColor"></path>
                        </svg>
                    </span>
                </NavLink>
                <div className="d-flex gap-10px po-rel about-mm">
                    <div className="inp po-rel"><span className="svg-icon svg-icon-2 ms-4 po-abs center-el-hr">
                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2"
                                rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor">
                            </rect>
                            <path
                                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                fill="currentColor"></path>
                        </svg>
                    </span>
                        <input type="text" placeholder="Search Group..." />
                    </div>
                    <button className="flex-between bo-rad about-men" onClick={this.show_search} id="menu-ic-si"><span className="svg-icon svg-icon-3 m-0 d-flex">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
                            <rect x="17" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
                            <rect x="3" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
                        </svg>
                    </span>
                    </button>
                    <div className="menu-side po-abs" id="menu-side">
                        <ul className="menu-op">
                            <li className="mem-op bo-rad">New Group</li>
                            <li><a href="#" className="mem-op bo-rad">Main</a></li>
                            <li><a href="#" className="mem-op bo-rad">Setting</a></li>
                            <li><a href="#" className="mem-op bo-rad">Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default GroupHeader;
