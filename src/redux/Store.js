import { createStore } from "redux";
import CounterReducer from "./reducers/CounterReducer";

let store = createStore( CounterReducer );

export default store;