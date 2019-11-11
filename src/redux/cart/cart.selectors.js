import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems 
)

export const selectItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((quantity, item) => quantity + item.quantity, 0)
)