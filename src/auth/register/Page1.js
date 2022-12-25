import React from 'react'
import { Link } from 'react-router-dom'

function Page1() {
    return (
        <>
            <input type="text" name="" placeholder="Full Name" />
            <input type="email" name="" placeholder="Email" /><br /><br />
            <input type="password" name="" placeholder="Password" /><br /><br />
            <input type="password" name="" placeholder="Confirm Password" /><br /><br />
            <Link to="/auth/forget-password">Forgot Password ?</Link>
           
        </>
    )
}

export default Page1