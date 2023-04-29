import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mainUrl } from '../../API';
import { getFirends, startGetFirends } from "../../redux/reducers/FriendsSlice";

function Logic() {

    // =============AUTH================
    let refreshLogin = useSelector(state => state.refreshLogin);
    let token = refreshLogin.token;
    let loadingToken = refreshLogin.loading;
    // =============================

    const dispatch = useDispatch();

    useEffect(() => {
        //get loged in user friends
        const getFriendsFun = async (dispatch) => {
            dispatch(startGetFirends());
            const getFriendsInfo = async () => {
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
                await axios.get(mainUrl + '/friends/all', config)
                    .then(info => {
                        dispatch(getFirends(info.data.friends));
                    }).catch(err => {
                        console.log("error");
                    })
            }
            getFriendsInfo();

            setInterval(() => {
                getFriendsInfo();
            }, 15000);
        }
        getFriendsFun(dispatch);
    }, []);

    useEffect(() => {
    //set notification count
    const readNotice = async () => {

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        if (!loadingToken)
            await axios.get(mainUrl + '/notifications/count' , config)
                .then(info => {
                    console.log(info.data);
                    dispatch( {type : 'CREATE'  , payload:{count : info.data.count }} );
                }).catch(err => {
                    console.log('====================================');
                    console.log(err);
                    console.log('====================================');
                })
    }

    readNotice();

    }, []);

    return (
        <></>
    )
}

export default Logic;