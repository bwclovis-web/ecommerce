import {types} from '../types';
import {addItemToCart, removeItemFromCart} from './cart.utils';

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
            };
        case types.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case types.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case types.CLEAR_ITEM_FROM_CART: 
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}

export default cartReducer;