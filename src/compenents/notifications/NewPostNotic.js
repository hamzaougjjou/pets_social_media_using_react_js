import React from 'react'

function NewPostNotic() {
    return (
        <div className="notice-text">
            <div className="comm-notic d-flex ali-center">
                <span className="svg-icon svg-icon-2 svg-icon-gray-500 trans">
                    <svg width="23" height="23" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3"
                            d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
                            fill="currentColor"></path>
                        <path
                            d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
                            fill="currentColor"></path>
                    </svg>
                </span>
                <div className="txt-notic">
                    <span>There are 2 new posts</span>
                    <div className="info-notic d-flex ali-center gap-5px">
                        <span>Added at 4:23 PM by</span>
                        <img src="./image/profile.jpg" alt="" className="bo-rad-haf image-fr-30" />
                    </div>
                </div>
            </div>
            {/* <div className="repley flex-between ali-center">
                <span>Meeting with customer</span>
                <span className="bo-rad flex-center">Application Design</span>
                <div className="img-repley d-flex ali-center">
                    <img src="./image/image2.jpg" alt="" className="bo-rad-haf image-fr-30" />
                    <img src="./image/image3.jpg" alt="" className="bo-rad-haf image-fr-30" />
                    <img src="./image/image4.jpg" alt="" className="bo-rad-haf image-fr-30" />
                </div>
                <span className="bo-rad flex-center">In Progress</span>
                <button className="but-view">View</button>
            </div> */}
        </div>
    )
}

export default NewPostNotic