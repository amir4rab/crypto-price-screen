import React, { useEffect, useState, useCallback } from "react";
import { connect } from 'react-redux'

import { setLoadedData, updatingData } from '../../redux/apidata/apidata.actions';

import styles from "./home.module.scss";

import CryptoDisplayer from '../../component/cryptoDisplayer/cryptoDisplayer.component';
import Navbar from '../../component/navbar/navbar.component';

const Home = ({ 
    settings,
    setLoadedData,
    activeCoin,
    data
    }) => {

    const [ state, setState ] = useState({
        currData: null
    });

    const fetchDataFromApi = useCallback(() => {
        // console.log(settings);
        fetch(`https://api.coinranking.com/v1/public/coins?base=${ settings.base }&timePeriod=${ settings.timePeriod }`)
        .then(res => res.json())
        .then(res => {
            setLoadedData(res.data);
            setState(currState => ({
                ...currState,
                currData: res.data.base
            }));
        })
        .catch(err => console.error(err));
    },[ setLoadedData, settings ]);

    useEffect( () => {
        fetchDataFromApi();
    },[fetchDataFromApi]);

    console.log(data.data);

    return (
        <div className={styles.home}>
            <Navbar />
            { 
                state.currData === null ? null :
                <CryptoDisplayer coinData={ activeCoin } baseData={ state.currData } /> 
            }
        </div>
    );
}

const mapStatesToProps = state => ({
    data: state.apiData,
    loaded: state.apiData.loaded,
    settings: state.settingsData,
    activeCoin: state.apiData.activeCoin
});

const mapDispachToProps = dispatch => ({
    setLoadedData: data => dispatch(setLoadedData(data)),
    updatingData: _ => dispatch(updatingData())
});

export default connect( mapStatesToProps, mapDispachToProps )(Home);