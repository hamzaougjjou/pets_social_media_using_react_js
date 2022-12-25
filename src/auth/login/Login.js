import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <div className="container container-input d-flex po-rel">
            <div className="left-sign-in flex-center">
                <div className="contain-input">
                    <div className="titl">
                        <h2>Sign In</h2>
                        <span>Your Social Campaigns</span>
                    </div>
                    {/* <!-- <div className="line-titl flex-center"></div> --> */}
                    <form action="" className="form-inp">
                        <input type="email" name="" id="" placeholder="Email" />
                        <input type="password" name="" id="" placeholder="Password" />
                        <NavLink to="forget-password">Forgot Password ?</NavLink>
                        <button type="submit"><a href="./" className="button-ok butt-inpt w-full">Sign in</a></button>
                    </form>
                    <div className="sign-up">
                        You don’t have Account? <NavLink to="/auth/register">Sign up</NavLink>
                    </div>
                </div>
            </div>
            <div className="right-sign-in">
                <img src="image/img-input.jpg" alt="" />
                <div className="icon-log po-abs">
                    <img src="image/icons8_bing_256.png" alt="" />
                    <span>Slash Pets</span>
                </div>
            </div>
        </div>
    )
}

export default Login