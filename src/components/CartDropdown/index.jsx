import React from 'react';
import Button from '../Button';
import './styles.scss';
 
const Cart = () => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items"></div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
}
 
export default Cart;