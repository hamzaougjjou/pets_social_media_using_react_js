import React from 'react'
import Friends from './friends/Friends';

function RightAside() {
    return (
        <aside className="aside-right">
            <div className="search-right">
                <span
                    className="search-icon center-el-hr svg-icon svg-icon-2 svg-icon-gray-700 position-absolute top-50 translate-middle-y ms-4">
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                            transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                        <path
                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                            fill="currentColor"></path>
                    </svg>
                </span>
                <input type="text" name="" id="" placeholder="Search..." className="bor-col bo-rad trans" />
            </div>

            {/* <div className="popular-Hashtag bo-rad">
                <h3>Popular Hashtag #</h3>
                <ul className="hash">
                    <li className="d-flex">
                        <span className="d-flex svg-icon svg-icon-2 mt-0 me-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor">
                                </rect>
                                <path
                                    d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        <a href="#">#How_to_use_Django </a>
                    </li>
                    <li className="d-flex">
                        <span className="d-flex svg-icon svg-icon-2 mt-0 me-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor">
                                </rect>
                                <path
                                    d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        <a href="#">#Republic_of_Yemen </a>
                    </li>
                    <li className="d-flex">
                        <span className="d-flex svg-icon svg-icon-2 mt-0 me-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor">
                                </rect>
                                <path
                                    d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        <a href="#">#Be_the_best_and_don't_give_up</a>
                    </li>
                    <li className="d-flex">
                        <span className="d-flex svg-icon svg-icon-2 mt-0 me-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor">
                                </rect>
                                <path
                                    d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        <a href="#">#Programming_is_the_work_of_the_future</a>
                    </li>
                    <li className="d-flex">
                        <span className="d-flex svg-icon svg-icon-2 mt-0 me-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor">
                                </rect>
                                <path
                                    d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        <a href="#">#How_to_use_React </a>
                    </li>
                </ul>
            </div> */}
            {/* <div className="popular-word bo-rad">
                <h3>Key Words</h3>
                <span className="bo-rad">Yemen</span>
                <span className="bo-rad">Programming</span>
                <span className="bo-rad">Html</span>
                <span className="bo-rad">Css</span>
                <span className="bo-rad">JavaScript</span>
                <span className="bo-rad">Php</span>
                <span className="bo-rad">React</span>
                <span className="bo-rad">Bootstrap</span>
                <span className="bo-rad">Alazy</span>
            </div> */}

            <Friends />
        </aside>
    )
}


export default RightAside;