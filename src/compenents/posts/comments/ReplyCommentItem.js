import React from 'react'
import profile from "./../../../assets/img/profile.jpg"

function ReplyCommentItem() {
    return (
        <div className="com reply d-flex">
            <img src={profile} alt="" className="image-fr bo-rad" />
            <div className="text-com fo-pos bo-rad">
                <div className="name-com fo-name-per">Alex Moreno</div>
                <div className="tx-com">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit &#128516;
                </div>
                <div className="time-com d-flex">
                    <span>Reply</span>
                    <span>25m</span>
                </div>
            </div>
        </div>
    )
}

export default ReplyCommentItem