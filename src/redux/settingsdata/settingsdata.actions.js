// export const setLoadedData = data => ({
//     type: 'SET_LOADED_DATA',
//     payload: data
// });


export const setBaseToEur = _ => ({
    type: 'SET_BASE_TO_EUR',
    payload: null
})

export const setBaseToUsd = _ => ({
    type: 'SET_BASE_TO_USD',
    payload: null
})

export const setBaseToJpy = _ => ({
    type: 'SET_BASE_TO_JPY',
    payload: null
})

export const setBaseToGbp = _ => ({
    type: 'SET_BASE_TO_GBP',
    payload: null
})

export const setTpTo24h = _ => ({
    type: 'SET_TP_TO_24H',
    payload: null
})

export const setTpTo30d = _ => ({
    type: 'SET_TP_TO_30D',
    payload: null
})

export const setTpTo7d = _ => ({
    type: 'SET_TP_TO_7D',
    payload: null
})

export const costum = data => ({
    type: 'CUSTOM',
    payload: data
})