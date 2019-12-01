import {types} from '../types';
const INIT_STATE = {
    currentUser: null,
    error: null
}
const userReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case types.GOOGLE_SIGN_IN_SUCCESS:
        case types.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case types.GOOGLE_SIGN_IN_FAIL:
        case types.EMAIL_SIGN_IN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;