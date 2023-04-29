import axios from "axios";
import { mainUrl } from "../API";
import { startLogin, getLogin, LoginError } from "./reducers/refreshLoginSlice"


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

