import React from 'react'
import { Link } from 'react-router-dom'
import img_input from "./../../assets/img/img_input.jpg"
import icons8_bing_256 from "./../../assets/img/icons8_bing_256.png"


function ForgotPassword() {
    return (
        <div className="container container-input d-flex po-rel">
            <div className="left-sign-in flex-center">
                <div className="contain-input">
                    <div className="titl">
                        <h2>Reset Password</h2>
                        <span>Send reset code to email</span>
                    </div>
                    {/* <!-- <div className="line-titl flex-center"></div> --> */}
                    <form action="" className="form-inp">
                        <input type="email" name="" id="" placeholder="Email" />
                        <a href="/auth">Back to Login ?</a>
                        <button type="submit">
                            <Link to="/auth/insert-reset-code" >
                            <span  className="button-ok butt-inpt w-full">
                                Send
                                </span>
                            </Link>
                        </button>
                    </form>
                    <div className="sign-up">
                        You don’t have Account? <Link to="/auth/register">Sign up</Link>
                    </div>
                </div>
            </div>
            <div className="right-sign-in">
                <img src= { img_input } alt="" />
                <div className="icon-log po-abs">
                    <img src={ icons8_bing_256 }  alt="" />
                    <span>Slash Pets</span>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword