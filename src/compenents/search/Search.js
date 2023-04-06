import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Loading from '../Loading';
import Posts from '../posts/Posts';
import GroupItem from "./../groups/GroupItem";
import PeopleItem from "./../people/PeopleItem";

function Search() {
    let stl = {
        opacity: '1',
        width: '100%',
        margin: '0px auto',
        justifyContent: 'center',
        padding: "20px"
    }

    let { type } = useParams();
    console.log(type);

    return (
        <div style={stl}>
            <div className=" back-col-wh bo-rad" style={{ opacity: '1' }}>

                <div className='peaple-search-c'>


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
                        <input type="text" name="" id="" placeholder="Search..." className="bor-col bo-rad trans" />
                    </div>
                    <button className="button-ok bot-req bot-fr">Search Somthing&nbsp;<i className="fa-solid fa-search"></i></button>
                </div>


                <div className="body-search1">
                    <div className="options d-flex">
                        <label htmlFor="all">All</label>
                        <label htmlFor="Users">Users</label>
                        <label htmlFor="Pages">Pages</label>
                        <label htmlFor="Groups">Groups</label>
                    </div>
                    <br />
                   <Loading />
                    <div className="option-search1">
                        <ul>
                            {/* <li>Users</li> */}
                            {/* <li className="d-flex gap-10px">
                                <img src="./image/image1.jpg" alt="" className="image-fr bo-rad" />
                                <div className="desc-user">
                                    <p>Karina Clark</p>
                                    <span>Marketing Manager</span>
                                </div>
                            </li> */}
                            <br />
                            <h2>Users</h2>
                            <li className='body boxs-freind boxs-group'>
                                {/* <PeopleItem />
                                <PeopleItem />
                                <PeopleItem />
                                <PeopleItem />
                                <PeopleItem />
                                <PeopleItem />
                                <PeopleItem /> */}
                            </li>
                            <br />
                            <div className="flex-center">
                                <NavLink to="?type=users" className="button-cancel bot-req bot-fr bot-fr1">
                                    View All Users
                                </NavLink>
                            </div>

                        </ul>
                        <ul>

                            <br />
                            <h2>Groups</h2>
                            <div className='body boxs-freind boxs-group'>
                                {/* <GroupItem />
                                <GroupItem />
                                <GroupItem />
                                <GroupItem />
                                <GroupItem />
                                <GroupItem /> */}
                            </div>
                            <br />
                            <div className="flex-center">
                                <NavLink to="?type=groups" className="button-cancel bot-req bot-fr bot-fr1">
                                    View All Groups
                                </NavLink>
                            </div>
                        </ul>
                        <ul>

                            <br />
                            <h2>Posts</h2>
                            <div className='body'>
                                {/* <Posts />
                                <Posts />
                                <Posts />
                                <Posts />
                                <Posts /> */}
                            </div>
                            <br />
                            <div className="flex-center">
                                <NavLink to="?type=posts" className="button-cancel bot-req bot-fr bot-fr1">
                                    View All Posts
                                </NavLink>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;