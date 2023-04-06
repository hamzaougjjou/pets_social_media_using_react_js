import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { mainUrl, storageUrl } from '../../API';
import profile from "./../../assets/img/profile.jpg"

function PeopleItem({ user }) {
    // console.log(user);
    let profile_img = user.profile_img === null ? profile : user.profile_img;
    //friends/request/send
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [reqSend, setReqSend] = useState(false);

    const sendFriendRequest = async () => {
        setLoading(true);
        //get auth info
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        await axios.post(mainUrl + '/friends/request/send', { "request_to": user.id }, config)
            .then(info => {
                if (info.data.success === true) {
                    setReqSend(true);
                }
                setLoading(false);
                setError(false);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
            })
    }

    const [cancelLoading, setCancelLoading] = useState(false);
    const [reqCanceled, setReqCanceled] = useState(false);
    const cancelFriendReq = async () => {
        //get auth info
        setCancelLoading(true);
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        await axios.delete(mainUrl + `/friend/${user.id}/delete`, config)
            .then(info => {
                console.log(info.data);
                if (info.data.success === true) {
                    setReqCanceled(true);
                }
            })
            .catch(err => {
                console.log(err);
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
                        user.friend_status === 1 && <span>&nbsp;&nbsp;(Friend)</span>
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
                {/* <button className="button-cancel bot-req bot-fr bot-fr1">
                    Delete&nbsp;
                    <i className="fa-solid fa-user-slash"></i>
                </button> */}
                {
                    user.friend_status === -1 ?
                        <>
                            {
                                reqSend ?
                                    <button onClick={cancelFriendReq} className="button-ok bot-req bot-fr bot-gro bg-warning">
                                        cancel Friend request&nbsp;
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                    :
                                    <>

                                        {
                                            loading ?
                                                <button className="button-ok bot-req bot-fr" style={{ opacity: '0.5' }}>
                                                    Add friend&nbsp;
                                                    <i className="fa-solid fa-user-plus"></i>
                                                </button>
                                                :
                                                <button className="button-ok bot-req bot-fr" onClick={() => sendFriendRequest()}>
                                                    Add friend&nbsp;
                                                    <i className="fa-solid fa-user-plus"></i>
                                                </button>
                                        }

                                    </>

                            }

                        </>
                        :
                        <>
                            {
                                user.friend_status === 0 ?
                                    <>
                                        {
                                            !cancelLoading ?
                                                <>
                                                    {
                                                        reqCanceled ?
                                                            <button className="button-ok bot-req bot-fr" onClick={sendFriendRequest}>
                                                                Add friend&nbsp;
                                                                <i className="fa-solid fa-user-plus"></i>
                                                            </button>
                                                            :
                                                            <button className="button-ok bot-req bot-fr bot-gro bg-warning" style={{ opacity: "0.5" }}>
                                                                cancel Friend request&nbsp;
                                                                <i className="fa-solid fa-plus"></i>
                                                            </button>
                                                    }
                                                </>

                                                :

                                                <button onClick={cancelFriendReq} className="button-ok bot-req bot-fr bot-gro bg-warning">
                                                    cancel Friend request&nbsp;
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                        }

                                    </>
                                    :
                                    <Link to={`/messanger/${user.id}`}>
                                        <button className="button-ok bot-req bot-fr">
                                            Send Message&nbsp;&nbsp;&nbsp;
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </button>
                                    </Link>
                            }
                        </>

                }

            </div>
        </div>

    )
}

export default PeopleItem