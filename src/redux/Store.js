import { configureStore } from "@reduxjs/toolkit";
import FriendsSlice from "./reducers/FriendsSlice";
import refreshLoginSlice from "./reducers/refreshLoginSlice";
import UserReducer from "./reducers/UserReducer";



let store = configureStore( {
    reducer:{
        getUser : UserReducer,
        refreshLogin : refreshLoginSlice,
        getFriends : FriendsSlice
    }
} );

export default store;