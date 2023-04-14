import React from 'react'
import { NavLink } from 'react-router-dom';
import { storageUrl } from '../../API';
import profile from "./../../assets/img/profile.jpg"

function LikeNotic( {notic} ) {
    let profile_img = notic.user.profile_img === null ? profile : storageUrl + "/" + notic.user.profile_img;
    let isReadColor = notic.is_read === 1 || notic.is_read === true ? "black" : "#009ef7";
    return (
        <NavLink to={`/post/${notic.content.post_id}`} style={{ color: isReadColor }}>
            <div className="notice-text">
                <div className="comm-notic d-flex ali-center">
                    <span className="i-icon"><i className="fa-solid fa-thumbs-up"></i></span>
                    <div className="txt-notic">

                        <span>
                            <span>
                                <span>{notic.user.name} </span>
                                <span>liked your post</span>
                            </span>
                        </span>

                        <div className="info-notic d-flex ali-center gap-5px">
                            <span> {notic.time}  </span>
                            <img src={profile_img} alt="" className="bo-rad-haf image-fr-30" />
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default LikeNotic