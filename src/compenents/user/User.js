import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import About from './About';
import Posts from './Posts';
import NotFound from "./../NotFound"
import Friends from './Friends';
import Groups from './Groups';
import Files from './Files';
import ProfileHeader from './ProfileHeader';
import { useSelector } from 'react-redux';
import { mainUrl } from '../../API';
import axios from 'axios';

function User() {

    const navigate = useNavigate();
    const authUser = useSelector(state => state.getUser);
    const { id } = useParams();
    useEffect(() => {
        if (authUser.user.id == id) {
            navigate('/profile')
        }
    }, [authUser.loading])
    // ====================================
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            setLoading(true);
            let authInfo = JSON.parse(localStorage.getItem('authInfo'));
            let token = authInfo.token;

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }

            await axios.get(mainUrl + `/user/${id}/info`, config)
                .then(info => {
                    console.log(info.data);
                    setUser(info.data.user);
                }).catch(err => {
                    console.log(err);
                }).finally(() => {
                    setLoading(false);
                })
        }
        getUser();
    }, []);
    // ====================================


    return (

        <div className='body d-flex' style={{ maxWidth: "100%" }}>
            <main className="main-profile" style={{ maxWidth: "100%" }}>
                <h1>Account Overview</h1>

                <ProfileHeader loading={loading} user={user} />

                <Routes>

                    <Route exact path='/' element={<Posts userId={id} />} ></Route>
                    <Route exact path='/posts' element={<Posts userId={id} />} ></Route>
                    <Route exact path='/About' element={<About userId={id} loading={loading} user={user} />} ></Route>
                    <Route exact path='/friends' element={<Friends userId={id} />} ></Route>
                    <Route exact path='/groups' element={<Groups userId={id} />} ></Route>
                    <Route exact path='/files' element={<Files userId={id} />}></Route>
                    <Route exact path='/*' element={<NotFound />}></Route>

                </Routes>





            </main>
        </div>
    )
}

export default User; 