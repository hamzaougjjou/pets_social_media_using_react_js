import React from 'react'
import { Link } from 'react-router-dom'
import profile from "./../../assets/img/profile.jpg"

function PeopleItem() {
    return (

        <div className="box-freind main-box d-flex">
            <div className="img-box-freind po-rel">
                <img src={ profile } alt="" className="bo-rad-haf" />
                <div className="enable bo-rad-haf enable-fr"></div>
            </div>
            <div className="info-box-freind d-flex">
                <Link to="/profile">Luna Nala</Link>
                <span>Art Director at Novica Co.</span>
            </div>
            <div className="follow-box-freind d-flex gap-10px">
                <div className="first-follow bor-dash bo-rad flex-center">
                    <span>14,560K</span>
                    <span>Followers</span>
                </div>
                <div className="first-follow bor-dash bo-rad flex-center">
                    <span>10</span>
                    <span>Mutual friends</span>
                </div>
            </div>
            <div className="button-box-freind flex-between w-full">
                <button className="button-cancel bot-req bot-fr bot-fr1">Delete&nbsp;<i className="fa-solid fa-user-slash"></i></button>
                <button className="button-ok bot-req bot-fr">
                    Add friend&nbsp;
                    <i className="fa-solid fa-user-plus"></i>
                </button>
            </div>
        </div>

    )
}

export default PeopleItem