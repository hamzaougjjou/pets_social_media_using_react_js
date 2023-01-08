import { combineReducers, createStore } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import RegisterReducer from "./reducers/RegisterReducer";


const RootReducer = combineReducers({
    CounterReducer:CounterReducer,
    RegisterReducer : RegisterReducer
})

let store = createStore( RootReducer );

export default store;