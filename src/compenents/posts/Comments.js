import React from 'react'
import { CommentItemLoading, ReplyCommentItemLoading } from '../loading/Index';
import profile from "./../../assets/img/profile.jpg"
import CommentItem from './comments/CommentItem';
import ReplyCommentItem from './comments/ReplyCommentItem';

function Comments() {
    function height_comm(name_id, heit) {
        // height_comm('comments','662px')
        if (document.getElementById(name_id).style.height === '0px') {
            document.getElementById(name_id).style.height = heit;
        }
        else {
            document.getElementById(name_id).style.height = '0px';
        }
    }
    
    return (
        <div className="write-comm" id="comments" style={ {height:"662px",overflowY:'auto' } }>
            <div className="form d-flex bo-rad">
                <textarea name="" id="" placeholder="Write a comment..."
                    className="bor-col bo-rad d-block input-shap"></textarea>
                <div className="emoje"><i className="fa-solid fa-face-smile"></i></div>
                <label htmlFor="inputTag">
                    <i className="fa-solid fa-camera"></i>
                    <input id="inputTag" type="file" />
                </label>
                <button><i className="fa-solid fa-paper-plane"></i></button>
            </div>
            <div className="comments">
                
                <CommentItem />
                <CommentItem />
                <ReplyCommentItemLoading />
                <ReplyCommentItemLoading />
                <CommentItem />
                <CommentItem />
                <ReplyCommentItem />
                <ReplyCommentItem />
                <ReplyCommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <ReplyCommentItem />
                <CommentItem />
                <CommentItemLoading />
                <CommentItemLoading />

            </div>
        </div>
    )
}

export default  Comments;