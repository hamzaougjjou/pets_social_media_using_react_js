import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function Page1( props) {

    const dispatch = useDispatch();


    return (
        <div className='sub-reg-c'>
            <input
                onChange={(e) => props.setFullName(e.target.value.trim())}
                type="text" placeholder="Full Name" />
            <input
                onChange={(e) => props.setEmail(e.target.value.trim())}
                type="email" placeholder="Email" />
            <input
                onChange={(e) => props.setPassword(e.target.value.trim())}
                type="password" placeholder="Password" />
            <input
                onChange={(e) => props.setConfirmPassword(e.target.value.trim())}

                type="password" placeholder="Confirm Password" />
            <div className='frgt-pss-reg-c'>
                <Link to="/auth/forget-password">Forgot Password ?</Link>
            </div>
        </div>
    )
}

export default Page1