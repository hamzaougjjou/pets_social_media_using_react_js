import React from 'react'
import profile from "./../../assets/img/profile.jpg"

function LikeNotic() {
    return (
        <div className="notice-text">
            <div className="comm-notic d-flex ali-center">
                <span className="i-icon"><i className="fa-solid fa-thumbs-up"></i></span>
                <div className="txt-notic">
                    <span>There are 2 new tasks for you in “AirPlus Mobile App” project:</span>
                    <div className="info-notic d-flex ali-center gap-5px">
                        <span>Added at 4:23 PM by</span>
                        <img src={profile} alt="" className="bo-rad-haf image-fr-30" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikeNotic