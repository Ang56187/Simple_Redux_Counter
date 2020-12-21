import {combineReducers} from 'redux';
import CountReducer from './CountReducer';

export default combineReducers({
    counter: CountReducer
});
