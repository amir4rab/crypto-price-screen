import React, { useEffect, useState, useCallback } from "react";
import { connect } from 'react-redux'

import { setLoadedData, updatingData } from '../../redux/apidata/apidata.actions';

import styles from "./home.module.scss";

import CryptoDisplayer from '../../component/cryptoDisplayer/cryptoDisplayer.component';
import Navbar from '../../component/navbar/navbar.component';

import useCoinrankingapi from '../../hooks/useCoinrankingapi';

const Home = ({ 
    settings,
    setLoadedData,
    activeCoin
    }) => {

    const { apidata, base } = useCoinrankingapi(settings)

    useEffect(_=> {
        console.log(apidata === null);
        if(apidata !== null) setLoadedData(apidata);
    },[apidata, setLoadedData])

    return (
        <div className={styles.home}>
            <Navbar />
            { 
                apidata === null ? null :
                <CryptoDisplayer coinData={ activeCoin } baseData={ base } /> 
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