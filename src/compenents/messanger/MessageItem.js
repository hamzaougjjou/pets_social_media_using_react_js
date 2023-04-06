import React from 'react'
import { storageUrl } from '../../API';
import profile from "./../../assets/img/profile.jpg";

function MessageItem1(props) {
    let user_profile = props.user.profile_img === null ? profile
        : storageUrl + "/" + props.user.profile_img;
    return (
        <div className="message-text-ri">
            <div className="info-message info2 d-flex ali-center">
                <div style={{ backgroundImage: `url("${user_profile}")` }} className="msg-user-profile"></div>
                <span>{props.user.name}</span>
                <span>&nbsp;&nbsp; { props.message.time } </span>
            </div>
            <div className="message-box2 bo-rad">
                {props.message.content}
            </div>
        </div>
    )
}

function MessageItem2(props) {
    let user_profile = props.user.profile_img === null ? profile
        : storageUrl + "/" + props.user.profile_img;
    return (

        <div className="message-text">
            <div className="info-message d-flex ali-center">
                <div style={{ backgroundImage: `url("${user_profile}")` }} className="msg-user-profile"></div>
                <span>{props.user.name}</span>
                <span>&nbsp;&nbsp; { props.message.time } </span>
            </div>
            <div className="message-box bo-rad">
                {props.message.content}
            </div>
        </div>

    )
}

export { MessageItem1, MessageItem2 }