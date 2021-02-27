const INITIAL_STATE = {
    base: 'USD',
    timePeriod: '24h',
}

const settingsdataReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case 'SET_BASE_TO_EUR':
            return ({
                ...state,
                base: 'EUR'
            });
        case 'SET_BASE_TO_USD':
            return ({
                ...state,
                base: 'USD'
            });
        case 'SET_BASE_TO_JPY':
            return ({
                ...state,
                base: 'JPY'
            });
        case 'SET_BASE_TO_GBP':
            return ({
                ...state,
                base: 'GBP'
            });
        case 'SET_TP_TO_24H':
            return ({
                ...state,
                timePeriod: '24h'
            });
        case 'SET_TP_TO_30D':
            return ({
                ...state,
                timePeriod: '30d'
            });
        case 'SET_TP_TO_7D':
            return ({
                ...state,
                timePeriod: '7d'
            });
        case 'CUSTOM': {
            return ({
                ...state,
                ...action.payload
            });
        }
        default:
            return state;
    }
}

export default settingsdataReducer;