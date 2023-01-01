import { INCRIMENT , DECRIMENT , RESET } from "../actions/Types";

 let intStat = {
    count : 0
}

const CounterReducer = ( state=intStat,action ) =>{

    switch ( action.type ) {
        case INCRIMENT:
            return {...state , count : state.count + 1}
        case DECRIMENT:
            return {...state, count : state.count - 1}
        case RESET:
            return {...state, count : 0 }
        default:
            return state;
    }

}

export default CounterReducer;