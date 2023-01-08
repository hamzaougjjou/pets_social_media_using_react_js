import React, { useEffect } from 'react'
import { Route, Routes, useNavigate, useNavigation, useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import GroupDetailsHeader from './GroupDetailsHeader';
import {About} from './About';
import {Managers} from './Managers';
import {Mumbers} from './Mumbers';
import Posts from './GroupDetailsPosts';
import {Settings} from './Settings';

function GroupDetails() {

    const { groupId } = useParams();
    console.log(groupId);

    return (
        <>

            <div className='body d-flex'>
                <main className="main-profile">
                    <GroupDetailsHeader />
                    <Routes>
                        <Route exact path='/' element={<Posts />} ></Route>
                        <Route exact path='/posts' element={<Posts />} ></Route>
                        <Route exact path='/About' element={<About />} ></Route>
                        <Route exact path='/mumbers' element={<Mumbers />} ></Route>
                        <Route exact path='/managers' element={<Managers />} ></Route>
                        <Route exact path='/settings' element={<Settings />} ></Route>

                        <Route exact path='/*' element={<NotFound />}></Route>
                    </Routes>
                    
                </main>
            </div>
        </>
    )
}

export default GroupDetails;