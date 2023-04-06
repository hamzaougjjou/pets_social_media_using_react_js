import React, { useRef } from 'react'
import "./../../assets/css/connection.css";

function Connection() {
    const popup = useRef();

    const hidePopUp = () => {
        popup.current.style.animationName = 'hidPopUp';
        setTimeout(() => { popup.current.style.display = 'none'; }, 500)
    }

    return (
        <div className="popup" ref={popup}>
            <h2>You not are online </h2>
            <span className="close" onClick={hidePopUp}>&times;</span>
            <div className="content">
                You are not online  . please check your internet connection
            </div>
        </div>
    )
}

export default Connection