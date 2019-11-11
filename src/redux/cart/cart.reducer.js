import {types} from '../types';

const INIT_STATE = {
    isHidden: true,
    cartItems: []
}

const cartReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case types.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        case types.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}

export default cartReducer;