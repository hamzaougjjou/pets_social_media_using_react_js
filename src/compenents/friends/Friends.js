import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { mainUrl } from '../../API';
import { FriendItemLoading } from '../loading/Index';
import FrindItem from './FriendItem'

function Friends() {

    // const [isLoaded, setIsLoaded] = useState(false);
    // const [loadingReq, setLoadingReq] = useState(false);
    const [friendsInfo, setFriendsInfo] = useState([]);
    const friendsData = useSelector(state => state.getFriends);

    useEffect(() => {
        if (friendsData.loading === false && friendsData.error === false) {
            setFriendsInfo(friendsData.friends)
        }

    }, [friendsData.friends]);

    let listFriends = '';

    // useEffect(() => {

    if (friendsData.loading === false && friendsData.error === false) {
        listFriends = friendsInfo.map((friend) => {
            return <FrindItem key={friend.user_id} friend={friend} />
        });
    }
    // }, [friendsInfo]);


    const oldFriensdData = [...friendsInfo];
    const searchUserFunc = (e) => {
        // console.log(e.target.value.trim());
        console.log(oldFriensdData);
        if (e.target.value.trim().length != 0) {
            let searched_array = friendsInfo.filter((filter) => {
                return filter.name.includes(e.target.value.trim());
            });
            setFriendsInfo(searched_array);
        } else {
            setFriendsInfo(oldFriensdData);
        }

    }

    return (

        <>
            <div className="search-right">
                <span
                    className="search-icon center-el-hr svg-icon svg-icon-2 svg-icon-gray-700 position-absolute top-50 translate-middle-y ms-4">
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                            transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                        <path
                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                            fill="currentColor"></path>
                    </svg>
                </span>
                <input onChange={searchUserFunc} type="text" name="" id="" placeholder="Search..." className="bor-col bo-rad trans" />
            </div>

            <div className="freinds">

                {
                    !friendsData.loading ?
                        listFriends
                        :
                        <>
                            <FriendItemLoading />
                            <FriendItemLoading />
                            <FriendItemLoading />
                            <FriendItemLoading />
                            <FriendItemLoading />
                            <FriendItemLoading />
                            <FriendItemLoading />
                            <FriendItemLoading />
                            <FriendItemLoading />
                        </>
                }
            </div>
        </>
    )
}

export default Friends