
import React from 'react'
import "./../../assets/css/loading.css"

function PeapleItemLoading() {
    return (
        <>
            <div className="box-freind main-box d-flex">
                <div className="img-box-freind po-rel">
                    <div className="square circle w80p h80"></div>
                </div>
                <div className="box">
                    <div className="line w25"></div>
                    <span className="line w50"></span>
                </div>
                <div className="follow-box-freind d-flex gap-10px">
                    <div className="first-follow bor-dash bo-rad flex-center">
                        <span className="line h10 w50"></span>
                        <span className="line h8 w50"></span>
                    </div>
                    <div className="first-follow bor-dash bo-rad flex-center">
                        <span className="line h10 w50"></span>
                        <span className="line h8 w50"></span>
                    </div>
                </div>
                <div className="button-box-freind flex-between w-full">
                    <div className="line h25 w50"></div>
                    <div className="line h25 w50"></div>
                </div>
            </div>
        </>
    )
}

function PostHeaderLoading() {
    return (
        <div className="profile-person w-full">
            <section className='flex-between w-full'>
                <div className='d-flex' >
                    <div className="square h50 w50p"></div>
                    <div className="name-date" style={{padding:"5px 20px"}}>
                        <div>
                            <span className="d-block fo-name-per">
                                <div className="line h15 w100p"></div>
                            </span>
                        </div>
                        <span className="fo-bot-na">
                            <div className="line h10 w60p"></div>
                        </span>
                    </div>
                </div>

                <div>
                    <span>
                        <div className="line h20 w30p"></div>
                    </span>
                </div>

            </section>
        </div>
    )
}
function FriendItemLoading() {
    return (
        <div className="freind" >
            <div className="line h45 w45p bo-rad"></div>
            <div className="info-name">
                <div className="line h10 w60"></div>
                <div className="line h10 w50"></div>
            </div>
            <div>
                <div className="line h25 w25p" style={{ margin: '0 13px 13px 0' }}></div>
            </div>
        </div>
    )
}

