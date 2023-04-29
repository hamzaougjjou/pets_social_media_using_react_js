import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Posts from './Posts';
import NotFound from "./../NotFound"
import Friends from './Friends';
import Groups from './Groups';
import Files from './Files';
import ProfileHeader from './ProfileHeader';

function Profile() {

    return (


        <div className='body d-flex' style={{ maxWidth: "100%" }}>
            <main className="main-profile" style={{ maxWidth: "100%" }}>
                <h1>Account Overview</h1>

                <ProfileHeader />

                <Routes>
                    
                    <Route exact path='/' element={<Posts />} ></Route>
                    <Route exact path='/posts' element={<Posts />} ></Route>
                    <Route exact path='/About' element={<About />} ></Route>
                    <Route exact path='/friends' element={<Friends />} ></Route>
                    <Route exact path='/groups' element={<Groups />} ></Route>
                    <Route exact path='/files' element={<Files />}></Route>
                    <Route exact path='/*' element={<NotFound />}></Route>
                    
                </Routes>

            </main>
        </div>
    )
}

export default Profile; 