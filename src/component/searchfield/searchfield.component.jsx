import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setActiveCoin } from '../../redux/apidata/apidata.actions';

import CloseIcon from '@material-ui/icons/Close';
import styles from './searchfield.module.scss';

import Itemcolumn from './itemcolumn/itemcolumn'

const Searchfield = ({ coinsArr, closePopup, setActiveCoinToRedux }) => {
    const [ resArr, setResArr ] = useState([]);

    const searchInputStr = (e) => {
        if ( coinsArr.data.coins === undefined || null ) return;

        const res = coinsArr.data.coins.filter( coin => coin.symbol.includes(e.target.value.toUpperCase()));

        setResArr(res);
    }

    const closeThisComponent = (e) => {
        if ( e.target.id === 'outer' ) closePopup();
    }

    const setSelectedCoin = (coin) => {
        setActiveCoinToRedux(coin);
        closePopup();
    }

    return (
        <div className={ styles.main } id='outer' onClick={closeThisComponent}>
            <div className={ styles.inner }>
                <button className={ styles.closeBtn } onClick={ closePopup } ><CloseIcon className={ styles.closeBtn_icon } /></button>
                <input type="text" onKeyUp={searchInputStr} className={ styles.inner_input }/>
                <div className={ styles.inner_resOutput }>
                    {
                        resArr.length === 0 ? null : resArr.map( coin => <Itemcolumn data={coin} key={coin.id} selectCoinFn={setSelectedCoin}/>)
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    coinsArr: state.apiData
});

const mapDispatchToProps = dispatch => ({
    setActiveCoinToRedux: data => dispatch(setActiveCoin(data))
})

export default connect( mapStateToProps , mapDispatchToProps )(Searchfield);