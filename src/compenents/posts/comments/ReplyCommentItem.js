import React from 'react'
import { Link } from 'react-router-dom';
import { storageUrl } from '../../../API';
import profile from "./../../../assets/img/profile.jpg"

function ReplyCommentItem({ user, comment }) {
    let profile_img = user.profile_img === null ? profile : storageUrl + "/" + user.profile_img;

    return (
        <div className="com reply d-flex">
            <img src={profile_img} alt="" className="image-fr bo-rad" />
            <div className="text-com fo-pos bo-rad">
                <Link to={`user/${user.id}`}>
                    <div className="name-com fo-name-per">{user.name}</div>
                </Link>
                <div className="tx-com">
                    {
                        comment.content
                    }
                </div>
                <div className="time-com d-flex">
                    <span> {comment.time} </span>
                </div>
            </div>
        </div>
    )
}

export default ReplyCommentItem;