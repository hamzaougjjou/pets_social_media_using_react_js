import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { mainUrl } from '../../API';
import AcceptFriendNotic from './AcceptFriendNotic';
import CommentNotic from './CommentNotic';
import GroupAccept from './GroupAccept';
import LikeNotic from './LikeNotic';
import ReplayCommentNotic from './ReplayCommentNotic';



function NotificationItem({ notic }) {

    const [noticItem, setNoticeItem] = useState('');
    const [itemOpacity, setItemOpacity] = useState(1);
    const [itemDeleted, setItemDeleted] = useState(false);

    useEffect(() => {
        if (notic.type === "comment") {
            setNoticeItem(<CommentNotic notic={notic} />);
        }
        else if (notic.type === "comment_reply") {
            setNoticeItem(<ReplayCommentNotic notic={notic} />);
        }
        else if (notic.type === "accept_friend") {
            setNoticeItem(<AcceptFriendNotic notic={notic} />);
        }
        else if (notic.type === "like_post") {
            setNoticeItem(<LikeNotic notic={notic} />);
        }
        else if (notic.type === "group_accept") {
            setNoticeItem(<GroupAccept notic={notic} />);
        }
    }, [])

    const deleteNotice = async () => {
        setItemOpacity(0.4);
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        await axios.delete(mainUrl + `/notification/${notic.id}/delete`, config)
            .then(info => {
                // console.log(info.data);
                setItemDeleted(true);
            }).catch(err => {
                alert('Ooop Error to delete notification');
            }).finally(() => {
                setItemOpacity(1);
            })
    }


    return (
        <>
            {
                itemDeleted ?
                    null
                    :
                    <section style={{ display: 'flex', justifyContent: 'space-between', opacity: itemOpacity }}>
                        {
                            noticItem
                        }
                        <div>
                            <button onClick={deleteNotice} className="button-cancel bot-req bot-fr bot-fr1 flex-center btn-err">
                                Delete&nbsp;<i className="fa-solid fa-trush"></i>
                            </button>
                        </div>

                    </section>
            }
        </>

    )
}

export default NotificationItem