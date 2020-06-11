import { combineReducers } from 'redux';
import { userReducers } from './user-redux/userReducers';


export const allReducers = combineReducers({
    user: userReducers
})