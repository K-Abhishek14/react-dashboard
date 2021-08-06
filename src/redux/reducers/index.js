import {combineReducers} from 'redux';
import {LoginReducer} from './loginReducer';

const rootReducer = combineReducers({
    loginIN : LoginReducer,
});
export default rootReducer;