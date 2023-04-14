import React, { useEffect, useState } from 'react'
import Comments from './Comments'
import SimplePostHeader from './SimplePostHeader';
import TextPost from './TextPost';
import ImagePost from './ImagePost';
import axios from 'axios';
import { mainUrl } from '../../API';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Post(props) {
    // console.log(props);
    const [comm, setComment] = useState('');
    const [isCommShow, setIsCommShow] = useState(false);
    const [postContent, setPostContent] = useState('');
    const { token } = useSelector(state => state.refreshLogin);
    const [commentCount, setCommentCount] = useState(props.post.comments_count);

    useEffect(() => { //RENDER POST BODY 
        if (props.postType === 'text')
            setPostContent(<TextPost post={props.post} />);
        else if (props.postType === 'image')
            setPostContent(<ImagePost post={props.post} />);
    }, []);

    let handlerComment = () => {
        if (!isCommShow) {
            setComment(<Comments postId={props.post.post_id} commentCount={commentCount} setCommentCount={setCommentCount} />);
            setIsCommShow(true);
        } else {
            setComment('');
            setIsCommShow(false);
        }
    }
    
    let liked = props.post.liked === 1 || props.post.liked === true;
    let likedClass = "like-container";
    if (liked) {
        likedClass = "like-container liked";
    }
    const [likeState, setLikeState] = useState({
        liked: liked,
        class: likedClass,
        count: props.post.likes_count
    });

    const likeDislikeFunc = async () => {
        if (!likeState.liked) {
            setLikeState({ count: likeState.count + 1, liked: true, class: "like-container liked" });
            // console.log("like");
        } else {
            // console.log("dislike");
            if (likeState.count > 0)
                setLikeState({ count: likeState.count - 1, liked: false, class: "like-container" });
        }
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        }
        await axios.post(`${mainUrl}/post/${props.post.post_id}/like`, null, config)
            .then(res => {
                // console.log("like info ", res.data);
            }).catch(err => {
                // console.log(err);
                console.error("Ooops Somthing went wrong ..");
            })

    }
    // ====================== END LIKE LOGIC SECTION=========================
    return (

        <div className="posts-container" style={{ width: "100%" }}>
            <div className="post-image d-flex bor bo-rad" >
                <div className="top-post d-flex bor-bott-col" >
                    <div className="left-post d-flex w-full" >
                        <SimplePostHeader postId={props.post.post_id} user={props.user} />
                        {
                            postContent
                        }
                    </div>
                </div>

                <div className="bottom-post">
                    <div className="like-comm d-flex">
                        <div className="like flex-center bo-rad">
                            <div className="tooltip bo-rad flex-center">
                                {
                                    likeState.count
                                }
                            </div>
                            <div onClick={likeDislikeFunc} className={likeState.class}>
                                <i className="fa-solid fa-thumbs-up" ></i>
                            </div>
                        </div>
                        <div className="comment-post flex-center bo-rad" onClick={handlerComment}>
                            <div className="tooltip bo-rad flex-center">
                                {
                                    commentCount
                                }
                            </div>
                            <i className="fa-solid fa-comment" >
                            </i>
                        </div>
                    </div>
                    {comm}
                </div>
            </div>
        </div>
    )
}



export default Post;