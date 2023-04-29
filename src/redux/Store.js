import { configureStore } from "@reduxjs/toolkit";
import FriendsSlice from "./reducers/FriendsSlice";
import NoticReducer from "./reducers/NoticReducer";
import refreshLoginSlice from "./reducers/refreshLoginSlice";
import RegisterReducer from "./reducers/RegisterReducer";
import UserReducer from "./reducers/UserReducer";



let store = configureStore( {
    reducer:{
        getUser : UserReducer,
        refreshLogin : refreshLoginSlice,
        getFriends : FriendsSlice ,
        noticCount : NoticReducer ,
        RegisterReducer : RegisterReducer ,
    }
} );

export default store;