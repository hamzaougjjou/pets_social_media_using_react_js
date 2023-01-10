import React from 'react'
import profile from "./../../assets/img/profile.jpg"

function AccountInfo() {
    return (
        <>
            <div className="image-post">
                <img src= { profile } alt="" className="bo-rad" />
            </div>
            <h3>hamza ougjjou</h3>
        </>
    )
}

export default AccountInfo