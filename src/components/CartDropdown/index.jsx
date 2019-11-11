import React from 'react';
import {connect} from 'react-redux';
import Button from '../Button';
import CartItem from '../CartItem';
import './styles.scss';
 
const Cart = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(item => <CartItem key={item.id} item={item} />)
                }
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});
 
export default connect(mapStateToProps)(Cart);