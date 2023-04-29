import React, { useState } from 'react'
import profile from "./../../assets/img/profile.jpg"
import { storageUrl } from '../../API';
import { mainUrl } from '../../API';
import axios from 'axios';
import { useSelector } from 'react-redux';
function RequestItem(props) {

    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================

    let profile_img = props.data.profile_img === null ? profile : storageUrl + "/" + props.data.profile_img;
    let dateTime = new Date(props.data.sent_at.trim())
    var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    const [acceptLoading, setAcceptLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    let acceptRedFun = async (req_id) => {
        //friends/requests/{id}/accept
        //get auth info
        setAcceptLoading(true);
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        if (!loadingToken)
            await axios.put(`${mainUrl}/friends/requests/${req_id}/accept`, null, config)
                .then(info => {
                    console.log(info.data);
                    setAcceptLoading(false);
                }).catch((err) => {
                    console.log("error");
                    console.log(err);
                    setAcceptLoading(false);
                });
    }

    let deleteRedFun = (req_id) => {
        setDeleteLoading(true);
        console.log("delete", req_id);
    }

    return (
        <li className="d-flex gap-10px">
            <div className="info-r d-flex gap-10px">
                <img src={profile_img} alt="" className="bo-rad" />
                <div className="info-req flex-between flex-1">
                    <div className="desc-user-req">
                        <p>
                            {props.data.name}
                        </p>
                        <span>{props.data.breed_name}</span>
                    </div>
                    <div className="date-req d-flex flex-col" style={{ textAlign: 'center' }}>
                        <span>
                            {dateTime.getDay() + '-' + months[dateTime.getMonth()] + "-" + dateTime.getFullYear()}
                        </span>
                        <span>
                            {
                                dateTime.getHours() < 10 ? "0" + dateTime.getHours() : "p" + dateTime.getHours()
                            }
                            :
                            {
                                dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes()
                            }
                        </span>
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
                        <button className="button-error1 bot-req" onClick={() => deleteRedFun(props.data.request_id)}>Deletet&nbsp;<i
                            className="fa-solid fa-user-slash"></i>
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
                        <button className="button-ok bot-req" onClick={() => acceptRedFun(props.data.request_id)}>
                            &nbsp;&nbsp;Accept&nbsp;&nbsp;
                            <i className="fa-solid fa-user-plus"></i>&nbsp;
                        </button>
                }

            </div>
        </li>
    )
}

export default RequestItem