import { combineReducers } from 'redux';
import dojoReducer from './dojo-reducer';

export default combineReducers({
    dojo: dojoReducer
});