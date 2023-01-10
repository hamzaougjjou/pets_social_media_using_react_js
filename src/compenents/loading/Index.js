
import React from 'react'
import "./../../assets/css/loading.css"
function PeapleItemLoading() {
    return (
        <>
            <div className="box-freind main-box d-flex">
                <div className="img-box-freind po-rel">
                    <div class="square circle w80p h80"></div>
                </div>
                <div className="box">
                    <div class="line w25"></div>
                    <span class="line w50"></span>
                </div>
                <div className="follow-box-freind d-flex gap-10px">
                    <div className="first-follow bor-dash bo-rad flex-center">
                        <span class="line h10 w50"></span>
                        <span class="line h8 w50"></span>
                    </div>
                    <div className="first-follow bor-dash bo-rad flex-center">
                        <span class="line h10 w50"></span>
                        <span class="line h8 w50"></span>
                    </div>
                </div>
                <div className="button-box-freind flex-between w-full">
                    <div class="line h25 w50"></div>
                    <div class="line h25 w50"></div>
                </div>
            </div>
        </>
    )
}

function PostHeaderLoading() {
    return (
        <div className="profile-person flex-between">
            <div className=" d-flex ali-center gap-10px">
                <div class="square h50 w50p"></div>
                <div className="name-date">
                    <p>
                        <span className="d-block fo-name-per">
                            <div class="line h15 w100p"></div>
                        </span>
                    </p>
                    <span className="fo-bot-na">
                        <div class="line h10 w60p"></div>
                    </span>
                </div>
            </div>
            <div>
                <span>
                    <div class="line h20 w30p"></div>
                </span>
            </div>
        </div>
    )
}
function FriendItemLoading() {
    return (
        <div className="freind" >
            <div class="line h45 w45p profile-friend bo-rad"></div>
            <div className="info-name">
                <div class="line h10 w60"></div>
                <div class="line h10 w50"></div>
            </div>
            <div>
                <div class="line h25 w25p" style={{ margin: '0 13px 13px 0' }}></div>
            </div>
        </div>
    )
}

function PostItemLoading() {
    return (
        <div className="posts-container">
            <div className="post-image d-flex bor bo-rad">
                <div className="top-post d-flex bor-bott-col">

                    <div className="left-post d-fle w-full" >
                        <PostHeaderLoading />
                        <div className="w-full" style={{ padding: '20px' }}>

                            <div className="w-full" style={{ paddingBottom: '20px' }}>
                                <div class="line h10 w75"></div>
                                <div class="line h10 w75"></div>
                                <div class="line h10 w-full"></div>
                                <div class="line h10 w75"></div>
                                <div class="line h10 w25"></div>
                            </div>

                            <div className="w-full">
                                <div class="line h300p w-full"></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bottom-post " style={{ padding: '20px 0px 10px 0' }}>
                    <div className="d-flex flex-around w-full">
                        <div class="line h30 w40p"></div>
                        <div class="line h30 w40p"></div>
                        <div class="line h30 w40p"></div>
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
            <div class="square w40p h40 image-fr bo-rad"></div>
            <div className="text-com fo-pos bo-rad">
                <div className="name-com fo-name-per">
                    <div class="line w100p"></div>
                </div>
                <div className="tx-com">
                    <div class="line w200p"></div>
                </div>
                <div className="time-com d-flex">
                    <div class="line h8 w40p" style={{ marginTop: '5px' }}></div>
                    <div class="line h8 w40p" style={{ marginTop: '5px' }}></div>
                </div>
            </div>
        </div>
    )
}

function ReplyCommentItemLoading() {
    return (
        <div className="com reply d-flex">
            {/* <img src={profile} alt="" className="image-fr bo-rad" /> */}
            <div class="square w40p h40 image-fr bo-rad"></div>
            <div className="text-com fo-pos bo-rad">
                <div className="name-com fo-name-per">
                    <div class="line w100p"></div>
                </div>
                <div className="tx-com">
                    <div class="line w200p"></div>
                </div>
                <div className="time-com d-flex">
                    <div class="line h8 w40p" style={{ marginTop: '5px' }}></div>
                    <div class="line h8 w40p" style={{ marginTop: '5px' }}></div>
                </div>
            </div>
        </div>
    )
}
function NotificationItemLoading() {
    return (
        <div className="notice-text">
            <div className="comm-notic2 d-flex ali-center">
                <span class="square w45p h45 bo-rad circle"></span>
                <div className="txt-notic">
                    <span><div class="line h15 w300p"></div></span>
                    <div className="info-notic d-flex ali-center gap-5px">
                        <span><div class="line h8 w100p"></div></span>
                        <span class="square w30p h30 bo-rad circle AA bo-rad-haf image-fr-30"></span>

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
                <span class="square w45p h45 bo-rad"></span>
                <div className="info-req flex-between flex-1">
                    <div className="desc-user-req">
                        <p>
                            <div class="line h15 w100p"></div>
                        </p>
                        <span>
                            <div class="line h10 w100p"></div>
                        </span>
                    </div>
                    <div className="date-req d-flex flex-col">
                        <span>
                            <div class="line h8 w100p"></div>
                        </span>
                        <span>
                            <div class="line h8 w100p"></div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bott-req d-flex gap-10px">
                <div class="line h30 w100p"></div>
                <div class="line h30 w100p"></div>
            </div>
        </li>
    )
}

function GroupItemLoading() {
    return (
        <div className="box-freind box-group-l main-box d-flex">
            <div className="img-box-freind img-box-group flex-between w-full">
                <div className="img-group2">
                    <div class="square w100p h100 bo-rad"></div>
                </div>
                <div class="line h20 w60p"></div>
            </div>
            <p className='group-link'>
                <div className="info-box-freind info-box-group d-flex">
                    <p class="line h20 w200p"></p>
                    <span class="line h10 w60p"></span>
                </div>
            </p>
            <div className="follow-box-freind d-flex gap-10px w-full">
                <div className="first-follow first-group bor-dash bo-rad flex-center">
                    <span class="line h20 w60p"></span>
                    <span class="line h10 w40p"></span>
                </div>
                <div className="first-follow first-group bor-dash bo-rad flex-center">
                    <span class="line h20 w60p"></span>
                    <span class="line h10 w40p"></span>
                </div>
            </div>
            <div className="member-group d-flex w-full">
                <div class="square w40p h40 bo-rad circle image-fr bo-rad-haf"></div>
                <div class="square w40p h40 bo-rad circle image-fr bo-rad-haf"></div>
                <div class="square w40p h40 bo-rad circle image-fr bo-rad-haf"></div>
                <div class="square w40p h40 bo-rad circle image-fr bo-rad-haf"></div>
                <div class="square w40p h40 bo-rad circle image-fr bo-rad-haf"></div>
            </div>
            <div className="button-box-freind flex-between w-full">
                <div class="line h40 w100p"></div>
                <div class="line h40 w100p"></div>

            </div>
        </div>
    )
}
export {
    PeapleItemLoading, PostItemLoading,
    FriendItemLoading, CommentItemLoading,
    ReplyCommentItemLoading, NotificationItemLoading,
    RequestItemLoading, GroupItemLoading
}



/*
 <div class="box">
                <div class="skeleton">
                    <div class="skeleton-left">
                        <div class="line h17 w40 m10"></div>
                        <div class="line"></div>
                        <div class="line h8 w50"></div>
                        <div class="line  w75"></div>
                    </div>
                    <div class="skeleton-right">
                        <div class="square circle"></div>
                    </div>
                </div>
            </div>
*/