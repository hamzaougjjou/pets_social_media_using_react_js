import React from 'react'

function Comments() {
    function height_comm(name_id, heit) {
        // height_comm('comments','662px')
        if (document.getElementById(name_id).style.height === '0px') {
            document.getElementById(name_id).style.height = heit;
        }
        else {
            document.getElementById(name_id).style.height = '0px';
        }
    }
    
    return (
        <div className="write-comm" id="comments" style={ {height:"662px", } }>
            <div className="form d-flex bo-rad">
                <textarea name="" id="" placeholder="Write a comment..."
                    className="bor-col bo-rad d-block input-shap"></textarea>
                <div className="emoje"><i className="fa-solid fa-face-smile"></i></div>
                <label htmlFor="inputTag">
                    <i className="fa-solid fa-camera"></i>
                    <input id="inputTag" type="file" />
                </label>
                <button><i className="fa-solid fa-paper-plane"></i></button>
            </div>
            <div className="comments">
                <div className="com d-flex">
                    <img src="./image/image11.jpg" alt="" className="image-fr bo-rad" />
                        <div className="text-com fo-pos bo-rad">
                            <div className="name-com fo-name-per">Alex Moreno</div>
                            <div className="tx-com">
                                Lorem ipsum dolor sit amet consectetur&#128515;
                            </div>
                            <div className="time-com d-flex">
                                <span>Reply</span>
                                <span>10m</span>
                            </div>
                        </div>
                </div>
                <div className="com d-flex">
                    <img src="./image/image12.jpg" alt="" className="image-fr bo-rad" />
                        <div className="text-com fo-pos bo-rad">
                            <div className="name-com fo-name-per">Alex Moreno</div>
                            <div className="tx-com">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Illo ab quisquam eum unde tempora, &#128513; suscipit earum laudantium
                                voluptatum possimus? Ut.
                            </div>
                            <div className="time-com d-flex">
                                <span>Reply</span>
                                <span>20m</span>
                            </div>
                        </div>
                </div>
                <div className="com reply d-flex">
                    <img src="./image/image1.jpg" alt="" className="image-fr bo-rad" />
                        <div className="text-com fo-pos bo-rad">
                            <div className="name-com fo-name-per">Alex Moreno</div>
                            <div className="tx-com">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit &#128516;
                            </div>
                            <div className="time-com d-flex">
                                <span>Reply</span>
                                <span>25m</span>
                            </div>
                        </div>
                </div>
                <div className="com d-flex">
                    <img src="./image/image6.jpg" alt="" className="image-fr bo-rad" />
                        <div className="text-com fo-pos bo-rad">
                            <div className="name-com fo-name-per">Alex Moreno</div>
                            <div className="tx-com">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. &#9996;
                                Repellat corrupti similique dolores? Illo.
                            </div>
                            <div className="time-com d-flex">
                                <span>Reply</span>
                                <span>40m</span>
                            </div>
                        </div>
                </div>
                <div className="com d-flex">
                    <img src="./image/image5.jpg" alt="" className="image-fr bo-rad" />
                        <div className="text-com fo-pos bo-rad">
                            <div className="name-com fo-name-per">Alex Moreno</div>
                            <div className="tx-com">
                                Lorem ipsum dolor sit amet
                            </div>
                            <div className="time-com d-flex">
                                <span>Reply</span>
                                <span>50m</span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default  Comments;