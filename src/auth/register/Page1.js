import React from 'react'
import { Link } from 'react-router-dom'

function Page1() {
    return (
        <div className='sub-reg-c'>

            <input type="text" name="" placeholder="Full Name" />
            <input type="email" name="" placeholder="Email" />
            <input type="password" name="" placeholder="Password" />
            <input type="password" name="" placeholder="Confirm Password" />
            <div className='frgt-pss-reg-c'>
                <Link to="/auth/forget-password">Forgot Password ?</Link>
            </div>

        </div>
    )
}

export default Page1