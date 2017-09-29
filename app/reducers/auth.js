import { AsyncStorage } from 'react-native'

import * as types from  '../constants/actionTypes.js'

const auth_reducer = (state = {}, action) => {
    switch(action.type){
        case types.LOGIN_SUCCESS:
        case types.LOGIN_FAIL:
        case types.SIGNUP_SUCCESS:
        case types.SIGNUP_FAIL:
        default:
            return state;
    }
}
export default auth_reducer;