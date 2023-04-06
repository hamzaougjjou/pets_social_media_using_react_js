import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FrindItem from '../friends/FriendItem';
import Discussion from './Discussion';
import NoMessage from './NoMessage';
import Users from './Users';
import profile from "./../../assets/img/profile.jpg"
import { useSelector } from 'react-redux';

function Messanger() {

    const [friendsInfo, setFriendsInfo] = useState([]);
    const friendsData = useSelector(state => state.getFriends);

    const { id } = useParams();
    const [paramId, setParamId] = useState(id);
    
    useEffect(() => {
        if (friendsData.loading === false && friendsData.error === false) {
            setFriendsInfo(friendsData.friends)
        }
    }, [friendsData.friends]);

    const listItems = friendsInfo.map((friend) =>
        <FrindItem key={friend.user_id} friend={friend} />
    );

    // console.log(id);
    let whatRender = <NoMessage res={listItems} />;
    if ( paramId != undefined || paramId!=null){
        whatRender = <>
            <Discussion userId={paramId} />
        </>;
    }

    return (
        <div className="body d-flex">
            <main className="main-profile main-chat">
                <h1>Chat</h1>
                <div className="body-posts body-ch d-flex">
                    <Users setParamId={setParamId} />
                    {/* <!-- ///////////////////// --> */}
                    {whatRender}
                </div>
            </main>
        </div>
    )
}
//onclick
export default Messanger;