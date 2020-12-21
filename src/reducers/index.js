import {combineReducers} from 'redux';
import CountReducer from './CountReducer';
import InputValueReducer from './InputValueReducer';

export default combineReducers({
    counter: CountReducer,
    input: InputValueReducer
});
