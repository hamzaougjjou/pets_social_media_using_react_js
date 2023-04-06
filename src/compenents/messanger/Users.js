import React, { useEffect, useState } from 'react'
import SearchUser from './SearchUser';
import UserItem from './UserItem'
import profile from "./../../assets/img/profile.jpg"
import { useSelector } from 'react-redux';


function Users(props) {

    const [friendsInfo, setFriendsInfo] = useState([]);
    const friendsData = useSelector(state => state.getFriends);

    useEffect(() => {
        if (friendsData.loading === false && friendsData.error === false) {
            setFriendsInfo(friendsData.friends)
        }

    }, [friendsData.friends]);

    let listFriends = '';
    if (friendsData.loading === false && friendsData.error === false) {
        listFriends = friendsInfo.map((friend) =>
            <UserItem key={friend.user_id} friend={friend} setParamId={props.setParamId} />
        );
    }

    return (

        <div className="left-chat-side main-box">
            <SearchUser />
            <div className="freinds freinds-chat">

                {
                    !friendsData.loading ?
                        listFriends
                        :
                        <>
                            <h2>Loading ...</h2>
                        </>
                }
            </div>
        </div>
    )
}

export default Users