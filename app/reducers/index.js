import { combineReducers } from 'redux'
import auth from './auth';
import drawer_reducer from './drawer';

export default combineReducers({
    auth: auth,
    drawer: drawer_reducer,
});