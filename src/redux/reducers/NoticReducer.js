


let initState = {
    count: 0
}

const NoticReducer = (state = initState, action) => {

    switch ( action.type ) {
        case 'RESRT':
            return { ...state , count:0 }
        case 'CREATE':
            return { ...state , count: action.payload.count }
    }
    return state;
}

export default NoticReducer;