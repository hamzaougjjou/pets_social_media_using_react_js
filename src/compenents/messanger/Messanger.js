import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FrindItem from '../friends/FriendItem';
import Discussion from './Discussion';
import NoMessage from './NoMessage';
import Users from './Users';
// import profile from "./../../assets/img/profile.jpg"
import { useSelector } from 'react-redux';
import HeaderFriends from './HeaderFriends';

function Messanger() {

    const [friendsInfo, setFriendsInfo] = useState([]);
    const friendsData = useSelector(state => state.getFriends);

    const { id } = useParams();
    const [paramId, setParamId] = useState(id);
    useEffect(() => {
        setParamId(id);
    }, [paramId]);

    useEffect(() => {
        if (friendsData.loading === false && friendsData.error === false) {
            setFriendsInfo(friendsData.friends)
        }
    }, [friendsData.friends]);

    const listItems = friendsInfo.map((friend) =>
        <FrindItem key={friend.user_id} friend={friend} />
    );

    // console.log(id);

    return (
        <div className="body d-flex messanger">
            <main className="main-profile main-chat">
                <h1>Chat</h1>
                <HeaderFriends />
                <div className="body-posts body-ch d-flex">
                    <div className='chats'>
                        <Users setParamId={setParamId} />
                    </div>

                    <div className='discussion'>
                        {
                            (paramId != undefined || paramId != null) ?
                                <Discussion userId={paramId} setParamId={setParamId} />
                                :
                                <NoMessage res={listItems} />
                        }
                    </div>

                </div>
            </main>
        </div>
    )
}
//onclick
export default Messanger;