import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { mainUrl, storageUrl } from '../../API';
// import Imogies from '../Imogies';
import { ChatHeaderLoading, Messsage1ItemLoading, Messsage2ItemLoading } from '../loading/Index';
import { MessageItem1, MessageItem2 } from './MessageItem';
import { emogisList } from '../Imogies';

import { io } from 'socket.io-client';
// import { io } from '../../assets/js/socket.io.min';

function Discussion(props) {
    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================
    const [user, setUser] = useState({});
    const [messages, setMessages] = useState([]);
    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingMessages, setLoadingMessages] = useState(true);
    const [sendMsgLoading, setSendMsgLoading] = useState(false);
    const [messageContent, setMessageContent] = useState('');
    const [lastMessages, setLastMessages] = useState([]);
    // const [lastUserId, setLastUserId] = useState(props.userId);
    // let i = 0;

    const myProfileInfo = useSelector(state => state.getUser);
    let messageInpt = useRef();
    let imageInpt = useRef();
    let bodyChat = useRef();

    let navigate = useNavigate();

    useEffect(() => {
        // setLastUserId(props.userId);
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
            if (!loadingToken)
                await axios.get(mainUrl + '/messages/conversation/' + props.userId, config)
                    .then(info => {
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
    }, [props.userId]);


    const socket = io('http://localhost:3000');



    //Listen Specifically for a user (user_id)
    socket.on('receiveMessageToUser_' + myProfileInfo.user.id, (data) => {

        if (data.from == props.userId) {
            let lastItem = {
                send_by: user.id,
                time: 'just now',
                content: data.message
            }
            // console.log('====================================');
            // console.log(JSON.stringify(lastMessages[lastMessages.length - 1]) === JSON.stringify(lastItem));
            // console.log('====================================');

            if (lastMessages[-1] != lastItem)

                lastMessages.push(lastItem);

            setLastMessages(
                lastMessages
            );

            setTimeout(() => {
                try {
                    bodyChat.current.scrollTo(0, bodyChat.current.scrollHeight);
                } catch (ex) {
                }
            }, 100);

        }

    });



    const sendMessageFunc = async (e) => {
        e.preventDefault();
        const img = imageInpt.current.files[0];
        //check if user select image or write some text
        if (messageInpt.current.value.lenght === 0) {
            alert('error');
            return false;
        }
        // setSendMsgLoading(true);
        const formData = new FormData();
        formData.append('image', img);
        formData.append('content', messageInpt.current.value.trim());

        // ===== socket io
        var obj = {
            from: myProfileInfo.user.id,
            to: user.id,
            message: messageInpt.current.value.trim()
        }
        socket.emit('sendMessageToUser', obj);

        // ==========================================
        lastMessages.push(
            {
                send_by: myProfileInfo.user.id,
                time: 'just now',
                content: messageInpt.current.value.trim()
            }
        );
        setLastMessages(
            lastMessages
        );
        // ==========================================

        setTimeout(() => {
            try {
                bodyChat.current.scrollTo(0, bodyChat.current.scrollHeight);
            } catch (ex) {
            }
        }, 100);

        messageInpt.current.value = "";
        imageInpt.current.value = "";
        setMessageContent('');

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        if (!loadingToken)
            await axios.post(mainUrl + '/messages/send/' + props.userId, formData, config)
                .then(info => {

                    // console.log(info.data);
                    // messageInpt.current.value = "";
                    // imageInpt.current.value = "";
                    // setMessageContent('');

                }).catch(err => {
                    // console.log("error");
                }).finally(() => {
                    setSendMsgLoading(false);
                })

    }
    const closeDiss = () => {
        props.setParamId(undefined);
        navigate('/messanger');
    }
    const [showEmogis, setShowEmogis] = useState(false);
    // let emogisContainer = useRef();

    const hideShowEmogies = (e) => {
        setShowEmogis(!showEmogis);
    }

    let emogiItemsList = document.querySelectorAll('.emogi-item');

    for (let j = 0; j < emogiItemsList.length; j++) {
        const emogiItem = emogiItemsList[j];
        emogiItem.onclick = (e) => {
            setMessageContent(messageContent + emogiItem.textContent.trim());
        }

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
                        <p onClick={closeDiss}>
                            <i className='fa fa-times btn-close-dissc'></i>
                        </p>
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
                    {
                        lastMessages.map((message, i) => {
                            if (message.send_by == myProfileInfo.user.id)
                                return <MessageItem1 user={myProfileInfo.user} message={message} key={i} />
                            else
                                return <MessageItem2 user={user} message={message} key={i} />
                        })
                    }

                </div>

                <form className="send-chat" onSubmit={sendMessageFunc}>
                    <textarea value={messageContent} onChange={(e) => { setMessageContent(e.target.value) }} name="mgs" ref={messageInpt} placeholder="Type a message"></textarea>
                    <div className="icon-send">
                        <div className="left-icon">
                            <span></span>
                            <input type="file" ref={imageInpt} name='dissc-file' style={{ display: 'none' }} />
                            <i className="fa-solid fa-paperclip" name='dissc-file' ></i>
                            {/* <i className="fa-solid fa-arrow-up-from-bracket" name='dissc-file' ></i> */}
                            <span

                                style={{ position: 'relative' }}
                            >
                                <i onClick={hideShowEmogies} className="fa-solid fa-face-smile"></i>
                                {
                                    showEmogis &&
                                    <div className='imogies-container main-box menu-posht menu-op'>
                                        {
                                            emogisList.map((emogi, i) => {
                                                return <span className='emogi-item' key={i} > {emogi} </span>
                                            })
                                        }
                                    </div>
                                }
                            </span>
                            {/* <i className="fa-solid fa-microphone-lines"></i> */}
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