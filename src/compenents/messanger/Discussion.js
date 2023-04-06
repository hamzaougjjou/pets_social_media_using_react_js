import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mainUrl, storageUrl } from '../../API';
import { ChatHeaderLoading, Messsage1ItemLoading, Messsage2ItemLoading } from '../loading/Index';
import { MessageItem1, MessageItem2 } from './MessageItem';
function Discussion(props) {
    const {token} = useSelector(state => state.refreshLogin);
    const [user, setUser] = useState({});
    const [messages, setMessages] = useState([]);
    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingMessages, setLoadingMessages] = useState(true);
    const [sendMsgLoading, setSendMsgLoading] = useState(false);
    const [x, setX] = useState(false);

    const [lastUserId, setLastUserId] = useState(props.userId);
    let i = 0;
    const myProfileInfo = useSelector(state => state.getUser);
    let messageInpt = useRef();
    let imageInpt = useRef();
    let bodyChat = useRef();
    console.log(props);

    useEffect(() => {

        // if (lastUserId === props.userId && i != 0) {
        //     return false;
        // }
        // i++;
        
        setLastUserId(props.userId);
        setLoadingUser(true);
        setLoadingMessages(true);
        setUser({});
        setMessages([]);

        const getConversation = async () => {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            await axios.get(mainUrl + '/messages/conversation/' + props.userId, config)
                .then(info => {
                    // console.log(info.data);
                    setUser(info.data.user);
                    setMessages(info.data.messages);

                    setTimeout(() => {
                        try {
                            bodyChat.current.scrollTo(0, bodyChat.current.scrollHeight);
                        } catch (ex) {

                        }
                    }, 100);
                }).catch(err => {
                    // console.log(err);
                }).finally(() => {
                    setLoadingUser(false);
                    setLoadingMessages(false);
                });
        }
        getConversation();

        setInterval(() => {
            getConversation();
        }, 10000); //myProfileInfo

        console.log(bodyChat.current.scrollHeight);

    }, [x, props.userId]);

    //send message function
    const sendMessageFunc = async (e) => {
        e.preventDefault();
        const img = imageInpt.current.files[0];
        //check if user select image or write some text
        if (messageInpt.current.value.trim().lenght === 0 && img === undefined) {
            return false;
        }
        setSendMsgLoading(true);
        const formData = new FormData();
        formData.append('image', img);
        formData.append('content', messageInpt.current.value.trim());
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        await axios.post(mainUrl + '/messages/send/' + props.userId, formData, config)
            .then(info => {
                console.log(info.data);
                messageInpt.current.value = "";
                imageInpt.current.value = "";
                setSendMsgLoading(false);
                setX(!x);
            }).catch(err => {
                console.log("error");
                setSendMsgLoading(false);
            })

    }

    return (
        <div className="messenger-box messenger-box-ch main-box">
            {
                !loadingUser ?
                    <div className="info-chat">
                        {
                            user.profile_img === null ? <div className="chat-profile">{user.name.trim()[0]}</div>
                                :
                                <div style={{ backgroundImage: `url("${storageUrl}/${user.profile_img}")` }} className="chat-profile">
                                </div>
                        }
                        <div className="name-chat-fr">
                            <NavLink to={"/user/" + props.userId} style={{ fontSize: '1.3em' }}>
                                {user.name}
                            </NavLink>
                            <span>Active</span>
                        </div>
                        <NavLink to="/messanger">
                            <i className='fa fa-times btn-close-dissc'></i>
                        </NavLink>
                    </div>
                    :
                    <ChatHeaderLoading />
            }
            <div className='body-chat-container'>
                <div ref={bodyChat} className="body-chat body-chat-mess" >
                    {
                        !loadingMessages && !loadingUser && !myProfileInfo.loading ?
                            messages.length > 0 ?
                                messages.map((message, i) => {
                                    if (message.send_by === myProfileInfo.user.id)
                                        return <MessageItem1 user={myProfileInfo.user} message={message} key={i} />
                                    else
                                        return <MessageItem2 user={user} message={message} key={i} />
                                })
                                :
                                <>
                                    <h4 style={{ textAlign: 'center' }} color='red'>There is no messages </h4>
                                </>
                            :
                            <>
                                <Messsage1ItemLoading />
                                <Messsage2ItemLoading />
                                <Messsage1ItemLoading />
                                <Messsage2ItemLoading />
                            </>
                    }
                </div>

                <form className="send-chat" onSubmit={sendMessageFunc}>
                    <textarea name="mgs" ref={messageInpt} placeholder="Type a message"></textarea>
                    <div className="icon-send">
                        <div className="left-icon">
                            <input type="file" ref={imageInpt} />
                            <i className="fa-solid fa-paperclip"></i>
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            <i className="fa-solid fa-face-smile"></i>
                            <i className="fa-solid fa-microphone-lines"></i>
                        </div>
                        {
                            !sendMsgLoading ?
                                <button type='submit' className="button-ok">Send&nbsp;<i className="fa-solid fa-paper-plane"></i></button>
                                :
                                <button type='button' className="button-ok" style={{ opacity: ".6", cursor: 'default' }}>
                                    Sending&nbsp;&nbsp;
                                    <i className="fas fa-spinner fa-pulse"></i>
                                </button>
                        }
                    </div>
                </form>

            </div>




        </div>
    )
}

export default Discussion;