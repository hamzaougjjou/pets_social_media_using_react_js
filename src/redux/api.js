import axios from "axios";
import { mainUrl } from "../API";
import { getUser, startGetUser, getUserError } from "./reducers/UserReducer"
import { startLogin, getLogin, LoginError } from "./reducers/refreshLoginSlice"
import { getFirends, startGetFirends } from "./reducers/FriendsSlice";


export const refreshLogin = async (dispatch) => {

    let authInfo = JSON.parse(localStorage.getItem('authInfo'));
    if (authInfo === null) {
        dispatch(LoginError());
        return 0;
    }
    dispatch(startLogin());
    await axios.post(`${mainUrl}/login`, { "email": authInfo.email, "password": authInfo.password })
        .then(data => {
            if (data.data.success === true) {
                const authInfo2 = {
                    "email": authInfo.email,
                    "password": authInfo.password,
                    "token": data.data.token
                }
                dispatch(getLogin(authInfo2));
            }
            if (data.data.code === 0) { //Email or password is wrong
                dispatch(LoginError());
            }
        }
        ).catch(errors => {//somthing went worng
            dispatch(LoginError());
        });
}

//get loged in user informations
export const getCurrentUser = async (dispatch) => {
    dispatch(startGetUser());
    let authInfo = JSON.parse(localStorage.getItem('authInfo'));
    let token = authInfo.token;
    if (authInfo === null) {
        dispatch(getUserError());
        return false;
    }
    
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    await axios.get(`${mainUrl}/profile/info`, config)
        .then(info => {
            dispatch(getUser(info.data.user[0]))
        }).catch(err => {
            dispatch(getUserError())
        });
}
//get loged in user informations
export const getFriendsFun = async (dispatch) => {
    dispatch(startGetFirends());
    const getFriendsInfo = async () => {
        let authInfo = JSON.parse(localStorage.getItem('authInfo'));
        let token = authInfo.token;
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

