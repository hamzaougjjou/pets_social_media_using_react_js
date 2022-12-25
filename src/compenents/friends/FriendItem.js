import React from 'react'
import { NavLink } from 'react-router-dom'

function FrindItem(props) {


    if (props.data.image == null) {
        if (props.data.status == 1) {
            return (

                <div className="freind">
                    <div className="enable bo-rad-haf"></div>
                    <div className="profile-friend profile-friend-color1 flex-center bo-rad">
                        {props.data.name[0].toUpperCase()}
                    </div>
                    <div className="info-name">
                        <p className="fo-name-per">
                            {props.data.name}
                        </p>
                        <span className="fo-bot-na">
                            {props.data.type}
                        </span>
                    </div>
                    <NavLink to={`/messanger/${props.data.id}`}>
                        <i class="fa-solid fa-paper-plane"></i>
                    </NavLink>
                </div>
            )
        }
        else {
            return (

                <div className="freind">
                    <div className="profile-friend profile-friend-color1 flex-center bo-rad">
                        {props.data.name[0].toUpperCase()}
                    </div>
                    <div className="info-name">
                        <p className="fo-name-per">
                            {props.data.name}
                        </p>
                        <span className="fo-bot-na">
                            {props.data.type}
                        </span>
                    </div>
                    <NavLink to={`/messanger/${props.data.id}`}>
                        <i class="fa-solid fa-paper-plane"></i>
                    </NavLink>
                </div>
            )
        }

    }
    else {
        if (props.data.status == 1) {
            return (

                <div className="freind">
                    <div className="enable bo-rad-haf"></div>
                    <img src="./image/profile.jpg" alt="" />
                    <div className="info-name">
                        <p className="fo-name-per">
                            {props.data.name}
                        </p>
                        <span className="fo-bot-na">{props.data.type}</span>
                    </div>
                    <NavLink to={`/messanger/${props.data.id}`}>
                        <i class="fa-solid fa-paper-plane"></i>
                    </NavLink>
                </div>
            )
        }
        else {
            return (

                <div className="freind">
                    <img src="./image/profile.jpg" alt="" />
                    <div className="info-name">
                        <p className="fo-name-per">
                            {props.data.name}
                        </p>
                        <span className="fo-bot-na">{props.data.type}</span>
                    </div>
                    <NavLink to={`/messanger/${props.data.id}`}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </NavLink>

                </div>
            )
        }

    }
}

export default FrindItem