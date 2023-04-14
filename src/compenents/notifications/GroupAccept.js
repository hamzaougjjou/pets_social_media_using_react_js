import React from 'react'
import { NavLink } from 'react-router-dom';
import { storageUrl } from '../../API';
import group from "./../../assets/img/group.jpg";

function GroupAccept({ notic }) {
    let profile_img = notic.group.profile_img === null ? group : storageUrl + "/" + notic.group.profile_img;
    let isReadColor = notic.is_read === 1 || notic.is_read === true ? "black" : "#009ef7";
    return (
        <NavLink to={`/group/${notic.content.group_id}`} style={{ color: isReadColor }}>
            <div className="notice-text">
                <div className="comm-notic d-flex ali-center">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                        <i className="fa-solid fa-users">
                        </i>
                    </span>
                    <div className="txt-notic">
                        <span>
                            your request to join <b> {notic.group.name}</b> accepted
                        </span>
                        <div className="info-notic d-flex ali-center gap-5px">
                            <span> {notic.time} </span>
                            <img src={profile_img}
                                style={{
                                    objectFit: "cover",
                                    width: '30px',
                                    height: "30px",
                                    borderRadius: "50%"
                                }}
                                alt="" className="bo-rad-haf image-fr-30"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default GroupAccept