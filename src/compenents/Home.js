

import React, { useEffect, useState } from 'react'
import LeftAside from './LeftAside'
import VideoItem from './posts/videos/VideoItem'
import Posts from './posts/Posts'
import RightAside from './RightAside'
import { PostItemLoading } from './loading/Index'
import { useLocation } from 'react-router-dom';
import Post from './posts/Post'
import axios from 'axios'
import { mainUrl } from '../API'
import { useSelector } from 'react-redux'

function Home() {
    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================

    const location = useLocation();
    const [lastPostTemp, setLastPostTemp] = useState('');

    const [allPosts, setAllPosts] = useState([]);
    const [postsLoading, setPostsLoading] = useState(false);
    const [postsError, setPostsError] = useState(false);
    const [loadingReq, setLoadingReq] = useState(true);
    // const [newLoading, setNewLoading] = useState(false);
    const [activeOnScroll, setActiveOnScroll] = useState(false);

    const { loadingUser, user, errorUser } = useSelector(state => state.getUser);
    
    useEffect(() => { //whenuser returned from create new post with new post info
        const lastPost = location.state;
        //console.log(lastPost);
        if (lastPost != null) {
            const lastPostType = lastPost.type;
            const user2 = { ...user, created_at: lastPost.created_at, time: 'just now' };
            if (lastPostType === "text") {
                setLastPostTemp(<Post postType="text" post={lastPost} user={user2} />);
            }
            if (lastPostType === "image") {
                setLastPostTemp(<Post postType="image" post={lastPost} user={user2} />);
            }
        }

    }, []);

    useEffect(() => {
        // posts/friends
        const getPostsInfo = async () => {
            setPostsLoading(true);
            setPostsError(false);
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            if (!loadingToken)
                await axios.post(`${mainUrl}/posts/friends/all`, null, config)
                    .then(info => {
                        //console.log(info);
                        setPostsError(false);
                        let oldPosts = [...allPosts];
                        info.data.posts.forEach(post => {
                            oldPosts.push(post);
                        });
                        setAllPosts(oldPosts);
                        setActiveOnScroll(true);
                        // setNewLoading(false);
                        setLoadingReq(false);
                    })
                    .catch(err => {
                        //console.log(err);
                        setPostsError(true);
                    })
                    .finally(() => {
                        setPostsLoading(false);

                    })
        }

        if (!activeOnScroll)
            getPostsInfo();

    }, [activeOnScroll]);
    // //console.log(allPosts);

    let allPosstsTemplate = [];

    if (allPosts.length <= 10 && !loadingReq) {
        //console.log("allPosts.length <= 10");
        allPosstsTemplate = allPosts.map((post, i) => { //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
            if (allPosts.length < 11) {
                let user = {
                    "id": post.user_id,
                    "name": post.name,
                    "profile_img": post.profile_img,
                    "created_at": post.created_at,
                    "time": post.time
                };
                if (post.post_type === "text") {
                    return <Post key={i} postType="text" post={post} user={user} />;
                }
                else if (post.post_type === "image") {
                    return <Post key={i} postType="image" post={post} user={user} />;
                }
            }
        }) //map
    }

    let lastPosstsTemplate = [];
    if (allPosts.length > 10) {
        //console.log("allPosts.length > 10")
        lastPosstsTemplate = allPosts.map((post, i) => { //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
            if (i > 9) {
                let user = { "id": post.user_id, "name": post.name, "profile_img": post.profile_img, "created_at": post.created_at };
                if (post.post_type === "text") {
                    return <Post key={i} postType="text" post={post} user={user} />;
                }
                else if (post.post_type === "image") {
                    return <Post key={i} postType="image" post={post} user={user} />;
                }
            } else {
                return "";
            }

        })
        lastPosstsTemplate.forEach((post) => {
            allPosstsTemplate.push(post);
        })

        //console.log("lastPosstsTemplate = ", lastPosstsTemplate);
        lastPosstsTemplate = [];
    }

    document.body.onscroll = () => {
        if (window.scrollY > document.body.scrollHeight - 1000) {
            if (activeOnScroll) {
                //console.log(" b => ");
                setActiveOnScroll(false)
                setLoadingReq(true);
            }

        }
    }
    //console.log(allPosstsTemplate);
    return (

        <div className="body d-flex" id="home-page-container">

            <main>
                {
                    lastPostTemp
                }
                {
                    !postsError ?
                        postsLoading ?
                            <>
                                <PostItemLoading />
                                <PostItemLoading />
                            </>
                            :
                            <>
                                {allPosstsTemplate}
                            </>
                        :
                        <>
                            <h1 style={{ color: "red" }}>Ooops Sonthing went wrong</h1>
                        </>
                }
                {/* {
                    allPosts.length > 10 ?
                        allPosts.map((post, i) => { //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
                            if (i > 9) {
                                let user = { "id": post.user_id, "name": post.name, "profile_img": post.profile_img, "created_at": post.created_at };
                                if (post.post_type === "text") {
                                    return <Post key={i} postType="text" post={post} user={user} />;
                                }
                                else if (post.post_type === "image") {
                                    return <Post key={i} postType="image" post={post} user={user} />;
                                }
                            }
                        })
                        :
                        ""
                } */}
                {
                    loadingReq ?
                        <PostItemLoading />
                        :
                        null
                }
            </main>
            <RightAside />
        </div>
    )
}

export default Home;