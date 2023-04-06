
import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { mainUrl, storageUrl } from '../../API';
import profile from "./../../assets/img/profile.jpg"

function MemberItem({ member, groupId, groupInfoLoading, groupInfo }) {

    // console.log(groupInfo);

    const [sendFriendRequestLoading, setSendFriendRequestLoading] = useState(false);
    const [removeMemberLoading, setRemoveMemberLoading] = useState(false);
    let profile_img = profile;
    if (member.profile_img != null) {
        profile_img = `${storageUrl}/${member.profile_img}`;
    }

    const sendFriendRequest = async (request_to) => {
        setSendFriendRequestLoading(true);
        //get auth info
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        await axios.post(mainUrl + '/friends/request/send', { "request_to": request_to }, config)
            .then(info => {
                console.log(info.data);
            })
            .catch(err => {
            }).finally(() => {
                setSendFriendRequestLoading(false);
            });
    }
    const removeMember = async (request_to) => {
        setRemoveMemberLoading(true);
        //get auth info
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        await axios.post(mainUrl + `/group/${groupId}/members/remove`, { "user_id": member.user_id }, config)
            .then(info => {
                console.log(info.data);
            })
            .catch(err => {
                console.log(err);
            }).finally(() => {
                setRemoveMemberLoading(false);
                console.log("removeMember");
            });
    }

    return (
        <>
            <li className="d-flex gap-10px">
                <div className="info-r d-flex gap-10px">
                    <img src={profile_img} alt="" className="bo-rad" />
                    <div className="info-req flex-between flex-1">
                        <div className="desc-user-req">
                            <p>
                                <NavLink to={"/user/" + member.user_id}>
                                    {member.user_name}
                                </NavLink>
                            </p>

                            <span> {member.user_breed} </span>
                        </div>
                        <div className="date-req d-flex flex-col" style={{ textAlign: 'center', padding: '10px 20px' }}>
                            <span>
                                Joined {member.time}
                            </span>
                            {/* <span>
                            time in here
                        </span> */}
                        </div>
                    </div>
                </div>
                <div className="bott-req d-flex gap-10px">
                    {
                        groupInfo.is_admin === true ?

                            removeMemberLoading ?
                                <button className="button-error1 bot-req" style={{ opacity: '.6', cursor: 'default' }}>
                                    Remove from group&nbsp;
                                    <i className="fa-solid fa-user-slash"></i>
                                    &nbsp;
                                    <i className="fas fa-spinner fa-pulse"></i>
                                </button>
                                :
                                <button onClick={removeMember} className="button-error1 bot-req" >Remove from group&nbsp;
                                    <i className="fa-solid fa-user-slash"></i>
                                    &nbsp;&nbsp;
                                </button>
                            :
                            null
                    }

                    {
                        member.friend === -1 ?
                            !sendFriendRequestLoading ?
                                <button onClick={() => sendFriendRequest(member.user_id)} className="button-ok bot-req">
                                    Add friend&nbsp;
                                    <i className="fa-solid fa-user-plus"></i>
                                    &nbsp;
                                </button>
                                :
                                <button className="button-ok bot-req" style={{ opacity: '.6', cursor: 'default' }}>
                                    Add friend&nbsp;
                                    <i className="fa-solid fa-user-plus"></i>
                                    &nbsp;
                                    <i className="fas fa-spinner fa-pulse"></i>
                                </button>
                            :
                            member.friend === 0 ?
                                <button className="button-ok bot-req bg-warning">
                                    Cancel Friend Request&nbsp;
                                    <i className="fa-solid fa-user-plus"></i>
                                    &nbsp;
                                </button>
                                :

                                <NavLink to={`/messanger/${member.user_id}`}>
                                    <button className="button-ok bot-req">
                                        Send Message&nbsp;&nbsp;
                                        <i className="fa-solid fa-paper-plane"></i>
                                        &nbsp;
                                    </button>
                                </NavLink>


                    }


                </div>
            </li>
        </>
    )
}

export default MemberItem;