import axios from 'axios';
import React, { useState } from 'react'
import { mainUrl } from '../../API';
import Post from '../posts/Post'

function ReqPostItem({ post, groupId }) {

    const [hidePostItem, setHidePostItem] = useState(false);
    const [acceptPostLoading, setAcceptPostLoading] = useState(false);
    const [deletetPostLoading, setDeletetLoading] = useState(false);

    const deletePostFun = async () => {
        setHidePostItem(true);
        console.log("delete post func")
    }

    const acceptPostFun = async (postId) => {
        setAcceptPostLoading(true);
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        await axios.put(`${mainUrl}/group/${groupId}/post/${postId}/accept`, null, config)
            .then(info => {
                console.log("accepted");
                if (info.data.success) {
                    setHidePostItem(true);
                }
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setAcceptPostLoading(false);
            })
    }
    return (
        <>
            {
                hidePostItem ?
                    null
                    :
                    <div className='main-box' >
                        {
                            (post.post_type === "text") ?
                                <Post postType="text" post={post} user={post.user} />
                                :
                                <Post postType="image" post={post} user={post.user} />

                        }
                        <div className='group-item-popup-btns flex-between w-full'>
                            {
                                acceptPostLoading ?
                                    <button className="button-ok bot-req bot-fr bot-gro" style={{ opacity: '0.5' }}>
                                        &nbsp;Accept&nbsp;
                                        <i className="fas fa-spinner fa-pulse"></i>
                                    </button>
                                    :
                                    <button onClick={() => acceptPostFun(post.post_id)} className="button-ok bot-req bot-fr bot-gro">
                                        &nbsp;&nbsp;Accept&nbsp;&nbsp;
                                    </button>
                            }
                            {
                                deletetPostLoading ?
                                    <button className="button-cancel bot-req bot-fr bot-fr1 flex-center btn-err" style={{ opacity: '0.5' }}>
                                        &nbsp;Delete&nbsp;
                                        <i className="fas fa-spinner fa-pulse"></i>
                                    </button>
                                    :
                                    <button onClick={() => deletePostFun(post.post_id)} className="button-cancel bot-req bot-fr bot-fr1 flex-center btn-err">
                                        &nbsp;&nbsp;Delete&nbsp;&nbsp;
                                    </button>
                            }



                        </div>
                    </div>
            }
        </>
    )
}

export default ReqPostItem