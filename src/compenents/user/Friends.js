import React, { useEffect, useState } from 'react'

import SearchPeople from '../people/SearchPeople'
import FriendItem from './FriendItem'
import { mainUrl } from "./../../API"
import axios from 'axios';
import { PeapleItemLoading } from '../loading/Index';
import { useSelector } from 'react-redux'
import FriendsNotExists from './FriendsNotExists';
function Friends({userId}) {

  const [friends, setFriends] = useState([]);
  const [friendsData , setFriendsData ] = useState(
    {
      "loading" : true,
      "error":false
    }
  );

  useEffect(() => {
    const getFriendsInfo = async () => {
      let authInfo = JSON.parse(localStorage.getItem('authInfo'));
      let token = authInfo.token;
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      await axios.get(mainUrl + `/user/${userId}/friends`, config)
        .then(info => {
          setFriends(info.data.friends);
          setFriendsData({ ...friendsData , "error":false })
        }).catch(err => {
          console.log("error");
          setFriendsData({ ...friendsData , "error":true })
        }).finally( ()=>{
          setFriendsData({ ...friendsData , "loading":false })
        })
    }
    getFriendsInfo();
  } , [] );

  let listFriends = '';
  if (friendsData.loading === false && friendsData.error === false) {
    listFriends = friends.map((friend) =>
      <FriendItem key={friend.user_id} friend={friend} />
    );
  }


  return (
    <div style={{ position: "relative", minHeight: '500px' }}>
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