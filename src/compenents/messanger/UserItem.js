import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Messanger from './Messanger';
import profile from "./../../assets/img/profile.jpg"

function UserItem(props) {
    // { id: 1, img: '="./image/image1.jpg', name: 'Luna Nala', category: 'cat', dateChat: '1 day' } ,

    let id = `/messanger/${props.friend.user_id} `;
    const changeConversationId = ()=>{
        props.setParamId(props.friend.user_id);
    }

    return (
        <>
            <NavLink to={id} style={{ cursor: "pointer", textDecoration: "none" }} onClick={changeConversationId}>
                <div className="freind  freind-ch flex-between">
                    <div className="d-flex gap-10px">
                        <div className="enable bo-rad-haf"></div>
                        <img src={profile} alt="" />
                        <div className="info-name">
                            <p className="fo-name-per">{props.friend.name}</p>
                            <span className="fo-bot-na"> {props.friend.breed_name} </span>
                        </div>
                    </div>
                    <div className="date-chat">3 min ago</div>
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