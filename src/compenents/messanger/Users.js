import React from 'react'
import SearchUser from './SearchUser';
import UserItem from './UserItem'

function Users() {
    let users = [
        { id: 1, img: './../image/profile.jpg', name: 'Luna Nala', category: 'cat', dateChat: '1 day' } ,
        { id: 2, img: './../image/profile.jpg', name: 'Luna Nala2', category: 'dog', dateChat: '1 week' } ,
        { id: 3, img: './../image/profile.jpg', name: 'Luna Nala3', category: 'cat', dateChat: '1 day' } ,
        { id: 4, img: './../image/profile.jpg', name: 'Luna Nala4', category: 'dog', dateChat: '15 m' } ,
        { id: 5, img: './../image/profile.jpg', name: 'Luna Nala5', category: 'cat', dateChat: '12 day' },
        { id: 6, img: './../image/profile.jpg', name: 'Luna Nala2', category: 'dog', dateChat: '1 week' } ,
        { id: 7, img: './../image/profile.jpg', name: 'Luna Nala3', category: 'cat', dateChat: '1 day' } ,
        { id: 8, img: './../image/profile.jpg', name: 'Luna Nala4', category: 'dog', dateChat: '15 m' } ,
        { id: 9, img: './../image/profile.jpg', name: 'Luna Nala5', category: 'cat', dateChat: '12 day' },
        { id: 10, img: './../image/profile.jpg', name: 'Luna Nala2', category: 'dog', dateChat: '1 week' } ,
        { id: 11, img: './../image/profile.jpg', name: 'Luna Nala3', category: 'cat', dateChat: '1 day' } ,
        { id: 12, img: './../image/profile.jpg', name: 'Luna Nala4', category: 'dog', dateChat: '15 m' } ,
        { id: 13, img: './../image/profile.jpg', name: 'Luna Nala5', category: 'cat', dateChat: '12 day' },
        { id: 14, img: './../image/profile.jpg', name: 'Luna Nala2', category: 'dog', dateChat: '1 week' } ,
        { id: 15, img: './../image/profile.jpg', name: 'Luna Nala3', category: 'cat', dateChat: '1 day' } ,
        { id: 16, img: './../image/profile.jpg', name: 'Luna Nala4', category: 'dog', dateChat: '15 m' } ,
        { id: 17, img: './../image/profile.jpg', name: 'Luna Nala5', category: 'cat', dateChat: '12 day' }
];
    return (

        <div className="left-chat-side main-box">
         <SearchUser />
            <div className="freinds freinds-chat">

                {
                    users.map((user) => (
                        <UserItem key={user.id} data={user} />
                    )
                    )
                }


            </div>
        </div>
    )
}

export default Users