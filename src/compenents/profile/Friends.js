import React, { useEffect, useState } from 'react'

import SearchPeople from '../people/SearchPeople'
import FriendItem from './FriendItem'
import { mainUrl } from "./../../API"
import axios from 'axios';
import { PeapleItemLoading } from '../loading/Index';
import { useSelector } from 'react-redux';
import FriendsNotExists from './FriendsNotExists';
function Friends() {

  const [friends, setFriends] = useState([]);
  const friendsData = useSelector(state => state.getFriends);

  useEffect(() => {
      if (friendsData.loading === false && friendsData.error === false) {
        setFriends(friendsData.friends)
      }

  }, [friendsData.friends]);

  let listFriends = '';
  if (friendsData.loading === false && friendsData.error === false) {
      listFriends = friends.map((friend) =>
          <FriendItem key={friend.user_id} friend={friend} />
      );
  }


  return (
    <div style={{position:"relative", minHeight:'500px'}}>
      <SearchPeople />
      <div className="boxs-freind" >
        {
          friendsData.loading && !friendsData.error ? 
          <>
            <PeapleItemLoading />
            <PeapleItemLoading />
            <PeapleItemLoading />
            <PeapleItemLoading />
            <PeapleItemLoading />
          </> :

            <>
              {
                friends.length > 0 ?
                listFriends
                :
                <FriendsNotExists />
              }
            </>
        }
      </div>
    </div>
  )
}

export default Friends