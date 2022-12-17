import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import Profile from './profile/Profile';
import Videos from './videos/Videos';
import Settings from './settings/Settings';
import People from './people/People';
import Messanger from './messanger/Messanger';
import Search from './search/Search';

import About from './profile/About';
import Posts from './profile/Posts';
import Friends from './profile/Friends';
import Groups from './profile/Groups';
import Pages from './profile/Pages';
import Requests from './requests/Requests';
import Store from './store/Store';
import NewPost from './newPost/NewPost';
import Help from './help/Help';
import MainGroups from './groups/Groups';
// group details
import GroupDetails from './group-details/GroupDetails';
import GroupDetailsPosts from './group-details/GroupDetailsPosts';
import {About as groupDetailsAbout}  from './group-details/About';
import {Mumbers as groupDetailsMumbers}  from './group-details/Mumbers';
import {Managers as groupDetailsManager}  from './group-details/Managers';
import {Settings as groupDetailsSettings}  from './group-details/Settings';
import Notifications from './notifications/Notifications';

export default class NavPages extends Component {
    render() {
        return (

            <Routes>

                <Route exact path='/' element={<Home />} ></Route>
                <Route path="/profile/*" element={<Profile />}>
                    <Route exact path='./*' element={<NotFound />} ></Route>
                    <Route exact path='' element={<Posts />} ></Route>
                    <Route exact path='about' element={<About />} ></Route>
                    <Route exact path='posts' element={<Posts />} ></Route>
                    <Route exact path='friends' element={<Friends />} ></Route>
                    <Route exact path='groups' element={<Groups />} ></Route>
                    <Route exact path='pages' element={<Pages />} ></Route>
                </Route>
                <Route exact path='/videos' element={<Videos />} ></Route>
                <Route exact path='/settings' element={<Settings />} ></Route>
                <Route exact path='/people' element={<People />} ></Route>
                <Route exact path='/messanger' element={<Messanger />} ></Route>
                <Route exact path='/messanger/:id/*' element={<Messanger />} ></Route>
                <Route exact path='/search' element={<Search />} ></Route>
                <Route exact path='/requests' element={<Requests />} ></Route>
                <Route exact path='/store' element={<Store />} ></Route>
                <Route exact path='/posting' element={<NewPost />} ></Route>
                <Route exact path='/groups' element={<MainGroups />} ></Route>

                <Route exact path='/groups/:groupId/*' element={<GroupDetails />} >
                    <Route exact path='' element={<GroupDetailsPosts />} ></Route>
                    <Route exact path='posts' element={<GroupDetailsPosts />} ></Route>
                    <Route exact path='about' element={<groupDetailsAbout />} ></Route>
                    <Route exact path='mumbers' element={<groupDetailsMumbers />} ></Route>
                    <Route exact path='managers' element={<groupDetailsManager />} ></Route>
                    <Route exact path='settings' element={<groupDetailsSettings />} ></Route>
                    <Route exact path='./*' element={<NotFound />}></Route>
                </Route>
                {/* <Route exact path='/groups/:groupId/*' element={<NotFound />} ></Route> */}

                <Route exact path='/help' element={<Help />} ></Route>
                <Route exact path='/notifications' element={<Notifications />} ></Route>
                <Route exact path='/*' element={<NotFound />}></Route>

            </Routes>

        )
    }
}
