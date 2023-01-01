import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './compenents/Home';
import NotFound from './compenents/NotFound';
import Profile from './compenents/profile/Profile';
import Videos from './compenents/posts/videos/Videos';
import Settings from './compenents/settings/Settings';
import People from './compenents/people/People';
import Messanger from './compenents/messanger/Messanger';
import Search from './compenents/search/Search';

import About from './compenents/profile/About';
import Posts from './compenents/profile/Posts';
import Friends from './compenents/profile/Friends';
import Groups from './compenents/profile/Groups';
import Pages from './compenents/profile/Pages';
import Requests from './compenents/requests/Requests';
import Store from './compenents/store/Store';
import NewPost from './compenents/newPost/NewPost';
import Help from './compenents/help/Help';
import MainGroups from './compenents/groups/Groups';
// group details
import GroupDetails from './compenents/group-details/GroupDetails';
import GroupDetailsPosts from './compenents/group-details/GroupDetailsPosts';
import Notifications from './compenents/notifications/Notifications';
//authentication
import Login from './auth/login/Login';
import { Main as HomeMain } from './Main';
import { Main as AuthMain } from './auth/Main';
import ForgotPassword from './auth/reset-pass/ForgotPassword';
import InsertResetCode from './auth/reset-pass/InsertResetCode';
import ChangePassword from './auth/reset-pass/ChangePassword';
import Register from './auth/register/Register';
import ValidateEmail from './auth/validateEmail/ValidateEmail';
import ChangePasswordSettings from './compenents/settings/ChangePassword';
import EditProfileName from './compenents/settings/EditeProfileName';

export default class NavPages extends Component {
    render() {
        return (

            <Routes>
                <Route path='/*' element={<NotFound />}></Route>

                <Route path='/' element={<HomeMain />} >
                    <Route exact path='' element={<Home />} ></Route>
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
                    <Route exact path='/settings/change-password' element={<ChangePasswordSettings />} ></Route>
                    <Route exact path='/settings/edite-profile-name' element={<EditProfileName />} ></Route>
                    <Route exact path='/people' element={<People />} ></Route>
                    <Route exact path='/messanger/*' element={<Messanger />} ></Route>
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
                    <Route exact path='/help' element={<Help />} ></Route>
                    <Route exact path='/notifications' element={<Notifications />} ></Route>
                    <Route exact path='/*' element={<NotFound />}></Route>
                </Route>

                <Route path='/auth' element={<AuthMain />}>
                    <Route path='login' element={<Login />} ></Route>
                    <Route path='' element={<Login />} ></Route>
                </Route>
                <Route path='auth/forget-password' element={<AuthMain />}>
                    <Route path='' element={<ForgotPassword />} ></Route>
                </Route>
                <Route path='auth/insert-reset-code' element={<AuthMain />}>
                    <Route path='' element={<InsertResetCode />} ></Route>
                </Route>
                <Route path='auth/change-password' element={<AuthMain />}>
                    <Route path='' element={<ChangePassword />} ></Route>
                </Route>
                <Route path='auth/register' element={<AuthMain />}>
                    <Route path='' element={<Register />} ></Route>
                </Route>
                <Route path='auth/virify-email' element={<AuthMain />}>
                    <Route path='' element={<ValidateEmail />} ></Route>
                </Route>

            </Routes>

        )
    }
}
