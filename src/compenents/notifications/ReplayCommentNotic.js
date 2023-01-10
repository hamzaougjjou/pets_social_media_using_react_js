import React from 'react'
import profile from "./../../assets/img/profile.jpg"

function ReplayCommentNotic() {
    return (
        <div className="notice-text">
            <div className="comm-notic d-flex ali-center">
                <span className="svg-icon svg-icon-2 svg-icon-gray-500 trans">
                    <svg width="23" height="23" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                            fill="currentColor"></path>
                        <path opacity="0.3"
                            d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                            fill="currentColor"></path>
                    </svg>
                </span>
                <div className="txt-notic">
                    <span>There are 2:</span>
                    <div className="info-notic d-flex ali-center gap-5px">
                        <span>Added at 4:23 PM by</span>
                        <img src={ profile } alt="" className="bo-rad-haf image-fr-30" />
                    </div>
                </div>
            </div>
            <div className="repley-mess d-flex ali-center bo-rad bor-dash">
                <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3"
                            d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z"
                            fill="currentColor"></path>
                        <path
                            d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z"
                            fill="currentColor"></path>
                    </svg>
                </span>
                <div className="img-repley flex-1">
                    <span className="title-mass">Meeting with customer</span>
                    <div className="mess-not">Meeting with customer Meeting with customer</div>
                </div>
                <button className="button-ok re-butt">Repley <i
                    className="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    )
}

export default ReplayCommentNotic