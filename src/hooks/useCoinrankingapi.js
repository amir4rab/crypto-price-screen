import { useEffect, useState, useCallback } from 'react';

const useCoinrankingapi = ( settings ) => {
    
    const [ apidata, setApidata ] = useState(null);
    const [ base, setBaseState ] = useState(null);
    
    const fetchData = useCallback(async () => {
        // const res = await fetch(`https://api.coinranking.com/v1/public/coins?base=${ settings.base }&timePeriod=${ settings.timePeriod }`)
        // .then(res => res.json())
        // .then(res => {
        //     setApidata(currState => ({
        //         ...currState,
        //         currData: res.data.base
        //     }));
        //     return res;
        // })
        // .catch(err => console.error(err));
        const res = await fetch(`https://api.coinranking.com/v1/public/coins?base=${ settings.base }&timePeriod=${ settings.timePeriod }`)
        const resJson = await res.json();
        // console.log(`res :`, resJson.data);
        setApidata(resJson.data);
        setBaseState(resJson.data.base)
        return resJson.data
    },[ settings ])

    useEffect(_ => {
        fetchData();
    },[fetchData]);

    return { apidata, fetchData, base };
}

export default useCoinrankingapi;