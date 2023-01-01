import React from 'react'
// import './../../assets/css/regProfileImg.css';
import addImgAvatar from './../../assets/img/addImgAvatar.png';

function Page3() {
    return (
        <div className='sub-reg-c'>
            <div className="main_container">
                <div className="profile_container">
                    <img className="background_img" src={addImgAvatar} alt="background" />
                    <img className="user_img" src={addImgAvatar} alt="user img" />
                    <h1>Hamza ougjjou</h1>
                </div>
            </div>
        </div>
    )
}

export default Page3