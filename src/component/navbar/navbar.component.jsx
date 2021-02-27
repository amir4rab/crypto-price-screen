import React, { useState, Fragment } from 'react';

import SettingsPopup from '../settingspopup/settingspopup.component';
import Searchfield from '../searchfield/searchfield.component';

import styles from './navbar.module.scss';

import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = props => {
    const [ state, setState ] = useState({
        menuState: false,
        searchfieldState: false
    });

    const toggleMenu = _ => {
        setState( currState => ({
            ...currState,
            menuState: !currState.menuState
        }))
    }
    const closeMenu = _ => {
        setState( currState => ({
            ...currState,
            menuState: false
        }))
    }
    
    const toggleSearchfield = _ => {
        setState( currState => ({
            ...currState,
            searchfieldState: !currState.searchfieldState
        }))
    }
    const closeSearchfield = _ => {
        setState( currState => ({
            ...currState,
            searchfieldState: false
        }))
    }

    return (
        <Fragment>
            <div className={ styles.main }>
                <div>
                    <SearchIcon onClick={toggleSearchfield} className={ styles.menuBtn }/>
                </div>
                <div>
                    <SettingsIcon onClick={toggleMenu} className={ styles.menuBtn }/>
                </div>
            </div>
            {
                state.menuState ? <SettingsPopup closePopup={closeMenu} /> : null
            }
            {
                state.searchfieldState ? <Searchfield closePopup={closeSearchfield} /> : null
            }
        </Fragment>
    );
}

export default Navbar;