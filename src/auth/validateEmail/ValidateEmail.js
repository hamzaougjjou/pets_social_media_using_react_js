import React from 'react'
import { Link } from 'react-router-dom'

function ValidateEmail() {
  return (
    <div className="container container-input d-flex po-rel">
      <div className="left-sign-in flex-center">
        <div className="contain-input">
          <div className="titl">
            <h2>Insert code</h2>
            <span>check your email . we send code to your email</span>
          </div>
          {/* <!-- <div className="line-titl flex-center"></div> --> */}
          <form action="" className="form-inp">
            <input type="number" name="" id="" placeholder="Code ..." />
            {/* <!-- <input type="password" name="" id="" placeholder="Password"> --> */}
            <button type="submit">
              <Link to="/" className="button-ok butt-inpt w-full">
                Complete register
              </Link>
            </button>
          </form>
          <div className="sign-up">
            You don’t have Account? <Link to="/auth">Back to Login ?</Link>
          </div>
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

export default ValidateEmail