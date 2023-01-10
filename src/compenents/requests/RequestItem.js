import React from 'react'
import profile from "./../../assets/img/profile.jpg"

function RequestItem(props) {
    // { userId: '234234', userProfile: "./image/image1.jpg", userName: 'Karina Clark', userType: 'Marketing Manager', reqDate: '10 Mar 2022', reqTime: "9:23 pm" },
    return (
        <li className="d-flex gap-10px">
            <div className="info-r d-flex gap-10px">
                <img src={profile} alt="" className="bo-rad" />
                <div className="info-req flex-between flex-1">
                    <div className="desc-user-req">
                        <p>
                            {props.data.userName}
                        </p>
                        <span>{props.data.userType}</span>
                    </div>
                    <div className="date-req d-flex flex-col">
                        <span>
                            {props.data.reqDate} ,</span>
                        <span>
                            {props.data.reqTime}
                        </span>
                    </div>
                </div>
            </div>
            <div className="bott-req d-flex gap-10px">
                <button className="button-error1 bot-req">Deletet&nbsp;<i
                    className="fa-solid fa-user-slash"></i></button>
                <button className="button-ok bot-req">Accept&nbsp;<i
                    className="fa-solid fa-user-plus"></i></button>
            </div>
        </li>
    )
}

export default RequestItem