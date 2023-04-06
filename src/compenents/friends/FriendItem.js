import React from 'react'
import { NavLink } from 'react-router-dom'
import { storageUrl } from '../../API';
import profile from "./../../assets/img/profile.jpg"


function FrindItem(props) {

    let profile_img = props.friend.profile_img;

    let user_status = 1; // online or offline
    if (props.friend.last_login_sec > 50)
        user_status = 0;
    if (profile_img === null) {
        if (user_status === 1) {
            return (

                <div className="freind">
                    <div className="enable bo-rad-haf"></div>
                    <div className="profile-friend profile-friend-color1 flex-center bo-rad">
                        {props.friend.name[0].toUpperCase()}
                    </div>
                    <div className="info-name">
                        <NavLink to={"/user/"+props.friend.user_id} >
                            <p className="fo-name-per">
                                {props.friend.name}
                            </p>
                        </NavLink>
                        <span className="fo-bot-na">
                            {props.friend.breed_name}
                        </span>
                    </div>
                    <NavLink to={`/messanger/${props.friend.user_id}`}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </NavLink>
                </div>
            )
        }
        else {
            return (

                <div className="freind">
                    <div className="profile-friend profile-friend-color1 flex-center bo-rad">
                        {props.friend.name[0].toUpperCase()}
                    </div>
                    <div className="info-name">
                        <NavLink to={"/user/"+props.friend.user_id} >
                            <p className="fo-name-per">
                                {props.friend.name}
                            </p>
                        </NavLink>

                        <span className="fo-bot-na">
                            {props.friend.breed_name}
                        </span>
                    </div>
                    <NavLink to={`/messanger/${props.friend.user_id}`}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </NavLink>
                </div>
            )
        }

    }
    else {
        if (user_status === 1) {
            return (

                <div className="freind">
                    <div className="enable bo-rad-haf"></div>
                    <div style={{ backgroundImage: `URL('${storageUrl}/${props.friend.profile_img}')` }}
                        className="profile-friend profile-friend-color1 flex-center bo-rad">
                    </div>
                    <div className="info-name">
                        <NavLink to={"/user/"+props.friend.user_id} >
                            <p className="fo-name-per">
                                {props.friend.name}
                            </p>
                        </NavLink>
                        <span className="fo-bot-na">{props.friend.breed_name}</span>
                    </div>
                    <NavLink to={`/messanger/${props.friend.user_id}`}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </NavLink>
                </div>
            )
        }
        else {
            return (

                <div className="freind">
                    {/* <img src={storageUrl + "/" + props.friend.profile_img} alt="" /> */}
                    <div style={{ backgroundImage: `URL('${storageUrl}/${props.friend.profile_img}')` }}
                        className="profile-friend profile-friend-color1 flex-center bo-rad">
                    </div>
                    <div className="info-name">
                        <NavLink to={"/user/"+props.friend.user_id} >
                            <p className="fo-name-per">
                                {props.friend.name}
                            </p>
                        </NavLink>
                        <span className="fo-bot-na">{props.friend.breed_name}</span>
                    </div>
                    <NavLink to={`/messanger/${props.friend.user_id}`}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </NavLink>
                </div>
            )
        }

    }
}

export default FrindItem