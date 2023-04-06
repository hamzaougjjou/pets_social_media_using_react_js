import React from 'react'

function SearchUser2() {
    return (
        <div className="inp po-rel inp-search w-full">
            <span
                className="svg-icon svg-icon-2 ms-4 po-abs center-el-hr">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                        transform="rotate(45 17.0365 15.1223)" fill="currentColor">
                    </rect>
                    <path
                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                        fill="currentColor"></path>
                </svg>
            </span>
            <input type="text" placeholder="Search Users.." className="w-full" />
        </div>
    )
}

export default SearchUser2