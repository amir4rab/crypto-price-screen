import { combineReducers } from 'redux';

import apidataReducer from './apidata/apidata.reducer';
import settingsataReducer from './settingsdata/settingsdata.reducer';

export default combineReducers({
    apiData: apidataReducer,
    settingsData: settingsataReducer
});