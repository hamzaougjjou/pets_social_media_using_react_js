import React from 'react'
import { NavLink } from 'react-router-dom';
import { storageUrl } from '../../API';
import profile from "./../../assets/img/profile.jpg"

function AcceptFriendNotic({ notic }) {
    let profile_img = notic.user.profile_img === null ? profile : storageUrl + "/" + notic.user.profile_img;
    let isReadColor = notic.is_read === 1 || notic.is_read === true ? "black" : "#009ef7";
    return (
        <NavLink to={`/user/${notic.user.id}`} style={{ color: isReadColor }}>
            <div className="notice-text">
                <div className="comm-notic d-flex ali-center">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500 trans">
                        <i className="fa-solid fa-user-plus"
                            style={{ fontSize: "15px", margin: "3px 0 0 3px" }}></i>
                    </span>
                    <div className="txt-notic">
                        <span>
                            <span>{notic.user.name} </span>
                            <span>Accept your friend Request</span>
                        </span>
                        <div className="info-notic d-flex ali-center gap-5px">
                            <span>{notic.time}</span>
                            <img src={profile_img}
                                style={{
                                    objectFit: "cover",
                                    width: '30px',
                                    height: "30px",
                                    borderRadius: "50%"
                                }}
                                alt="" className="bo-rad-haf image-fr-30" />
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default AcceptFriendNotic