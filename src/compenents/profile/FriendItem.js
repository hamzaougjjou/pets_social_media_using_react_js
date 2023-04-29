import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { mainUrl, storageUrl } from '../../API';
import profile from "./../../assets/img/profile.jpg"
import { useSelector } from 'react-redux';
function FriendItem(props) {
    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================
    let profile_img = props.friend.profile_img === null ? props.friend.profile_img : profile;
    const [showPopUp, setShowPopUP] = useState(false);
    const [deleteFriendLoading, setDeleteFriendLoading] = useState(false);
    const [hideItem, setHideItem] = useState(false);
    // console.log(props.friend);
    let user_online = false; // online or offline
    if (props.friend.last_login_sec < 50)
        user_online = true;

    const deleteFriendFunc = async () => {
        setDeleteFriendLoading(true);
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        if (!loadingToken)
            await axios.delete(`${mainUrl}/friend/${props.friend.user_id}/delete`, config)
                .then(info => {
                    console.log(info.data);

                    setShowPopUP(false);
                    setHideItem(true);
                }).catch(err => {
                    alert("Ooop somthing went wrong");
                }).finally(() => {
                    setDeleteFriendLoading(true);
                })
    }
    const deleteFriendUIfunc = () => {
        setShowPopUP(true);
    }

    return (

        <>
            {
                hideItem ?
                    null
                    :
                    <>
                        {
                            showPopUp ?
                                <div id="group-item-popup" className="group-item-overlay" >
                                    <div className="group-item-popup" >
                                        <h2> Delete Friend </h2>
                                        <div className="content">
                                            Are you sure you want Delete Friend ?
                                        </div>
                                        <div className='group-item-popup-btns flex-between w-full'>
                                            <button onClick={deleteFriendFunc} className="button-cancel bot-req bot-fr bot-fr1 flex-center btn-err">
                                                Delete friend&nbsp;

                                                {
                                                    deleteFriendLoading ?
                                                        <i style={{ color: '#fff' }} className="fas fa-spinner fa-pulse"></i>
                                                        :
                                                        <i className="fa-solid fa-user-slash"></i>
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
                        <div className="box-freind main-box d-flex">
                            <div className="img-box-freind po-rel">
                                {
                                    profile_img != null ?
                                        <div style={{ backgroundImage: `URL('${storageUrl}/${props.friend.profile_img}')` }} className="bo-rad-haf profile-friend-img"></div>

                                        :
                                        <div style={{ backgroundImage: `url("${profile}")` }} className="bo-rad-haf profile-friend-img" ></div>
                                }
                                {
                                    user_online ? <div className="enable bo-rad-haf enable-fr"></div>
                                        :
                                        ''
                                }
                            </div>
                            <div className="info-box-freind d-flex">
                                <Link to={"/user/" + props.friend.user_id}> {props.friend.name} </Link>
                                <span> {props.friend.breed_name} </span>
                            </div>
                            <div className="follow-box-freind d-flex gap-10px">
                                <div className="first-follow bor-dash bo-rad flex-center">
                                    <span>{props.friend.friends_count}</span>
                                    <span>Friends</span>
                                </div>
                                <div className="first-follow bor-dash bo-rad flex-center">
                                    <span>{props.friend.posts_count}</span>
                                    <span>Posts</span>
                                </div>
                            </div>
                            <div className="button-box-freind flex-between w-full">

                                <button onClick={deleteFriendUIfunc} className="button-cancel bot-req bot-fr bot-fr1 flex-center btn-err">
                                    Delete&nbsp;<i className="fa-solid fa-user-slash"></i>
                                </button>
                                <Link to={`/messanger/${props.friend.user_id}`}>
                                    <button className="button-ok bot-req bot-fr">
                                        Send Message&nbsp;&nbsp;&nbsp;
                                        <i className="fa-solid fa-paper-plane"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
            }


        </>

    )
}

export default FriendItem