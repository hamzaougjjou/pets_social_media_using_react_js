import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function Page1({ initState, setInitState }) {

    console.log("page 1 ", initState);

    return (
        <div className='sub-reg-c'>
            <input
                onChange={(e1) => setInitState({ ...initState, "name": e1.target.value.trim() })}
                type="text" placeholder="Full Name" />
            <input
                onChange={(e2) => setInitState({ ...initState, "email": e2.target.value.trim() })}
                type="email" placeholder="Email" />
            <input
                onChange={(e3) => setInitState({ ...initState, "password": e3.target.value.trim() })}
                type="password" placeholder="Password" />
            <input
                onChange={(e4) => setInitState({ ...initState, "confirm_password": e4.target.value.trim() })}
                type="password" placeholder="Confirm Password" />
            <div className='frgt-pss-reg-c'>
                <Link to="/auth/forget-password">Forgot Password ?</Link>
            </div>
        </div>
    )
}

export default Page1