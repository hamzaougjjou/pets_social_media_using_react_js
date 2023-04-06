import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import profile from "./../../assets/img/profile.jpg"
import cat1 from "./../../assets/img/cat1.jpg"
import { mainUrl, storageUrl } from '../../API'
import axios from 'axios'

import "./../../assets/css/popUp.css"
import { LoadingSpinner } from 'video-react'

function GroupItem({ group }) {
    const [joinGroupLoading, setJoinGroupLoading] = useState(false);
    const [leaveGroupLoading, setLeaveGroupLoading] = useState(false);
    const [showPopUp, setShowPopUP] = useState(false);
    const [joined, setJoined] = useState(group.joined);
    // const popUpContnent = useRef()
    // const popUpContainer = useRef()


    const joinGroupFunc = async () => {
        ///group/{
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        setJoinGroupLoading(true);
        await axios.post(`${mainUrl}/group/${group.id}/join`, null, config)
            .then(info => {
                console.log(info.data);
                if (info.data.success) {
                    setJoined(0);
                }
            }).catch(err => {
                alert("Ooop somthing went wrong");
            }).finally(() => {
                setJoinGroupLoading(false)
            })
    }
    const leaveGroupBackFunc = async () => {
        ///group/{
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        setLeaveGroupLoading(true);
        await axios.post(`${mainUrl}/group/${group.id}/leave`, null, config)
            .then(info => {
                console.log(info.data);
                setShowPopUP(false);
                setJoined(-1);
            }).catch(err => {

            }).finally(() => {
                setLeaveGroupLoading(false)
            })
    } //leave a group from db func

    const leaveGroupUiFunc = () => {
        setShowPopUP(true);
    }



    return (
        <>
            {
                showPopUp ?
                    <div id="group-item-popup" className="group-item-overlay" >
                        <div className="group-item-popup" >
                            <h2> leave a group </h2>
                            <div className="content">
                                Are you sure you want leave a group ?
                            </div>
                            <div className='group-item-popup-btns flex-between w-full'>
                                <button onClick={leaveGroupBackFunc} className="button-cancel bot-req bot-fr bot-fr1 flex-center btn-err">
                                    Leave group&nbsp;

                                    {
                                        leaveGroupLoading ?
                                            <i style={{ color: '#fff' }} className="fas fa-spinner fa-pulse"></i>
                                            :
                                            <span className="svg-icon svg-icon-2 m-0 d-flex">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.3" width="12" height="2" rx="1" transform="matrix(-1 0 0 1 15.5 11)" fill="currentColor"></rect>
                                                    <path d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z" fill="currentColor"></path>
                                                    <path d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                    }

                                </button>
                                <button onClick={() => setShowPopUP(false)} className="button-ok bot-req bot-fr bot-gro">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }


            <div className="box-freind box-group main-box d-flex">
                <div className="img-box-freind img-box-group flex-between w-full">
                    <div className="img-group">
                        <img src={`${storageUrl}/${group.profile_img}`} alt="" className="bo-rad" />
                    </div>
                    <div className="type-group">Cats</div>
                </div>
                <NavLink to={`/group/${group.id}`} className='group-link'>
                    <div className="info-box-freind info-box-group d-flex">
                        <p> {group.name} </p>
                        <span style={{ minHeight: "50px" }}>
                            {
                                group.description.length > 100 ?
                                    group.description.slice(0, 101) + " ..."
                                    :
                                    group.description

                            }
                        </span>
                    </div>
                </NavLink>
                <div className="follow-box-freind d-flex gap-10px w-full">
                    <div className="first-follow first-group bor-dash bo-rad flex-center">
                        <span>
                            {
                                group.members_count
                            }
                        </span>
                        <span>Members</span>
                    </div>
                    <div className="first-follow first-group bor-dash bo-rad flex-center">
                        <span>
                            {group.admins_count}
                        </span>
                        <span>Managers</span>
                    </div>
                </div>
                {/* <div className="prog-group w-full bo-rad">
                    <span style={{ width: "50%" }} className="bo-rad"></span>
                </div> */}
                <div className="member-group d-flex w-full">
                    <div><img src={profile} alt="" className="image-fr bo-rad-haf" /></div>
                    <div><img src={profile} alt="" className="image-fr bo-rad-haf" /></div>
                    <div><img src={profile} alt="" className="image-fr bo-rad-haf" /></div>
                    <div><img src={profile} alt="" className="image-fr bo-rad-haf" /></div>
                    <div><img src={profile} alt="" className="image-fr bo-rad-haf" /></div>
                    <div className="num-memb flex-center bo-rad-haf">+15</div>
                </div>
                <div className="button-box-freind flex-between w-full">
                    {
                        (joined == 1) ?
                            <button onClick={leaveGroupUiFunc} className="button-cancel bot-req bot-fr bot-fr1 flex-center btn-err">
                                Leave&nbsp;
                                <span className="svg-icon svg-icon-2 m-0 d-flex">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.3" width="12" height="2" rx="1" transform="matrix(-1 0 0 1 15.5 11)" fill="currentColor"></rect>
                                        <path d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z" fill="currentColor"></path>
                                        <path d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </button>
                            :
                            (joined === -1) ?
                                <button onClick={joinGroupFunc} className="button-ok bot-req bot-fr bot-gro">
                                    Join Group&nbsp;
                                    {
                                        joinGroupLoading ?
                                            <i style={{ color: '#fff' }} className="fas fa-spinner fa-pulse"></i>
                                            :
                                            <i className="fa-solid fa-plus"></i>
                                    }

                                </button>
                                :
                                <button onClick={leaveGroupUiFunc} className="button-ok bot-req bot-fr bot-gro bg-warning">
                                    cancel join Group&nbsp;
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                    }
                </div>
            </div>
        </>

    )
}

export default GroupItem