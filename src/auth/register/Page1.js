import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function Page1() {
    
    const regState = useSelector( state => state.RegisterReducer );

    return (
        <div className='sub-reg-c'>

            <input type="text" name="" placeholder="Full Name" defaultValue={ regState.fullName } />
            <input type="email" name="" placeholder="Email" defaultValue={ regState.email } />
            <input type="password" name="" placeholder="Password" defaultValue={ regState.password } />
            <input type="password" name="" placeholder="Confirm Password" defaultValue={ regState.confirmPassword } />
            <div className='frgt-pss-reg-c'>
                <Link to="/auth/forget-password">Forgot Password ?</Link>
            </div>

        </div>
    )
}

export default Page1