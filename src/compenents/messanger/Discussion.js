import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Discussion extends Component {
    render() {
        return (
            <div className="messenger-box messenger-box-ch main-box">
                <div className="info-chat">
                    <div className="name-chat-fr">
                        <span>Brian Cox</span>
                        <span>Active</span>
                    </div>
                    <NavLink to="/messanger">
                        <i className='fa fa-times btn-close-dissc'></i>
                    </NavLink>
                </div>
                <div className="body-chat body-chat-mess">
                    <div className="message-text">
                        <div className="info-message d-flex ali-center">
                            <img src="./image/image7.jpg" alt="" className="bo-rad-haf" />
                            <span>Brian Cox</span>
                            <span>&nbsp;&nbsp;2 mins</span>
                        </div>
                        <div className="message-box bo-rad">
                            How likely are you to recommend our company to your friends and family ?
                        </div>
                    </div>
                    <div className="message-text-ri">
                        <div className="info-message info2 d-flex ali-center">
                            <img src="./image/image8.jpg" alt="" className="bo-rad-haf" />
                            <span>Brian Cox</span>
                            <span>&nbsp;&nbsp;2 mins</span>
                        </div>
                        <div className="message-box2 bo-rad">
                            Hey there, we’re just writing to let you know that you’ve been subscribed to a
                            repository on GitHub.
                        </div>
                    </div>
                    <div className="message-text">
                        <div className="info-message d-flex ali-center">
                            <img src="./image/image7.jpg" alt="" className="bo-rad-haf" />
                            <span>Brian Cox</span>
                            <span>&nbsp;&nbsp;5 mins</span>
                        </div>
                        <div className="message-box bo-rad">
                            Ok, Understood!
                        </div>
                    </div>
                    <div className="message-text-ri">
                        <div className="info-message info2 d-flex ali-center">
                            <img src="./image/image8.jpg" alt="" className="bo-rad-haf" />
                            <span>Brian Cox</span>
                            <span>&nbsp;&nbsp;1 Hour</span>
                        </div>
                        <div className="message-box2 bo-rad">
                            You’ll receive notifications for all issues, pull requests!
                        </div>
                    </div>
                    <div className="message-text">
                        <div className="info-message d-flex ali-center">
                            <img src="./image/image7.jpg" alt="" className="bo-rad-haf" />
                            <span>Brian Cox</span>
                            <span>&nbsp;&nbsp;2 Hour</span>
                        </div>
                        <div className="message-box bo-rad">
                            You can unwatch this repository immediately by clicking here: <a
                                href="fgfg.html">Keenthemes.com</a>
                        </div>
                    </div>
                    <div className="message-text-ri">
                        <div className="info-message info2 d-flex ali-center">
                            <img src="./image/image8.jpg" alt="" className="bo-rad-haf" />
                            <span>Brian Cox</span>
                            <span>&nbsp;&nbsp;3 Hour</span>
                        </div>
                        <div className="message-box2 bo-rad">
                            Most purchased Business courses during this sale!
                        </div>
                    </div>
                    <div className="message-text">
                        <div className="info-message d-flex ali-center">
                            <img src="./image/image7.jpg" alt="" className="bo-rad-haf" />
                            <span>Brian Cox</span>
                            <span>&nbsp;&nbsp;2 Hour</span>
                        </div>
                        <div className="message-box bo-rad">
                            Company BBQ to celebrate the last quater achievements and goals. Food and drinks
                            provided
                        </div>
                    </div>

                </div>

                <div className="send-chat">
                    <textarea name="" id="" placeholder="Type a message"></textarea>
                    <div className="icon-send">
                        <div className="left-icon">
                            <i className="fa-solid fa-paperclip"></i>
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            <i className="fa-solid fa-face-smile"></i>
                            <i className="fa-solid fa-microphone-lines"></i>
                        </div>
                        <button className="button-ok">Send&nbsp;<i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Discussion;