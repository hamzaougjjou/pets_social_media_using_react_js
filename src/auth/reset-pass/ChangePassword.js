import React from 'react'
import { Link } from 'react-router-dom'

function ChangePassword() {
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
                        <input type="password" name="" id="" placeholder="Password" />
                        <input type="password" name="" id="" placeholder="confirme Password" />
                        <a href="login.html">Back to Login ?</a>
                        <button type="submit">
                            <Link to="/" className="button-ok butt-inpt w-full">
                                change password
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
            <div className="right-sign-in">
                <img src="./image/img-input.jpg" alt="" />
                <div className="icon-log po-abs">
                    <img src="./image/icons8_bing_256.png" alt="" />
                    <span>Slash Pets</span>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword