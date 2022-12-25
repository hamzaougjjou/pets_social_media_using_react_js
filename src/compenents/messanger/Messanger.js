import React from 'react'
import { useParams } from 'react-router-dom';
import FrindItem from '../friends/FriendItem';
import Discussion from './Discussion';
import NoMessage from './NoMessage';
import Users from './Users';

function Messanger(props) {

    let friends = [
        { id: '1', name: 'Whiskers 1', type: 'cat', image: './image/profile.jpg', status: 1 },
        { id: '2', name: 'Whiskers 2', type: 'cat', image: './image/profile.jpg', status: 0 },
        { id: '4', name: 'Whiskers 3', type: 'dog', image: null, status: 1 },
        { id: '7', name: 'Whiskers 4', type: 'dog', image: null, status: 0},
        { id: '15', name: 'Oscar', type: 'dog', image: null, status: 0 },
        { id: '3', name: 'Fluffy', type: 'cat', image: './image/profile.jpg', status: 1 },
        { id: '13', name: 'Angel', type: 'dog', image: null, status: 1 },
        { id: '5', name: 'Smudge', type: 'cat', image: './image/profile.jpg', status: 1 },
        { id: '6', name: 'Zoe or Zoey', type: 'cat', image: './image/profile.jpg', status: 1 },
        { id: '14', name: 'Rocky', type: 'cat', image: null, status: 0 },
        { id: '8', name: 'Olaa', type: 'dog', image: './image/profile.jpg', status: 1 },
        { id: '9', name: 'Rocky', type: 'cat', image: './image/profile.jpg', status: 1 },
        { id: '10', name: 'Charlie', type: 'cat', image: './image/profile.jpg', status: 1 },
        { id: '11', name: 'Piper', type: 'dog', image: './image/profile.jpg', status: 0 },
    ]
    
    const listItems = friends.map((friend) =>
        <FrindItem key={friend.id} data={friend} />
    );

    const { id } = useParams();
    // console.log(id);
    let whatRender = <NoMessage res={listItems} />;
    if (!(id === undefined || id === null)) {
        whatRender = <>
            <Discussion />
        </>;
    }

    return (
        <div className="body d-flex">
            <main className="main-profile main-chat">
                <h1>Chat</h1>
                <div className="body-posts body-ch d-flex">
                    <Users />
                    {/* <!-- ///////////////////// --> */}
                    {whatRender}

                </div>
            </main>
        </div>
    )
}
//onclick
export default Messanger;