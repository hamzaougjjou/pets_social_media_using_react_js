import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { mainUrl, storageUrl } from '../../API';
import { GroupDetailsHeaderLoading } from '../loading/Index';
import group from "./../../assets/img/group.jpg";
// Hamza ougjjou img
function GroupDetailsHeader({ groupId, groupInfoLoading, groupInfo, joined, setJoined }) {

    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================

    const [joinGroupLoading, setJoinGroupLoading] = useState(false);
    const [leaveGroupLoading, setLeaveGroupLoading] = useState(false);
    const [showPopUp, setShowPopUP] = useState(false);
    const [reqCountLoading, setReqCountLoading] = useState(false);
    const [reqCount, setReqCount] = useState(-1);
    const [postsReqCount, setPostsReqCount] = useState(-1);
    const [postsReqCountLoading, setPostsReqCountLoading] = useState(false);

    const navigate = useNavigate();
    let profile_img = group;
    if (!groupInfoLoading && groupInfo.profile_img != null)
        profile_img = storageUrl + "/" + groupInfo.profile_img;

    //join and leave group logic

    const joinGroupFunc = async () => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        setJoinGroupLoading(true);
        if (!loadingToken)
            await axios.post(`${mainUrl}/group/${groupId}/join`, null, config)
                .then(info => {
                    console.log(info.data);
                    if (info.data.success) {
                        setJoined(0);
                    }
                }).catch(err => {

                }).finally(() => {
                    setJoinGroupLoading(false)
                })
    }
    const leaveGroupBackFunc = async () => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        setLeaveGroupLoading(true);
        if (!loadingToken)
            await axios.post(`${mainUrl}/group/${groupId}/leave`, null, config)
                .then(info => {
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

    let loadRequestsFunc = () => {
        navigate("./requests")
    }
    let loadPostsRequestsFunc = () => {
        navigate("./posts/requests")
    }

    //get join group requests requests count
    const getReqCountFun = async () => {
        setReqCountLoading(true);
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        setJoinGroupLoading(true);
        if (!loadingToken)
            await axios.get(`${mainUrl}/group/${groupId}/requests/count`, config)
                .then(info => {
                    setReqCount(info.data.count);
                }).catch(err => {
                    console.log(err);
                    setReqCount(-1);
                }).finally(() => {
                    setReqCountLoading(false);
                })
    }
    const getPostsReqCountFun = async () => {
        setPostsReqCountLoading(true);
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        setJoinGroupLoading(true);
        if (!loadingToken)
            await axios.get(`${mainUrl}/group/${groupId}/posts/requests/count`, config)
                .then(info => {
                    setPostsReqCount(info.data.count);
                }).catch(err => {
                    console.log(err);
                    setPostsReqCount(-1);
                }).finally(() => {
                    setPostsReqCountLoading(false);
                })
    }

    useEffect(() => {
        //check if current user is admin
        if (groupInfo.is_admin) {
            getReqCountFun();
            getPostsReqCountFun();
            setInterval(() => {
                getReqCountFun();
                getPostsReqCountFun();
            }, 10000)
        }
    }, [groupInfo.is_admin]);


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

            <div className="photo-div main-box d-flex w-full" style={{ width: '100%' }}>
                {
                    groupInfoLoading ?
                        <GroupDetailsHeaderLoading />
                        :
                        <div className="top-profile d-flex gap-20px">
                            <div className="img-prof-media" >
                                <div className="image-profile bo-rad po-rel" style={{ backgroundImage: `url('${profile_img}')` }}>
                                    {/* <div className="green enable bo-rad-haf"></div> */}
                                </div>
                                {/* <!-- //////////////////////////////////////////////// --> */}
                            </div>
                            <div className="all-info-prof">
                                <div className="infor-profile flex-between">
                                    <div className="inf-prof-addr">
                                        <div className="my-name d-flex ali-center gap-5px">
                                            {groupInfo.name}
                                        </div>

                                        <div className="address-prof d-flex gap-5px">
                                            <span href="#" className="d-flex ali-center">

                                                {groupInfo.description}
                                            </span>
                                        </div>
                                    </div>

                                    {/* ================================================ */}


                                    <div className="button-prof button1-prof d-flex">

                                        {
                                            groupInfo.is_admin &&
                                            <button onClick={loadRequestsFunc} className="button-cancel btn-mmbrs d-flex ali-center btn-group-req">
                                                &nbsp;Requests
                                                <span className="svg-icon follow svg-icon-3 d-flex">
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                                            transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
                                                        <rect x="4.36396" y="11.364" width="16" height="2" rx="1"
                                                            fill="currentColor"></rect>
                                                    </svg>
                                                </span>

                                                {
                                                    (reqCount != 0) ?
                                                        (reqCount === -1) ?
                                                            reqCountLoading ?
                                                                null
                                                                :
                                                                reqCount > 9 ?
                                                                    <span className='group-req-count'>9<sup>+</sup></span>
                                                                    :
                                                                    <span className='group-req-count'>{reqCount}</span>
                                                            :
                                                            reqCount > 9 ?
                                                                <span className='group-req-count'>9<sup>+</sup></span>
                                                                :
                                                                <span className='group-req-count'>{reqCount}</span>
                                                        :
                                                        null
                                                }
                                            </button>
                                        }

                                        {/*======================================================== */}
                                        {
                                            !groupInfo.is_admin ?
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
                                                :
                                                groupInfo.is_admin &&
                                                <button onClick={loadPostsRequestsFunc}
                                                    className="button-cancel btn-mmbrs d-flex ali-center btn-group-req txt-center"
                                                    style={{ width: "max-content" }}>
                                                    &nbsp;posts not accepted
                                                    {
                                                        (postsReqCount != 0) ?
                                                            (postsReqCount === -1) ?
                                                                postsReqCountLoading ?
                                                                    null
                                                                    :
                                                                    postsReqCount > 9 ?
                                                                        <span className='group-req-count'>9<sup>+</sup></span>
                                                                        :
                                                                        <span className='group-req-count'>{postsReqCount}</span>
                                                                :
                                                                postsReqCount > 9 ?
                                                                    <span className='group-req-count'>9<sup>+</sup></span>
                                                                    :
                                                                    <span className='group-req-count'>{postsReqCount}</span>
                                                            :
                                                            null
                                                    }
                                                </button>
                                        }
                                        {/*======================================================== */}


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
                                        <div className="Friends-num bo-rad flex-center txt-center">
                                            <NavLink className={({ isActive }) => isActive ? "active-prof" : ''} to="./members">

                                                <span className="d-block">
                                                    {groupInfo.members_count}
                                                </span>
                                                <span>Mumbers</span>
                                            </NavLink>
                                        </div>
                                        <div className="followers bo-rad flex-center txt-center">
                                            <NavLink className={({ isActive }) => isActive ? "active-prof" : ''} to="./managers">
                                                <span className="d-block">
                                                    {groupInfo.admins_count}
                                                </span>
                                                <span>Managers</span>
                                            </NavLink>

                                        </div>
                                        <div className="Posts bo-rad flex-center txt-center">
                                            <NavLink className={({ isActive }) => isActive ? "active-prof" : ''} to="./posts">
                                                <span className="d-block">
                                                    {groupInfo.posts_count}
                                                </span>
                                                <span>Posts</span>
                                            </NavLink>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                }


                {
                    joined === 1 &&
                    <ul className="bott-prof d-flex">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-prof" : ''} to="./posts">
                                Posts
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-prof" : ''} to="./about">
                                About
                            </NavLink>
                        </li>


                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-prof" : ''} to="./members">
                                Mumbers
                            </NavLink>
                        </li>


                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-prof" : ''} to="./managers">
                                Managers
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-prof" : ''} to="./settings">
                                Settings
                            </NavLink>
                        </li>


                    </ul>
                }


            </div>
        </>
    )
}

export default GroupDetailsHeader