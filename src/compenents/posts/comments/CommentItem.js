import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { mainUrl } from '../../../API';
import { ReplyCommentItemLoading } from '../../loading/Index';
import profile from "./../../../assets/img/profile.jpg"
import ReplyCommentItem from './ReplyCommentItem';

function CommentItem(props) {
    const [replyCommentUiDisplay, setReplyCommentUiDisplay] = useState(false);
    const [startUploadinCommentReplay, setStartUploadinCommentReplay] = useState(false);
    let rcontentReplyInptRef = useRef();
    const [commentReplies, setCommentReplies] = useState([]);
    const [commentRepliesLoading, setCommentRepliesLoading] = useState(false);
    const [startLoadingCommentReplies, setStartLoadingCommentReplies] = useState(false);
    const [myCommentReplies, setMyCommentReplies] = useState([]);
    const [createMyCommentRepliesLoading, setCreateMyCommentRepliesLoading] = useState(false);
    const authUser = useSelector(state => state.getUser);
    const showReplyZone = () => { //hide / show comments replies section
        setReplyCommentUiDisplay(!replyCommentUiDisplay)
    }
    const createCommentReply = async () => { //creact a new commwnt replay
        let formData = new FormData();
        formData.append("content", rcontentReplyInptRef.current.value.trim());
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        setStartUploadinCommentReplay(true)
        await axios.post(`${mainUrl}/comment/${props.comment.id}/replay`, formData, config)
            .then(res => {
                rcontentReplyInptRef.current.value = "";
                setMyCommentReplies([...myCommentReplies, res.data.comment_reply]);
            }).catch(err => {
                console.log("error");
            }).finally(() => {
                // setX(!x);
                setCreateMyCommentRepliesLoading(false);
                setStartUploadinCommentReplay(false);
            })
    }
    // ============================================
    const getCommentReplies = async () => {
        setReplyCommentUiDisplay(true) ; //show input to replay to comment
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        setStartLoadingCommentReplies(true);
        setCommentRepliesLoading(true);
        await axios.get(`${mainUrl}/comment/${props.comment.id}/replies`, config)
            .then(res => {
                console.log(res.data);
                setCommentReplies(res.data.comment_replies);
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                setCommentRepliesLoading(false);
            })
    }
    let allCommentReliesTemplate = commentReplies.map((comment, i) => {
        const user = { id: comment.user_id, name: comment.name, profile_img: comment.profile_img };
        return <ReplyCommentItem user={user} comment={comment} key={i} />
    }
    );
    let myCommentReliesTemplate = myCommentReplies.reverse().map((comment, i) => {
        //// const user23 = { id: 4, name: "me", profile_img: null };
        const user = { id: authUser.user.id, name: authUser.user.name, profile_img: authUser.user.profile_img };
        return <ReplyCommentItem user={user} comment={comment} key={i} />
    }
    );

    return (
        <>
            <div className="com d-flex">
                <img src={profile} alt="" className="image-fr bo-rad" />
                <div className="text-com fo-pos bo-rad">
                    <Link to={`user/${props.user.id}`}>
                        <div className="name-com fo-name-per">
                            {props.user.name}
                        </div>
                    </Link>
                    <div className="tx-com">
                        {props.comment.content}
                    </div>
                    <div className="time-com">
                        <span onClick={showReplyZone}>Reply</span>
                        {
                            (props.comment.has_reply === 1 || props.comment.has_reply === true) &&
                            <span onClick={getCommentReplies}>See replies</span>

                        }

                        <span>{props.comment.time}</span>
                    </div>

                </div>
            </div>
            {
                replyCommentUiDisplay ?
                    <div className="form d-flex bo-rad2" style={{ margin: '10px 10px 10px 50px' }}>
                        <textarea ref={rcontentReplyInptRef} placeholder={`replay to ${props.user.name}`}
                            className="bor-col bo-rad d-block input-shap"></textarea>
                        <div className="emoje"><i className="fa-solid fa-face-smile"></i></div>
                        <label htmlFor="inputTag">
                            <i className="fa-solid fa-camera"></i>
                            <input id="inputTag" type="file" />
                        </label>
                        <button onClick={createCommentReply}><i className="fa-solid fa-paper-plane"></i></button>
                    </div> :
                    null
            }
            {
                startUploadinCommentReplay ?
                    <ReplyCommentItemLoading />
                    :
                    null
            }

            {
                myCommentReliesTemplate
            }

            {
                startLoadingCommentReplies ?
                    commentRepliesLoading ?
                        <>
                            <ReplyCommentItemLoading />
                            <ReplyCommentItemLoading />
                            <ReplyCommentItemLoading />
                        </>
                        :
                        <>
                            {
                                commentReplies.length <= 0 ?
                                    commentReplies.length === 0 ?
                                        <h4 style={{ textAlign: "center" }}>there is no replies for this comments</h4>
                                        :
                                        null
                                    :
                                    allCommentReliesTemplate
                            }
                        </>
                    :
                    null
            }



        </>
    )
}

export default CommentItem