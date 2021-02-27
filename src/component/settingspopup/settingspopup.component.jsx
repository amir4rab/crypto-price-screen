import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { costum } from '../../redux/settingsdata/settingsdata.actions';

import CloseIcon from '@material-ui/icons/Close';
import styles from './settingspopup.module.scss';

const SettingsPopup = ({ closePopup, settings, setSettings }) => {
    const [ state, setState ] = useState({
        settingsChanged: false,
        settingsData: null
    });

    useEffect( _ => {
        setState( currState=> ({
            ...currState,
            settingsData: settings
        }));
    },[settings]);

    const setStateSettings = e => {
        switch( e.target.id ){
            case 'base':{
                setState( currState=> ({
                    ...currState,
                    settingsData: {
                        ...currState.settingsData,
                        base: e.target.value
                    },
                    settingsChanged: true
                }));
                break;
            }
            case 'timePeriod':{
                setState( currState => ({
                    ...currState,
                    settingsData: {
                        ...currState.settingsData,
                        timePeriod: e.target.value
                    },
                    settingsChanged: true
                }));
                break;
            }
            default:
                return
        }
    }

    const setReduxSettingsData = _ => {
        setSettings(state.settingsData);
        setState(currState => ({
            ...currState,
            settingsChanged: false
        }));
        closePopup();
    }

    const closeThisComponent = (e) => {
        if ( e.target.id === 'outer' ) closePopup();
    }

    const reloadBtn = <button className={ styles.greenBtn } onClick={setReduxSettingsData} >Save changes</button>;

    return (
        <div className={ styles.main } onClick={closeThisComponent} id='outer'>
            <div className={ styles.inner }>
                <button className={ styles.closeBtn } onClick={ closePopup } ><CloseIcon className={ styles.closeBtn_icon } /></button>
                <div className={ styles.optionGroup }>
                    <p className={ styles.optionGroup_title }>Your Currency</p>
                    <select
                        id="base" 
                        onChange={ setStateSettings }
                        defaultValue={ settings.base }
                    >
                        <option value="USD" >Usa Dollar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Gb Pound</option>
                        <option value="JPY">Japanese yen</option>
                        <option value="BTC">Bitcoin</option>
                    </select>
                </div>
                <div className={ styles.optionGroup }>
                    <p className={ styles.optionGroup_title }>Charts time lenght</p>
                    <select 
                        id="timePeriod" 
                        onChange={ setStateSettings }
                        defaultValue={ settings.timePeriod }
                    >
                        <option select='true' value="24h">24 hours</option>
                        <option value="7d">7 days</option>
                        <option value="30d">30 days</option>
                    </select>
                </div>
                <div className={ styles.optionGroup }>
                    <p className={ styles.optionGroup_title }>Saving changes</p>
                    { state.settingsChanged === true ? reloadBtn : <p className={ styles.optionGroup_smallText }>no changes yet!</p> }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    settings: state.settingsData
});

const mapDispachToProps = dispach => ({
    setSettings: data => dispach(costum(data))
});

export default connect( mapStateToProps , mapDispachToProps )(SettingsPopup);