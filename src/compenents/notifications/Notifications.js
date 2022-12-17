import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Loading from '../Loading'
import BirthDayNotice from './BirthDayNotice'
import LikeNotic from './LikeNotic'
import MentionNotic from './MentionNotic'
import NewPostNotic from './NewPostNotic'
import ReplayCommentNotic from './ReplayCommentNotic'

function Notifications() {
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
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* <Loading /> */}
        </>
    )
}

export default Notifications