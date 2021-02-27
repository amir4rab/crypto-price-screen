const INITIAL_STATE = {
    loaded: false,
    data: null,
    activeCoin: null
}

const apidataReducer = ( state = INITIAL_STATE , action ) => {
    switch ( action.type ) {
        case 'SET_LOADED_DATA':
            return {
                ...state,
                loaded: true,
                activeCoin: action.payload.coins[0],
                data: action.payload
            }
        case 'UPDATING_DATA': {
            return {
                ...state,
                loaded: false
            }
        }
        case 'SET_ACTIVE_COIN': {
            return {
                ...state,
                activeCoin: action.payload
            }
        }
        default:
            return state
    }
}

export default apidataReducer;

// {
//     type: null,
//     payload:
// }