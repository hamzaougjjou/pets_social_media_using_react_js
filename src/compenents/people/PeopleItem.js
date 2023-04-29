import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { mainUrl, storageUrl } from '../../API';
import profile from "./../../assets/img/profile.jpg"

function PeopleItem({ user }) {
    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================
    // console.log(user.friend_status);
    let profile_img = user.profile_img === null ? profile : user.profile_img;
    //friends/request/send
    const [sendReqLoading, setSendReqLoading] = useState(false);
    const [error, setError] = useState(false);
    const [frientStatus, setFriendStatus] = useState(user.friend_status);
    const [cancelLoading, setCancelLoading] = useState(false);


    const sendFriendRequest = async () => {
        setSendReqLoading(true);
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        if (!loadingToken)
            await axios.post(mainUrl + '/friends/request/send', { "request_to": user.id }, config)
                .then(info => {
                    setFriendStatus(0);
                    setError(false);
                })
                .catch(err => {
                    setError(true);
                }).finally(() => {
                    setSendReqLoading(false);
                });
    }


    const cancelFriendReq = async () => {
        //get auth info
        setCancelLoading(true);
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        if (!loadingToken)
            await axios.delete(mainUrl + `/friend/${user.id}/delete`, config)
                .then(info => {
                    setFriendStatus(-1);
                })
                .catch(err => {
                    // console.log(err);
                }).finally(() => {
                    setCancelLoading(false);
                })
    }

    return (
        <div className="box-freind main-box d-flex" >
            <div className="img-box-freind po-rel">
                <div style={{ backgroundImage: `url('${storageUrl}/${profile_img}')` }} className="bo-rad-haf profile-friend-img"></div>
                {/* <div className="enable bo-rad-haf enable-fr"></div> */}
            </div>
            <div className="info-box-freind d-flex">
                <Link to={"/user/" + user.id}>
                    {user.name}
                </Link>
                <span>
                    {
                        user.breed_name
                    }
                    {
                        frientStatus === 1 && <span>&nbsp;&nbsp;(Friend)</span>
                    }
                </span>
            </div>
            <div className="follow-box-freind d-flex gap-10px">
                <div className="first-follow bor-dash bo-rad flex-center">
                    <span>{user.friends_count}</span>
                    <span>Friends</span>
                </div>
                <div className="first-follow bor-dash bo-rad flex-center">
                    <span>
                        {user.posts_count}
                    </span>
                    <span>Posts</span>
                </div>
            </div>
            <div className="button-box-freind flex-between w-full">

                {
                    (frientStatus === -1) &&
                    <>
                        {
                            sendReqLoading ?
                                <button className="button-ok bot-req bot-fr bot-gro" style={{ opacity: '0.5' }}>
                                    Add friend&nbsp;
                                    <i className="fas fa-spinner fa-pulse"></i>
                                </button>
                                :
                                <button onClick={sendFriendRequest} className="button-ok bot-req bot-fr bot-gro">
                                    Add friend&nbsp;
                                    <i className="fa-solid fa-plus"></i>
                                </button>


                        }
                    </>

                }

                {
                    (frientStatus === 0) &&
                    <>
                        {
                            cancelLoading ?
                                <button className="button-ok bot-req bot-fr bot-gro bg-warning" style={{ opacity: '0.5' }}>
                                    cancel Friend request&nbsp;
                                    <i className="fas fa-spinner fa-pulse"></i>
                                </button>
                                :
                                <button onClick={cancelFriendReq} className="button-ok bot-req bot-fr bot-gro bg-warning">
                                    cancel Friend request&nbsp;
                                    <i className="fa-solid fa-user-slash"></i>
                                </button>
                        }

                    </>
                }

                {
                    (frientStatus === 1) &&
                    <Link to={`/messanger/${user.id}`}>
                        <button className="button-ok bot-req bot-fr">
                            Send Message&nbsp;&nbsp;&nbsp;
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </Link>
                }


            </div>
        </div>

    )
}

export default PeopleItem