import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NotificationItemLoading } from '../loading/Index'
import { mainUrl } from "./../../API";
import NotificationItem from './NotificationItem'

function Notifications(props) {

    const dispatch = useDispatch(); 

    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================
    const [notifications, setNotifications] = useState([]);
    const [loadingNotifications, setLoadingNotifications] = useState(true);
    //get all notifications 
    useEffect(() => { //get requests count
        const getAllNotic = async () => {
            setLoadingNotifications(true);

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            if (!loadingToken)
                await axios.get(mainUrl + '/notifications', config)
                    .then(info => {
                        // console.log(info.data);
                        dispatch( {type : 'RESRT' } );
                        setNotifications(info.data.notifications);

                    }).catch(err => {
                        console.log(err);
                    }).finally(() => {
                        setLoadingNotifications(false);
                    })
        }
        getAllNotic();

    }, [])
    let allNoticTemplate = '';

    //set notification as read
    const readNotice = async () => {

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        if (!loadingToken)
            await axios.put(mainUrl + '/notifications/read', null, config)
                .then(info => {
                    // console.log(info.data);
                }).catch(err => {
                    console.log(err);
                })
    }


    if (!loadingNotifications) {

        readNotice(); //set notification as read

        allNoticTemplate = notifications.map((notic, i) => {
            return <NotificationItem key={i} notic={notic} />;
        });
    }


    return (
        <>
            <div className="notices-box back-col-wh" id="notices-box">
                <div className="notices-top">
                    <div className="notices-info flex-between bor-bott-col">
                        <h3>Notices</h3>
                    </div>
                </div>
                <div className="body-notices">
                    <div className="body-notic-bo">
                        {
                            !loadingNotifications ?
                                allNoticTemplate
                                :
                                <>
                                    <NotificationItemLoading />
                                    <NotificationItemLoading />
                                    <NotificationItemLoading />
                                    <NotificationItemLoading />
                                    <NotificationItemLoading />
                                    <NotificationItemLoading />
                                </>
                        }

                        {/* <NavLink to='./home' style={{ color: 'black' }}>
                            <NewPostNotic />
                        </NavLink>

                        <NotificationItemLoading />

                        <NavLink to='./home' style={{ color: 'black' }}>
                            <LikeNotic />
                        </NavLink>
                        <NavLink to='./home' style={{ color: 'black' }}>
                            <ReplayCommentNotic />
                        </NavLink>
                        <NavLink to='./home' style={{ color: 'black' }}>
                            <NewPostNotic />
                        </NavLink>
                        <NavLink to='./home' style={{ color: 'black' }}>
                            <NewPostNotic />
                        </NavLink>
                        <NavLink to='./home' style={{ color: 'black' }}>
                            <LikeNotic />
                        </NavLink>
                        <NavLink to='./home' style={{ color: 'black' }}>
                            <ReplayCommentNotic />
                        </NavLink>
                        <NavLink to='./home' style={{ color: 'black' }}>
                            <NewPostNotic />
                        </NavLink>

                        <NavLink to='./home' style={{ color: 'black' }}>
                            <MentionNotic />
                        </NavLink>
                        <NavLink to='./home' style={{ color: 'black' }}>
                            <BirthDayNotice />
                        </NavLink>
                        <NavLink to='./home' style={{ color: 'black' }}>
                            <NewPostNotic />
                        </NavLink>
                        <NavLink to='./home' style={{ color: 'black' }}>
                            <NewPostNotic />
                        </NavLink> */}

                    </div>
                </div>
            </div>
            {/* <Loading /> */}
        </>
    )
}

export default Notifications