import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { mainUrl } from '../../API';
import Loading from '../Loading';
import { GroupItemLoading, PeapleItemLoading, PostItemLoading } from '../loading/Index';
import Post from '../posts/Post';
import Posts from '../posts/Posts';
import GroupItem from "./../groups/GroupItem";
import PeopleItem from "./../people/PeopleItem";
import { useHistory } from "react-router-dom"

function Search() {
    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================

    const [searchParams, setSearchParams] = useSearchParams();
    const [first, setFirst] = useState(true);
    let searchInpt = useRef();

    const [searchLoading, setSearchLoading] = useState(true);
    const [searchFinished, setSearchFinished] = useState(false);
    const [searchType, setSearshType] = useState('all');

    const [data, setData] = useState({
        'users': [],
        'groups': [],
        'posts': []
    });

    let stl = {
        opacity: '1',
        width: '100%',
        margin: '0px auto',
        justifyContent: 'center',
        padding: "20px"
    }

    const activLblStyle = { backgroundColor: 'var(--main-color)', color: '#fff' }

    const updateSearchParams = (q) => {
        setSearchParams({ 'type': q });
        setSearshType(q);
    }



    const searchFunc = async () => {

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const urlQuery = params.get('type');

        let searchText = searchInpt.current.value.trim();
        if (searchText.length === 0) return false;

        setSearchLoading(true);
        setFirst(false);
        setSearchFinished(false);
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        if (!loadingToken)
            await axios.get(`${mainUrl}/search/${urlQuery}/${searchText}`, config)
                .then(res => {
                    // console.log(res.data);
                    setData({
                        'groups': res.data.data.groups,
                        'users': res.data.data.users,
                        'posts': res.data.data.posts
                    });

                }).catch(err => {
                    console.error(err);
                    console.error("Ooops Somthing went wrong ..");
                }).
                finally(() => {
                    setSearchLoading(false);
                    setSearchFinished(true);
                })
        console.log("data => ", data);
    }

    useEffect(() => {
        searchFunc();
    }, [searchType]);

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
                        <input ref={searchInpt} type="text" name="" id="" placeholder="Search..." className="bor-col bo-rad trans" />
                    </div>
                    <button onClick={searchFunc} className="button-ok bot-req bot-fr">
                        Search Somthing&nbsp;
                        <i className="fa-solid fa-search"></i>
                    </button>
                </div>

                {
                    first ?
                        <h1 style={{ padding: '40px', fontFamily: '"Gill Sans", sans-serif' }}>
                            type somthing to search for
                        </h1>
                        :
                        <div className="body-search1">
                            <div className="options d-flex">
                                <label style={searchType === 'all' ? activLblStyle : {}} htmlFor="all" onClick={() => { updateSearchParams('all') }}>All</label>
                                <label style={searchType === 'users' ? activLblStyle : {}} htmlFor="Users" onClick={() => { updateSearchParams('users') }}>Users</label>
                                <label style={searchType === 'groups' ? activLblStyle : {}} htmlFor="Groups" onClick={() => { updateSearchParams('groups') }}>Groups</label>
                                <label style={searchType === 'posts' ? activLblStyle : {}} htmlFor="posts" onClick={() => { updateSearchParams('posts') }}>Posts</label>
                            </div>
                            <br />
                            {/* <Loading /> */}
                            <div className="option-search1">

                                {(searchType != 'groups' && searchType != 'posts') &&
                                    <ul>
                                        {
                                            (searchFinished) ?
                                                (data.users.length > 0) ?
                                                    <>
                                                        <h2>Users</h2>
                                                        <div className='body boxs-freind boxs-group'>
                                                            {
                                                                data.users.map(user => <PeopleItem key={user.id} user={user} />)
                                                            }
                                                        </div>
                                                        <br />
                                                        <div className="flex-center">
                                                            <NavLink onClick={() => { updateSearchParams('users') }} to="?type=users" className="button-cancel bot-req bot-fr bot-fr1">
                                                                View All Users
                                                            </NavLink>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <h2>Users </h2>
                                                        <h4 style={{padding:'20px'}}>Nothing to show</h4>
                                                    </>
                                                :
                                                <>
                                                    <h2>Users</h2>
                                                    <div className='body boxs-freind boxs-group'>

                                                        <PeapleItemLoading />
                                                        <PeapleItemLoading />
                                                        <PeapleItemLoading />

                                                    </div>
                                                </>
                                        }
                                    </ul>
                                }

                                {(searchType != 'users' && searchType != 'posts') &&
                                    <ul>
                                        {
                                            (searchFinished) ?
                                                (data.groups.length > 0) ?
                                                    <>
                                                        <h2> Groups</h2>
                                                        <div className='body boxs-freind boxs-group'>
                                                            {

                                                                data.groups.map((group, i) => {
                                                                    return <GroupItem group={group} key={i} />
                                                                })

                                                            }
                                                        </div>
                                                        <br />
                                                        <div className="flex-center">
                                                            <NavLink onClick={() => { updateSearchParams('groups') }} to="?type=groups" className="button-cancel bot-req bot-fr bot-fr1">
                                                                View All Groups
                                                            </NavLink>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <h2>Groups </h2>
                                                        <h4 style={{padding:'20px'}}>Nothing to show</h4>
                                                    </>
                                                :
                                                <>
                                                    <h2> Groups</h2>
                                                    <div className='body boxs-freind boxs-group'>
                                                        <GroupItemLoading />
                                                        <GroupItemLoading />
                                                        <GroupItemLoading />
                                                    </div>
                                                </>
                                        }
                                    </ul>
                                }

                                {(searchType != 'groups' && searchType != 'users') &&
                                    <ul style={{overflow:'hidden'}}>
                                        {
                                            (searchFinished) ?
                                                (data.posts.length > 0) ?
                                                    <>
                                                        <h2>Posts</h2>
                                                        <div className='body'>
                                                            <>
                                                                {

                                                                    data.posts.map((post, i) => {

                                                                        let user = {
                                                                            "id": post.user_id,
                                                                            "name": post.name,
                                                                            "profile_img": post.profile_img,
                                                                            "created_at": post.created_at,
                                                                            "time": post.time
                                                                        };
                                                                        if (post.post_type === "text")
                                                                            return <Post key={i} postType="text" post={post} user={user} />;

                                                                        else if (post.post_type === "image")
                                                                            return <Post key={i} postType="image" post={post} user={user} />;

                                                                    }) //map

                                                                }
                                                            </>
                                                        </div>
                                                        <br />
                                                        <div className="flex-center">
                                                            <NavLink onClick={() => { updateSearchParams('posts') }} to="?type=posts" className="button-cancel bot-req bot-fr bot-fr1">
                                                                View All Posts
                                                            </NavLink>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <h2>Posts </h2>
                                                        <h4 style={{padding:'20px'}}>Nothing to show</h4>
                                                    </>
                                                :
                                                <>
                                                    <h2>Posts </h2>
                                                    <div className='body boxs-freind boxs-group'>
                                                        <PostItemLoading />
                                                    </div>
                                                </>
                                        }
                                    </ul>
                                }

                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Search;