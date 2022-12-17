import React from 'react'
import { NavLink } from 'react-router-dom'

function Posts() {
    return (
        <div className="body-posts d-flex po-rel">
            <div className="left-post-side left-post-side1 main-box">
                <NavLink to="/posting">
                    <button className="new-post button-ok w-full">New Post</button>
                </NavLink>
                <ul className="posts-option">
                    <li><a href="#" className="active-pos">
                        <span className="svg-icon svg-icon-2 m-0">
                            <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="7" y="2" width="14" height="16" rx="3"
                                    fill="currentColor"></rect>
                                <rect x="3" y="6" width="14" height="16" rx="3" fill="currentColor"></rect>
                            </svg>
                        </span>All Posts
                    </a></li>
                    <li>
                        <a href="#">
                            <span className="svg-icon svg-icon-3">
                                <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3"
                                        d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>
                            New Posts
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="svg-icon svg-icon-2 me-3">
                                <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3"
                                        d="M21 22H14C13.4 22 13 21.6 13 21V3C13 2.4 13.4 2 14 2H21C21.6 2 22 2.4 22 3V21C22 21.6 21.6 22 21 22Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M10 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H10C10.6 2 11 2.4 11 3V21C11 21.6 10.6 22 10 22Z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>
                            Old Posts
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="svg-icon svg-icon-2 me-3">
                                <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3"
                                        d="M7.16973 20.95C6.26973 21.55 5.16972 20.75 5.46972 19.75L7.36973 14.05L2.46972 10.55C1.56972 9.95005 2.06973 8.55005 3.06973 8.55005H20.8697C21.9697 8.55005 22.3697 9.95005 21.4697 10.55L7.16973 20.95Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M11.0697 2.75L7.46973 13.95L16.9697 20.85C17.8697 21.45 18.9697 20.65 18.6697 19.65L13.1697 2.75C12.7697 1.75 11.3697 1.75 11.0697 2.75Z"
                                        fill="currentColor"></path>
                                </svg>
                            </span>
                            Favourites Posts
                        </a>
                    </li>
                    <li> <a href="#">
                        <span className="svg-icon svg-icon-2 me-3">
                            <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                    fill="currentColor"></path>
                                <path opacity="0.5"
                                    d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                    fill="currentColor"></path>
                                <path opacity="0.5"
                                    d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        Trash</a></li>
                </ul>
            </div>

            <div className="right-post-side main-box">

                <div className="container-pos">
                    <h3>Trip Reminder. Thank you for flying with us!</h3>

                    <div className="post-opt bor-bott-col" id="pos-page">
                        <div className="info-post-opt flex-between" id="inf">
                            <div className="text-info-po d-flex flex-1">
                                <div className="img-pro-pos bo-rad"></div>
                                <div className="name-pos">
                                    <div><span>Abdulaziz Najeeb</span><span className="bo-rad-haf"></span><span
                                        className="last">1 day ago</span></div>
                                    <p className="para" id="para">With resrpect, i must disagree with Mr.Zinsser. We
                                        all know
                                        the most part of important part....</p>
                                    <p className="para2" id="para2">Read Less&nbsp;
                                        <span className="svg-icon svg-icon-5 m-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="ico-righ-po d-flex ali-center gap-10px">
                                <span>24 Jun 2022, 5:30 pm</span>
                                <a href="#"><span className="svg-icon svg-icon-2 m-0 d-flex">
                                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span></a>
                                <a href="#"><span className="svg-icon svg-icon-2 m-0 d-flex">
                                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span></a>
                                <a href="#"><span className="svg-icon svg-icon-2 m-0 d-flex">
                                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd"
                                            d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span></a>
                                <a href="#">
                                    <span className="svg-icon svg-icon-2 m-0 d-flex">
                                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect x="10" y="10" width="4" height="4" rx="2" fill="currentColor">
                                            </rect>
                                            <rect x="10" y="3" width="4" height="4" rx="2" fill="currentColor">
                                            </rect>
                                            <rect x="10" y="17" width="4" height="4" rx="2" fill="currentColor">
                                            </rect>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* <!-- ///////////// --> */}

                        <div className="post-image d-flex bor bo-rad post2-image">
                            <div className="top-post d-flex bor-bott-col">
                                <div className="left-post d-flex">
                                    <div className="content-post">
                                        <div className="fo-pos fo-pos2">Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit.
                                            Corporis,
                                            atque assumenda non quis dignissimos aperiam hic consectetur.
                                            Praesentium accusamus est odit architecto saepe repellendus.
                                            Odit quod expedita quibusdam. Consequuntur, commodi.<br /><br />
                                            Corporis,
                                            atque assumenda non quis dignissimos aperiam hic consectetur.
                                            Praesentium accusamus est odit architecto saepe repellendus.
                                            Odit quod expedita quibusdam. Consequuntur, commodi.
                                            Corporis,
                                            atque assumenda non quis dignissimos aperiam hic consectetur.
                                            Praesentium accusamus est odit architecto saepe repellendus.
                                            atque assumenda non quis dignissimos aperiam hic consectetur.
                                            Praesentium accusamus est odit architecto saepe repellendus.
                                            Odit quod expedita quibusdam. Consequuntur, commodi.
                                            Corporis,
                                            atque assumenda non quis dignissimos aperiam hic consectetur.
                                            Praesentium accusamus est odit architecto saepe repellendus.
                                            atque assumenda non quis dignissimos aperiam hic consectetur.
                                            Praesentium accusamus est odit architecto saepe repellendus.
                                            Odit quod expedita quibusdam. Consequuntur, commodi.
                                            Corporis,
                                            atque assumenda non quis dignissimos aperiam hic consectetur.
                                            Praesentium accusamus est odit architecto saepe repellendus.
                                            atque assumenda non quis dignissimos aperiam hic consectetur.
                                            Praesentium accusamus est odit architecto saepe repellendus.
                                            Odit quod expedita quibusdam. Consequuntur, commodi.
                                            Corporis,
                                            atque assumenda non quis dignissimos aperiam hic consectetur.
                                            Praesentium accusamus est odit architecto saepe repellendus.
                                            Odit quod expedita quibusdam. Consequuntur, commodi.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-post">
                                <div className="like-comm d-flex">
                                    <div className="like flex-center bo-rad">
                                        <div className="tooltip bo-rad flex-center">1.3K</div>
                                        <i className="fa-solid fa-thumbs-up"></i>
                                    </div>
                                    <div className="comment-post flex-center bo-rad">
                                        <div className="tooltip bo-rad flex-center">500</div>
                                        <i className="fa-solid fa-comment"></i>
                                    </div>
                                    <div className="shar flex-center bo-rad">
                                        <div className="tooltip bo-rad flex-center">10</div>
                                        <i className="fa-solid fa-share-from-square"></i>
                                    </div>
                                </div>
                                <div className="write-comm" id="comments3">
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
                                                    Illo ab quisquam eum unde tempora, &#128513; suscipit earum
                                                    laudantium
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
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                                                    &#128516;
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
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                    &#9996;
                                                    Repellat corrupti similique dolores? Illo.
                                                </div>
                                                <div className="time-com d-flex">
                                                    <span>Reply</span>
                                                    <span>40m</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- //////////////////////////////////////////////// --> */}
                    <div className="post-opt bor-bott-col" id="pos2-page">
                        <div className="info-post-opt flex-between" id="inf2" >
                            <div className="text-info-po d-flex flex-1">
                                <div className="img-pro-pos bo-rad"></div>
                                <div className="name-pos">
                                    <div><span>Abdulaziz Najeeb</span><span className="bo-rad-haf"></span><span
                                        className="last">5 day ago</span></div>
                                    <p className="para" id="para_2">With resrpect, i must disagree with Mr.Zinsser.
                                        We all know
                                        the most part of important part....</p>
                                    <p className="para2" id="para2_2">Read Less&nbsp;
                                        <span className="svg-icon svg-icon-5 m-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="ico-righ-po d-flex ali-center gap-10px">
                                <span>19 Jun 2022, 5:30 pm</span>
                                <a href="#" className="star"><span className="svg-icon svg-icon-2 m-0 d-flex">
                                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span></a>
                                <a href="#"><span className="svg-icon svg-icon-2 m-0 d-flex">
                                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.0077 19.2901L12.9293 17.5311C12.3487 17.1993 11.6407 17.1796 11.0426 17.4787L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5C4 3.89543 4.89543 3 6 3H17C18.1046 3 19 3.89543 19 5V17.5536C19 19.0893 17.341 20.052 16.0077 19.2901Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span></a>
                                <a href="#"><span className="svg-icon svg-icon-2 m-0 d-flex">
                                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd"
                                            d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span></a>
                                <a href="#">
                                    <span className="svg-icon svg-icon-2 m-0 d-flex">
                                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect x="10" y="10" width="4" height="4" rx="2" fill="currentColor">
                                            </rect>
                                            <rect x="10" y="3" width="4" height="4" rx="2" fill="currentColor">
                                            </rect>
                                            <rect x="10" y="17" width="4" height="4" rx="2" fill="currentColor">
                                            </rect>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* <!-- ///////////// --> */}
                        <div className="post-image d-flex bor bo-rad post2-image">
                            <div className="top-post d-flex bor-bott-col">
                                <div className="left-post d-flex">
                                    <div className="content-post">
                                        <div className="fo-pos fo-pos2">Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit.
                                            Corporis,
                                            atque assumenda non quis dignissimos aperiam hic consectetur.
                                            Praesentium accusamus est odit architecto saepe repellendus.
                                            Odit quod expedita quibusdam. Consequuntur, commodi.
                                        </div>
                                        <div className="img-cont-pos bo-rad">
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
                                        <i className="fa-solid fa-comment"></i>
                                    </div>
                                    <div className="shar flex-center bo-rad">
                                        <div className="tooltip bo-rad flex-center">5.8K</div>
                                        <i className="fa-solid fa-share-from-square"></i>
                                    </div>
                                </div>
                                {/* <!-- /////////////////////////////////// --> */}
                                <div className="write-comm" id="comments">
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
                                                    Illo ab quisquam eum unde tempora, &#128513; suscipit earum
                                                    laudantium
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
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                                                    &#128516;
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
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                    &#9996;
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
                            </div>
                        </div>
                    </div>
                    {/* <!-- ////////////////////////////////////////// --> */}
                </div>

            </div>
            {/* <!-- ///////////////in media //////////////// --> */}



            {/* <!-- //////////////////////////////////////// for--> */}
        </div>
    )
}

export default Posts