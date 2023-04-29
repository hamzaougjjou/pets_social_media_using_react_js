import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, useNavigation, useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import GroupDetailsHeader from './GroupDetailsHeader';
import { About } from './About';
import { Managers } from './Managers';
import { Members } from './Members';
import Posts from './GroupDetailsPosts';
import { Settings } from './Settings';
import axios from 'axios';
import { mainUrl } from '../../API';
import Loading from '../Loading';
import { GroupRequests } from './Requests';
import CreatePost from './CreatePost';
import PostsRequests from './PostsRequests';
import { useSelector } from 'react-redux';

function GroupDetails() {

    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================
    const { groupId } = useParams();
    const [groupInfoLoading, setGroupInfoLoading] = useState(true);
    const [groupInfo, setGroupInfo] = useState({});

    const [joined, setJoined] = useState(null);

    useEffect(() => {
        const getGroupInfo = async () => {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            setGroupInfoLoading(true);

            if (!loadingToken)
                await axios.get(`${mainUrl}/group/${groupId}`, config)
                    .then(info => {
                        setGroupInfo(info.data.group);
                        setJoined(info.data.group.joined);

                    }).catch(err => {
                        console.log(err);
                        alert("Somthing went wrong")
                    }).finally(() => {
                        setGroupInfoLoading(false)
                    })
        }
        getGroupInfo();
    }, []);


    return (
        <>

            <div className='body d-flex w-full'>
                <main className="main-profile">
                    <GroupDetailsHeader groupId={groupId} groupInfoLoading={groupInfoLoading} groupInfo={groupInfo} joined={joined} setJoined={setJoined} />
                    {
                        joined === 1 ?

                            <Routes>
                                <Route exact path='/' element={<Posts groupId={groupId} />} ></Route>
                                <Route exact path='/posts' element={<Posts groupId={groupId} />} ></Route>
                                <Route exact path='/About' element={<About />} ></Route>
                                <Route exact path='/members' element={<Members groupId={groupId} groupInfoLoading={groupInfoLoading} groupInfo={groupInfo} />} ></Route>
                                <Route exact path='/managers' element={<Managers groupId={groupId} groupInfoLoading={groupInfoLoading} groupInfo={groupInfo} />} ></Route>
                                <Route exact path='/settings' element={<Settings />} ></Route>
                                <Route exact path='/new-post' element={<CreatePost groupId={groupId} groupInfoLoading={groupInfoLoading} groupInfo={groupInfo} />} ></Route>
                                {
                                    groupInfo.is_admin &&
                                    <>
                                        <Route exact path='/requests' element={<GroupRequests groupId={groupId} />} ></Route>
                                        <Route exact path='/posts/requests' element={<PostsRequests groupId={groupId} />} ></Route>
                                    </>
                                }

                                <Route exact path='/*' element={<NotFound />}></Route>
                            </Routes>
                            :
                            (joined === 0 || joined === -1) ?
                                <h3>you are not joied a group</h3>
                                :
                                <Loading />
                    }


                </main>
            </div>
        </>
    )
}

export default GroupDetails;