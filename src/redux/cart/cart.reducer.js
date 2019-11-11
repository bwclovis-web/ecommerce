import {types} from '../types';

const INIT_STATE = {
    isHidden: true
}

const cartReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case types.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        default:
            return state;
    }
}

export default cartReducer;