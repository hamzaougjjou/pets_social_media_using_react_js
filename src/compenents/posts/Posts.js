import React, { useState } from 'react'
import Comments from './Comments'
import SimplePostHeader from './SimplePostHeader';
import like from "./../../assets/img/like.png"
import cat1 from "./../../assets/img/cat1.jpg"

function Posts() {
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

                            <div className="img-cont-pos bo-rad" style={{ backgroundImage: `url('${cat1}')` }}></div>
                        </div>
                    </div>
                </div>

                <div className="bottom-post">
                    <div className="like-comm d-flex">
                        <div className="like flex-center bo-rad">
                            <div className="tooltip bo-rad flex-center">50.3K</div>
                            {/* <i className="fa-solid fa-thumbs-up"></i> */}
                            <img src={like} alt='like' height='25px' width='25px' />
                        </div>
                        <div className="comment-post flex-center bo-rad" >
                            <div className="tooltip bo-rad flex-center">10.4K</div>
                            <i className="fa-solid fa-comment" onClick={handlerComment}>

                            </i>
                        </div>
                        <div className="shar flex-center bo-rad">
                            <div className="tooltip bo-rad flex-center">5.8K</div>
                            <i className="fa-solid fa-share-from-square"></i>
                        </div>
                    </div>

                    {comm}

                </div>
            </div>
            {/* <div className="line-bott"></div> */}

        </div>
    )
}



export default Posts;
export { Posts as MainPost} ;