function PostItemLoading() {
    return (
        <div className="posts-container w-full" style={{ width: "100%" }}>
            <div className="post-image d-flex bor bo-rad w-full" >
                <div className="w-full top-post d-flex bor-bott-col" >
                    <div className="w-full left-post d-flex" >

                        <PostHeaderLoading />
                        <div className="w-full" style={{ padding: '20px' }}>

                            <div className="w-full" style={{ paddingBottom: '20px' }}>
                                <div className="line h10 w75"></div>
                                <div className="line h10 w75"></div>
                                <div className="line h10 w-full"></div>
                                <div className="line h10 w75"></div>
                                <div className="line h10 w25"></div>
                            </div>

                            <div className="w-full">
                                <div className="line h300p w-full"></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bottom-post " style={{ padding: '20px 0px 10px 0' }}>
                    <div className="d-flex flex-around w-full">
                        <div className="line h30 w40p"></div>
                        <div className="line h30 w40p"></div>
                        <div className="line h30 w40p"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function CommentItemLoading() {
    return (
        <div className="com d-flex">
            {/* <img src={profile} alt="" className="image-fr bo-rad" /> */}
            <div className="square w40p h40 image-fr bo-rad"></div>
            <div className="text-com fo-pos bo-rad">
                <div className="name-com fo-name-per">
                    <div className="line w100p"></div>
                </div>
                <div className="tx-com">
                    <div className="line w200p"></div>
                </div>
                <div className="time-com d-flex">
                    <div className="line h8 w40p" style={{ marginTop: '5px' }}></div>
                    <div className="line h8 w40p" style={{ marginTop: '5px' }}></div>
                </div>
            </div>
        </div>
    )
}

function ReplyCommentItemLoading() {
    return (
        <div className="com reply d-flex">
            {/* <img src={profile} alt="" className="image-fr bo-rad" /> */}
            <div className="square w40p h40 image-fr bo-rad"></div>
            <div className="text-com fo-pos bo-rad">
                <div className="name-com fo-name-per">
                    <div className="line w100p"></div>
                </div>
                <div className="tx-com">
                    <div className="line w200p"></div>
                </div>
                <div className="time-com d-flex">
                    <div className="line h8 w40p" style={{ marginTop: '5px' }}></div>
                    <div className="line h8 w40p" style={{ marginTop: '5px' }}></div>
                </div>
            </div>
        </div>
    )
}
function NotificationItemLoading() {
    return (
        <div className="notice-text">
            <div className="comm-notic2 d-flex ali-center">
                <span className="square w45p h45 bo-rad circle"></span>
                <div className="txt-notic">
                    <span><div className="line h15 w300p"></div></span>
                    <div className="info-notic d-flex ali-center gap-5px">
                        <span><div className="line h8 w100p"></div></span>
                        <span className="square w30p h30 bo-rad circle AA bo-rad-haf image-fr-30"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}
function RequestItemLoading() {
    return (
        <li className="d-flex gap-10px">
            <div className="info-r d-flex gap-10px">
                <span className="square w45p h45 bo-rad"></span>
                <div className="info-req flex-between flex-1">
                    <div className="desc-user-req">
                        <div>
                            <p className="line h15 w100p"></p>
                        </div>
                        <span>
                            <div className="line h10 w100p"></div>
                        </span>
                    </div>
                    <div className="date-req d-flex flex-col">
                        <span>
                            <div className="line h8 w100p"></div>
                        </span>
                        <span>
                            <div className="line h8 w100p"></div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bott-req d-flex gap-10px">
                <div className="line h30 w100p"></div>
                <div className="line h30 w100p"></div>
            </div>
        </li>
    )
}

function GroupItemLoading() {
    return (
        <div className="box-freind box-group-l main-box d-flex">
            <div className="img-box-freind img-box-group flex-between w-full">
                <div className="img-group2">
                    <div className="square w100p h100 bo-rad"></div>
                </div>
                <div className="line h20 w60p"></div>
            </div>
            <div className='group-link'>
                <div className="info-box-freind info-box-group d-flex">
                    <p className="line h20 w200p"></p>
                    <span className="line h10 w60p"></span>
                </div>
            </div>
            <div className="follow-box-freind d-flex gap-10px w-full">
                <div className="first-follow first-group bor-dash bo-rad flex-center">
                    <span className="line h20 w60p"></span>
                    <span className="line h10 w40p"></span>
                </div>
                <div className="first-follow first-group bor-dash bo-rad flex-center">
                    <span className="line h20 w60p"></span>
                    <span className="line h10 w40p"></span>
                </div>
            </div>
            <div className="member-group d-flex w-full">
                <div className="square w40p h40 bo-rad circle image-fr bo-rad-haf"></div>
                <div className="square w40p h40 bo-rad circle image-fr bo-rad-haf"></div>
                <div className="square w40p h40 bo-rad circle image-fr bo-rad-haf"></div>
                <div className="square w40p h40 bo-rad circle image-fr bo-rad-haf"></div>
                <div className="square w40p h40 bo-rad circle image-fr bo-rad-haf"></div>
            </div>
            <div className="button-box-freind flex-between w-full">
                <div className="line h40 w100p"></div>
                <div className="line h40 w100p"></div>

            </div>
        </div>
    )
}
function HeaderProfileLoading() { //header/profile.js
    return (
        <>
            <div style={{ display: 'flex', padding: '0 5px' }} >
                <div className="name" style={{ paddingTop: '10px' }}>
                    <span className="line h10 w100p" ></span>
                    <p className="line h15 w100p"></p>
                </div>
                <div className="bo-rad square w45p h45" ></div>
            </div>
        </>
    )
}

function ProfileHeaderLoading() { //profile/ProfileHeader.js
    return (
        <div className="top-profile d-flex gap-20px">
            <div className="img-prof-media" >
                <div className="line quare w180p h180 bo-rad po-rel">
                    {/* <div className="green enable bo-rad-haf quare w10p h10 circle"></div> */}
                </div>
            </div>
            <div className="all-info-prof">
                <div className="infor-profile flex-between">
                    <div className="inf-prof-addr">
                        <div className="my-name d-flex ali-center gap-5px">
                            <p className=' line h20 w150p'></p>
                            <span className="svg-icon svg-icon-1 svg-icon-primary">
                                <p className='line h20 w20p'></p>
                            </span>
                        </div>
                        <div className="address-prof d-flex gap-5px" style={{ paddingTop: '8px' }}>

                            <span className="d-flex ali-center">
                                <span className="svg-icon svg-icon-4 me-1">
                                    <p className=' line h15 w15p'></p>
                                </span><p className='line h15 w100p'></p>
                            </span>
                            <span className="d-flex ali-center">
                                <span className="svg-icon svg-icon-4 me-1">
                                    <p className=' line h15 w15p'></p>
                                </span><p className=' line h15 w100p'></p>
                            </span>
                            <span className="d-flex ali-center">
                                <span className="svg-icon svg-icon-4 me-1">
                                    <p className=' line h15 w15p'></p>
                                </span><p className=' line h15 w100p'></p>
                            </span>
                        </div>
                    </div>
                    <div className="button-prof button1-prof d-flex" style={{ gap: '6px' }}>
                        <div className="d-flex ali-center line h35 w80p">
                        </div>
                        <div className="d-flex ali-center line h35 w90p">
                        </div>
                        <div className="d-flex ali-center line h35 w35p">
                        </div>
                    </div>
                </div>
                <div className="follow-info flex-between">
                    <div className="number d-flex gap-20px">
                        <div className="Friends-num bo-rad flex-center">
                            <span className="d-block">
                                <p className=' line h20 w40p'></p>
                            </span>
                            <span>
                                <p className=' line h10 w50p'></p>
                            </span>
                        </div>
                        <div className="Posts bo-rad flex-center">
                            <span className="d-block">
                                <p className=' line h20 w40p'></p>
                            </span>
                            <span>
                                <p className=' line h10 w50p'></p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ProfileSttingsLoading() { //settings/Settings.js
    return (
        <div className="main-box d-flex" >
            <div className="top-profile d-flex gap-20px">
                <div className="img-prof-media" style={{ height: "120px !important" }}>
                    <div className="bo-rad w80p h80 line">
                    </div>
                </div>
                <div className="all-info-prof">
                    <div className="my-name">
                        <p className="line h20 w200p"></p>
                        <div>
                            <p className="line h10 w150p" style={{ display: 'block', marginTop: '20px' }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ChatHeaderLoading() {
    return (
        <div className="info-chat">
            <div className="chat-profile line square h45 w45p"></div>
            <div className="name-chat-fr">
                <span className='line h20 w140p'></span>
                <p className='line h10 w80p'></p>
            </div>
            <div>
                <p className='line h30 w30p btn-close-dissc'></p>
            </div>
        </div>
    )
}
function Messsage1ItemLoading() {
    return (
        <div className="message-text">
            <div className="info-message d-flex ali-center">
                <div className="msg-user-profile line"></div>
                <span className="line h20 w100p"></span>&nbsp;&nbsp;
                <span className="line h15 w100p"></span>
            </div>
            <div className="message-box bo-rad">
                <span className="line h15 w100p"></span>
                <span className="line h15 w80p"></span>
            </div>
        </div>
    )
}
function Messsage2ItemLoading() {
    return (
        <div className="message-text-ri">
            <div className="info-message info2 d-flex ali-center">
                <div className="msg-user-profile line"></div>
                <span className="line h20 w100p"></span>&nbsp;&nbsp;
                <span className="line h15 w100p"></span>
            </div>
            <div className="message-box2 bo-rad">
                <span className="line h15 w100p"></span>
                <span className="line h15 w80p"></span>
            </div>
        </div>
    )
}


function GroupDetailsHeaderLoading() {
    return (
        <div className="top-profile d-flex gap-20px w-full">
            <div className="img-prof-media">
                <div className="bo-rad po-rel line w200p h200 square" >
                </div>
            </div>
            <div className="all-info-prof w-full">
                <div className="infor-profile flex-between w-full">
                    <div className="inf-prof-addr w-full">
                        <div className="my-name d-flex ali-center gap-5px line w300p h25" style={{ maxWidth: "100%" }}></div>
                        <div className="address-prof d-flex gap-5px w-full">
                            <div className="w-full" style={{ padding: '20px' }}>
                                <p className="line h15 w100p"></p>
                                <p className="line h15"></p>
                                <p className="line h15 w500p"></p>
                                <p className="line h15 w80p"></p>
                                <p className="line h15 w120p"></p>
                            </div>
                        </div>
                    </div>

                    {/* ================================================ */}
                    <div className="button-prof button1-prof d-flex gap-5px">
                        <p className="button-cancel w100p h40 line"></p>
                        <p className="button-cancel w100p h40 line"></p>
                        <p className="button-cancel w50p h40 line"></p>
                    </div>
                    {/* ================================================ */}
                </div>

                <div className="follow-info flex-between">
                    <div className="number d-flex gap-20px">
                        <div className="Friends-num bo-rad flex-center">
                            <span className="d-block">
                                <p className=' line h20 w40p'></p>
                            </span>
                            <span>
                                <p className=' line h10 w50p'></p>
                            </span>
                        </div>
                        <div className="Posts bo-rad flex-center">
                            <span className="d-block">
                                <p className=' line h20 w40p'></p>
                            </span>
                            <span>
                                <p className=' line h10 w50p'></p>
                            </span>
                        </div>
                        <div className="Posts bo-rad flex-center">
                            <span className="d-block">
                                <p className=' line h20 w40p'></p>
                            </span>
                            <span>
                                <p className=' line h10 w50p'></p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export {
    PeapleItemLoading, PostItemLoading,
    FriendItemLoading, CommentItemLoading,
    ReplyCommentItemLoading, NotificationItemLoading,
    RequestItemLoading, GroupItemLoading,
    HeaderProfileLoading, ProfileHeaderLoading,
    ProfileSttingsLoading, ChatHeaderLoading,
    Messsage1ItemLoading, Messsage2ItemLoading,
    GroupDetailsHeaderLoading
}

