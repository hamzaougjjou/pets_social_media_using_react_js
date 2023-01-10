import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Messanger from './Messanger';
import profile from "./../../assets/img/profile.jpg"

function UserItem(props) {
    // { id: 1, img: '="./image/image1.jpg', name: 'Luna Nala', category: 'cat', dateChat: '1 day' } ,

    let id = `/messanger/${props.data.id} `;

    return (
        <>
            <NavLink to={id} style={{ cursor: "pointer", textDecoration: "none" }}>
                <div className="freind  freind-ch flex-between">
                    <div className="d-flex gap-10px">
                        <div className="enable bo-rad-haf"></div>
                        <img src={profile} alt="" />
                        <div className="info-name">
                            <p className="fo-name-per">{props.data.name}</p>
                            <span className="fo-bot-na"> {props.data.category} </span>
                        </div>
                    </div>
                    <div className="date-chat">{props.data.dateChat}</div>
                </div>

                <div className='line-bott-msg'></div>

            </NavLink>
            <Routes>
                <Route exact path='/messanger/:id' element={<Messanger />} ></Route>
            </Routes>
        </>
    )
}

export default UserItem