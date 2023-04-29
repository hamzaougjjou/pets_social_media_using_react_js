import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { mainUrl } from '../../API';
import { PostItemLoading } from '../loading/Index';
import Comments from '../posts/Comments';
import ImagePost from '../posts/ImagePost';
import SimplePostHeader from '../posts/SimplePostHeader';
import TextPost from '../posts/TextPost';

function PostItem() {
    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================
    const [commentCount, setCommentCount] = useState(null);
    const [postContent, setPostContent] = useState('');
    const [postInfo, setPostInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [likesCount, setLikesCount] = useState(null);
    const [postLiked, setPostLiked] = useState(false);
    
    const { id } = useParams();

    //get post information from back end 
    useEffect(() => {
        const getPostInfo = async () => {
            setLoading(true);
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            if (!loadingToken)
                await axios.get(`${mainUrl}/post/${id}`, config)
                    .then(res => {
                        console.log(res.data);
                        setPostInfo({
                            postType: res.data.post.post_type,
                            post: res.data.post,
                            user: {
                                id: res.data.post.user_id,
                                name: res.data.post.name,
                                profile_img: res.data.post.profile_img,
                                created_at: res.data.post.created_at,
                                time: res.data.post.time
                            }
                        });
                        setLikesCount(res.data.post.likes_count);
                        setCommentCount(res.data.post.comments_count);
                        if (res.data.post.liked === 1 || res.data.post.liked === true)
                            setPostLiked(true)

                    }).catch(err => {
                        console.error(err);
                        console.error("Ooops Somthing went wrong ..");
                    }).
                    finally(() => {
                        setLoading(false);
                    })
        }
        getPostInfo();
    }, [])

    useEffect(() => { //RENDER POST BODY 
        if (!loading) {
            if (postInfo.postType === 'text')
                setPostContent(<TextPost post={postInfo.post} />);
            else if (postInfo.postType === 'image')
                setPostContent(<ImagePost post={postInfo.post} />);
        }
    }, [loading]);



    const likeDislikeFunc = async () => {
        if (postLiked) {
            setPostLiked(!true);
            if (likesCount > 0)
                setLikesCount(likesCount - 1)
        } else {
            setPostLiked(true);
            setLikesCount(likesCount + 1)


        }
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        if (!loadingToken)
            await axios.post(`${mainUrl}/post/${postInfo.post.post_id}/like`, null, config)
                .then(res => {
                    console.log("like info ", res.data);
                }).catch(err => {
                    console.error("Ooops Somthing went wrong ..");
                })

    }

    return (
        <div className="main-box post-tem-container" style={{ minHeight: 'clac( 100vh - 100px )', margin: '15px' }}>
            {/* <Post rf='postIem' postType="text" post={postInfo.post} user={postInfo.user} /> */}
            {
                loading === true ?
                    <PostItemLoading />
                    :
                    <div className="main-box">
                        <SimplePostHeader user={postInfo.user} />
                        {
                            postContent
                        }
                        <span className="hr"></span>
                        <div className="bottom-post">
                            <div className="like-comm d-flex">
                                <div className="like flex-center bo-rad">
                                    <div className="tooltip bo-rad flex-center">
                                        {
                                            likesCount
                                        }
                                    </div>
                                    {
                                        (postLiked) ?

                                            <div onClick={likeDislikeFunc} className="like-container liked">
                                                <i className="fa-solid fa-thumbs-up" ></i>
                                            </div>
                                            :
                                            <div onClick={likeDislikeFunc} className="like-container">
                                                <i className="fa-solid fa-thumbs-up" ></i>
                                            </div>
                                    }

                                    {/* <img src={like} alt='like' height='25px' width='25px' /> */}
                                </div>
                                <div className="comment-post flex-center bo-rad">
                                    <div className="tooltip bo-rad flex-center">
                                        {commentCount}
                                    </div>
                                    <i className="fa-solid fa-comment" >
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
            }

            <Comments
                postId={id}
                commentCount={commentCount}
                setCommentCount={setCommentCount}
            />
        </div>
    )
}

export default PostItem