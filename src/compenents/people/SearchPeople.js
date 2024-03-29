import React, { useRef } from 'react'

function SearchPeople({ setSearchQuery }) {
    const searchInpt = useRef()
    let searchFunc = ()=>{
        // console.log( searchInpt.current.value.trim() );
        setSearchQuery( searchInpt.current.value.trim() )
    }
    const inptOnChange = (e)=>{
        if( e.target.value.trim().length === 0)
        setSearchQuery('')
    }
    return (
        <div className='peaple-search-c'>
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
                <input onChange={ inptOnChange } ref={searchInpt} type="text" name="" id="" placeholder="Search..." className="bor-col bo-rad trans" />
            </div>
            <button onClick={searchFunc} className="button-ok bot-req bot-fr">
                Search someone&nbsp;
                <i className="fa-solid fa-search"></i>
            </button>
        </div>

    )
}

export default SearchPeople;