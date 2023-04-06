import { combineReducers } from "redux";
import getCurrentUserSLice from "./reducers/UserReducer";


const RootReducer = combineReducers({
    getUserReducer : getCurrentUserSLice,
    refreshLogin : refreshLoginSlice
})


export default RootReducer;