import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mainUrl, storageUrl } from '../../API';
import profile from "./../../assets/img/profile.jpg"

function RequestItem({ request, groupId }) {
    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================
    let profile_img = profile;
    if (request.profile_img != null) {
        profile_img = `${storageUrl}/${request.profile_img}`;
    }

    const [acceptLoading, setAcceptLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);

    let acceptReqFun = async () => {
        //get auth info
        setAcceptLoading(true);
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        if (!loadingToken)
            await axios.put(`${mainUrl}/group/${groupId}/request/accept`, { "user_id": request.user_id }, config)
                .then(info => {
                    console.log(info.data);
                    setAcceptLoading(false);
                    setIsAccepted(true)
                }).catch(() => {
                    setAcceptLoading(false);
                    alert("Somthing went wrong");
                });
    }
    const deleteReqFun = async () => {
        //get auth info
        setDeleteLoading(true);
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        if (!loadingToken)
            await axios.post(`${mainUrl}/group/${groupId}/request/delete`, { "user_id": request.user_id }, config)
                .then(info => {
                    console.log(info.data);
                    setDeleteLoading(false);
                    setIsAccepted(true);
                }).catch(() => {
                    setDeleteLoading(false);
                    alert("Somthing went wrong");
                });
    }
    return (
        <>
            {
                isAccepted ?
                    null
                    :
                    <li className="d-flex gap-10px">
                        <div className="info-r d-flex gap-10px">
                            <img src={profile_img} alt="" className="bo-rad" />
                            <div className="info-req flex-between flex-1">
                                <div className="desc-user-req">
                                    <p>
                                        <NavLink to={"/user/" + request.user_id}>
                                            {request.user_name}
                                        </NavLink>
                                    </p>

                                    <span> {request.user_breed} </span>
                                </div>
                                <div className="date-req d-flex flex-col" style={{ textAlign: 'center', padding: '10px 20px' }}>
                                    <span>
                                        {request.time}
                                    </span>
                                    {/* <span>
                            time in here
                        </span> */}
                                </div>
                            </div>
                        </div>
                        <div className="bott-req d-flex gap-10px">

                            {
                                deleteLoading ?
                                    <button className="button-error1 bot-req" style={{ opacity: '.6', cursor: 'default' }}>Deletet&nbsp;
                                        <i className="fa-solid fa-user-slash"></i>
                                        &nbsp;
                                        <i className="fas fa-spinner fa-pulse"></i>
                                    </button>
                                    :
                                    <button onClick={deleteReqFun} className="button-error1 bot-req" >Deletet&nbsp;
                                        <i className="fa-solid fa-user-slash"></i>
                                        &nbsp;&nbsp;&nbsp;
                                    </button>
                            }

                            {
                                acceptLoading ?
                                    <button className="button-ok bot-req" style={{ opacity: '.6', cursor: 'default' }}>
                                        Accept&nbsp;
                                        <i className="fa-solid fa-user-plus"></i>
                                        &nbsp;
                                        <i className="fas fa-spinner fa-pulse"></i>
                                    </button>
                                    :
                                    <button onClick={acceptReqFun} className="button-ok bot-req">
                                        Accept&nbsp;
                                        <i className="fa-solid fa-user-plus"></i>
                                        &nbsp;
                                        &nbsp;
                                        &nbsp;
                                    </button>

                            }


                        </div>
                    </li>
            }

        </>
    )
}

export default RequestItem;