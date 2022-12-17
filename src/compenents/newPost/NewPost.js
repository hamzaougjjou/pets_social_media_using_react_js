import { logDOM } from '@testing-library/react'
import React from 'react'

function NewPost() {



    // let puple_show = (puple4, effPup4, massegPuple4, start) => {
    //     // console.log(345678345);
    // }

    return (
        <>
            {/* <div className="back-puple4" id="puple4">
                <div className="effect-puple effect-puple4 d-flex ali-center" id="eff-pup4"  > */}

                    <div className="puple-message puple-post back-col-wh bo-rad" id="masseg-puple4" style={{opacity:'1'}}>
                        <div className="top-puple top-puple2 flex-between">
                            <h2 className="flex-center">
                                <span className="svg-icon svg-icon-3 flex-center m-right-5">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3"
                                            d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span>
                                New Post
                            </h2>
                            <div className="close flex-center" >
                                <span className="svg-icon svg-icon-1">
                                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                            transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                            transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="body-puple body-puple-post">
                            <div className="image-post">
                                <img src="./image/profile.jpg" alt="" className="bo-rad" />
                            </div>
                            <h3>hamza ougjjou</h3>
                            <form action="">
                                <div className="box-wr">
                                    <textarea name="" id="" placeholder="Write your post..."
                                        className="bor-col bo-rad d-block input-shap w-full wr-post"></textarea>
                                    <div className="icon-wr-post">
                                        <input type="file" name="" id="file-post" />
                                        <label htmlFor="file-post"><i className="fa-solid fa-images"></i></label>
                                        <i className="fa-solid fa-user-tag"></i>
                                        <i className="fa-solid fa-face-smile"></i>
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                </div>
                                <div className="submit-po d-flex">
                                    <input type="checkbox" name="" id="check-public" className="check-box" /> {/*checked*/}
                                    <label htmlFor="check-public" className="check-shap">
                                        Public
                                    </label>
                                    <div className="button-help d-flex">
                                        <button className="button-cancel">Cancel</button>
                                        <input type="submit" value="Post" className="button-ok" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                {/* </div>
            </div> */}
        </>
    )
}

export default NewPost