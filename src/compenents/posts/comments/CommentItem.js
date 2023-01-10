import React from 'react'
import profile from "./../../../assets/img/profile.jpg"

function CommentItem() {

    return (
        <div className="com d-flex">
            <img src={profile} alt="" className="image-fr bo-rad" />
            <div className="text-com fo-pos bo-rad">
                <div className="name-com fo-name-per">Alex Moreno</div>
                <div className="tx-com">
                    Lorem ipsum dolor sit amet consectetur&#128515;
                </div>
                <div className="time-com d-flex">
                    <span>Reply</span>
                    <span>10m</span>
                </div>
            </div>
        </div>
    )
}

export default CommentItem