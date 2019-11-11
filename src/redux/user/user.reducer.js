import {types} from '../types';
const INIT_STATE = {
    currentUser: null
}
const userReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case types.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;