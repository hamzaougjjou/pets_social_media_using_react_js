import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Posts from './Posts';
import NotFound from "./../NotFound"
import Friends from './Friends';
import Groups from './Groups';
import Pages from './Pages';
import ProfileHeader from './ProfileHeader';
import Settings from './Settings';

function Profile() {

    return (


        <div className='body d-flex'>
            <main className="main-profile">
                <h1>Account Overview</h1>

                <ProfileHeader />

                <Routes>
                    <Route exact path='/' element={<Posts />} ></Route>
                    <Route exact path='/posts' element={<Posts />} ></Route>
                    <Route exact path='/About' element={<About />} ></Route>
                    <Route exact path='/friends' element={<Friends />} ></Route>
                    <Route exact path='/groups' element={<Groups />} ></Route>
                    <Route exact path='/setting' element={<Settings />} ></Route>
                    <Route exact path='/*' element={<NotFound />}></Route>
                </Routes>





            </main>
        </div>
    )
}

export default Profile; 