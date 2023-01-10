import React, { useState } from 'react'
import "./../../../../node_modules/video-react/dist/video-react.css"; // import css

import cat1 from "./../../../assets/img/cat1.jpg"
import video1 from "./../../../assets/videos/video1.mp4"

import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    VolumeMenuButton
} from 'video-react';
import Comments from '../Comments';
import SimplePostHeader from '../SimplePostHeader';

function VideoItem() {

    const [comm, setComment] = useState('');
    const [isCommShow, setIsCommShow] = useState(false);

    let handlerComment = () => {
        if ( !isCommShow) {
            setComment(<Comments />);
            setIsCommShow(true);
        } else {
            setComment('');
            setIsCommShow(false);
        }
    }
    return (
        <div className="posts-container">

            <div className="post-image d-flex bor bo-rad">
                <div className="top-post d-flex bor-bott-col">
                    <div className="left-post d-flex">
                        
                        <SimplePostHeader />
                        
                        <div className="content-post">
                            <div className="fo-pos">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Corporis,
                                atque assumenda non quis dignissimos aperiam hic consectetur.
                                Praesentium accusamus est odit architecto saepe repellendus.
                                Odit quod expedita quibusdam. Consequuntur, commodi.</div>
                            <div className="bo-rad">

                                <Player poster={cat1}>
                                    <source src={video1} />

                                    <ControlBar>
                                        <ReplayControl seconds={10} order={1.1} />
                                        <ForwardControl seconds={30} order={1.2} />
                                        <VolumeMenuButton inabled />
                                    </ControlBar>
                                </Player>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-post">
                    <div className="like-comm d-flex">
                        <div className="like flex-center bo-rad">
                            <div className="tooltip bo-rad flex-center">50.3K</div>
                            <i className="fa-solid fa-thumbs-up"></i>
                        </div>
                        <div className="comment-post flex-center bo-rad" >
                            <div className="tooltip bo-rad flex-center">10.4K</div>
                            <i className="fa-solid fa-comment" onClick={handlerComment}></i>
                        </div>
                        <div className="shar flex-center bo-rad">
                            <div className="tooltip bo-rad flex-center">5.8K</div>
                            <i className="fa-solid fa-share-from-square"></i>
                        </div>
                    </div>

                    {comm}
                    {/* <Comments /> */}

                </div>
            </div>
            {/* <div className="line-bott"></div> */}

        </div>
    )
}

export default VideoItem