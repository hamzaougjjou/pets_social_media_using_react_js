import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { mainUrl } from '../../API';
import { CommentItemLoading } from '../loading/Index';
// import profile from "./../../assets/img/profile.jpg";
import CommentItem from './comments/CommentItem';

function Comments(props) {

    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================

    const post_id = props.postId;
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(false);
    const [errorComments, setErrorComments] = useState(false);

    const authUser = useSelector(state => state.getUser);


    const [createCommentLoading, setCreateCommentLoading] = useState(false);
    const [createCommentError, setCreateCommentError] = useState(false);
    const [startCreatingComment, setStartCreatingComment] = useState(false);
    const [lastComments, setLastComments] = useState([]);

    const [x, setX] = useState(false);
    const contentRef = useRef();

    useEffect(() => { //get all comments for post
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        async function fetchData() {
            setLoadingComments(true);
            if (!loadingToken)
                await axios.get(`${mainUrl}/post/${post_id}/comments`, config)
                    .then(res => {
                        console.log(res.data);
                        setComments(res.data.comments);
                    }).catch(err => {
                        console.log(err);
                    }).finally(() => {
                        setLoadingComments(false);
                    })
        }
        fetchData();
    }, [x]);
    let allCommTemplate = comments.map((comment, i) => {
        const user = { id: comment.user_id, name: comment.name, profile_img: comment.profile_img };
        return <CommentItem user={user} comment={comment} key={i} />
    }
    );

    const createComment = async () => { //creact a new commwnt
        let formData = new FormData();
        if (contentRef.current.value.trim().length < 1)
            return false;
        formData.append("post_id", post_id); //post_id
        formData.append("content", contentRef.current.value.trim());

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        setStartCreatingComment(true)
        setCreateCommentLoading(true);
        if (!loadingToken)
            await axios.post(`${mainUrl}/post/comment/create`, formData, config)
                .then(res => {
                    console.log(res.data);
                    setCreateCommentError(false);
                    setLastComments([...lastComments, res.data.comment]);
                    contentRef.current.value = "";
                    props.setCommentCount(props.commentCount + 1);

                }).catch(err => {
                    console.log(err);
                    setCreateCommentError(true)
                }).finally(() => {
                    setCreateCommentLoading(false);
                })
    }

    return (
        <div className='write-comm-c'>
            <div className="form d-flex bo-rad">
                <textarea ref={contentRef} placeholder="Write a comment..."
                    className="bor-col bo-rad d-block input-shap"></textarea>
                <div className="emoje"><i className="fa-solid fa-face-smile"></i></div>
                <label htmlFor="inputTag">
                    <i className="fa-solid fa-camera"></i>
                    <input id="inputTag" type="file" />
                </label>
                <button onClick={createComment}>
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </div>
            <div className="write-comm" >

                <div className="comments">
                    {
                        startCreatingComment ?
                            createCommentLoading ?
                                <CommentItemLoading />
                                :
                                <>
                                    {
                                        lastComments.reverse().map((comment, i) => {
                                            const user = { id: authUser.user.id, name: authUser.user.name, profile_img: authUser.user.profile_img };
                                            return <CommentItem user={user} comment={comment} key={i} />
                                        }
                                        )
                                    }

                                </>
                            :
                            ""

                    }
                    {
                        !errorComments
                            ?
                            loadingComments ?
                                <>
                                    <CommentItemLoading />
                                    <CommentItemLoading />
                                    <CommentItemLoading />
                                    <CommentItemLoading />
                                </>
                                :
                                comments.length <= 0 ?
                                    lastComments.length === 0 ?
                                        <h4 style={{ textAlign: "center" }}>there is no comments for this post</h4>
                                        :
                                        ''
                                    :
                                    allCommTemplate
                            :
                            <h2 style={{ textAlign: "center", color: "red" }}>Somthing went wrong</h2>
                    }
                </div>
            </div>
        </div>

    )
}

export default Comments;